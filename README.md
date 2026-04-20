# 🏟️ StadiumSync — Smart Venue Experience Platform

> **PromptWars Virtual Hackathon Submission**  
> Built with React 18 · TypeScript · Firebase · Google Cloud Run · Google Maps API

---

## 📌 Chosen Vertical

**Physical Event Experience** — Improving the attendee journey at large-scale sporting venues by solving three core pain points:

- 🚶 **Crowd Movement** — Real-time density tracking across all venue zones
- ⏱️ **Waiting Times** — Live queue intelligence with wait time estimates
- 📡 **Real-time Coordination** — Staff task management and admin broadcast alerts

---

## 💡 Approach & Logic

### The Problem
At large sporting events (stadiums with 50,000+ attendees), three recurring problems degrade the experience:

1. Attendees blindly walk into overcrowded gates or food courts with no visibility into alternatives
2. Staff have no centralized system to receive and act on real-time coordination tasks
3. Admins have no way to push instant alerts to specific zones during emergencies or peak moments

### Our Solution Philosophy
Rather than building a single-purpose tool, StadiumSync takes an **end-to-end journey approach** — covering the attendee experience from arrival to exit, while simultaneously equipping staff and admins with the tools they need to operate efficiently in real time.

The platform is structured around **3 role-based portals**:

| Role | Portal | Core Capability |
|------|--------|-----------------|
| 👤 Attendee | `/attendee` | Heatmap, queue times, exit routing, incident reporting |
| 🔧 Staff | `/staff` | Kanban task board, real-time task updates |
| ⚙️ Admin | `/admin` | Broadcast alerts, crowd zone control, alert history |

---

## ⚙️ How the Solution Works

### 1. 🗺️ Real-Time Crowd Heatmap
- Firestore collection `crowd_zones` stores density values (0–100) per zone with lat/lng coordinates
- Google Maps `HeatmapLayer` renders live density data as a color-coded overlay on the venue map
- Firestore `onSnapshot()` listener updates the heatmap in real time without page refresh
- Color scale: 🟢 Green (low) → 🟡 Yellow (medium) → 🔴 Red (high density)
- Clicking a zone marker shows: zone name, density %, estimated wait time, and a recommended alternative zone

### 2. ⏱️ Queue Intelligence
- Firestore `queues` collection tracks wait times, capacity, and status per zone
- QueueDashboard displays all zones as cards with live progress bars
- Attendees can filter by type (Gate / Concession / Restroom / Parking) and sort by wait time
- Data refreshes in real time via `onSnapshot()` — no manual refresh needed

### 3. 🧭 Smart Exit Routing
- Attendee selects their current section and clicks "Plan My Exit"
- The `exitRoutingService` scores all available exits using a weighted algorithm:

```
exitScore = (crowdDensity × 0.6) + (distanceScore × 0.4)
```

- Top 3 lowest-score exits are recommended, displayed with walk time and crowd level
- The recommended route is drawn as a polyline on the Google Map

### 4. 📋 Staff Coordination (Kanban Board)
- Tasks stored in Firestore `tasks` collection with fields: title, zone, priority, assignedTo, status
- Drag-and-drop Kanban board using `@dnd-kit` across 3 columns: Unassigned → In Progress → Resolved
- Real-time updates: when admin creates or updates a task, all staff see it instantly
- Optimistic UI updates for a snappy drag-and-drop experience

### 5. 🚨 Incident Reporting
- Attendees can report incidents via a floating action button (bottom-right corner)
- Form includes: incident type, zone location, description, optional photo upload (Firebase Storage)
- On submit: writes to Firestore `incidents` collection + calls Cloud Run `POST /api/incidents`
- Cloud Run publishes the incident to Google Cloud Pub/Sub topic `incident-reports`
- Attendee receives a unique tracking ID generated with `nanoid`

### 6. 📢 Admin Broadcast Alerts & Push Notifications
- Admin composes alerts with severity levels: Info / Warning / Emergency
- On send: writes to Firestore `alerts` + calls Cloud Run `POST /api/alerts`
- Cloud Run uses Firebase Admin SDK to send FCM push notifications to all registered attendees
- Attendees receive color-coded toast notifications (🔵 Info / 🟠 Warning / 🔴 Emergency)
- NotificationBell in header shows unread count badge, powered by Zustand state

### 7. ☁️ Cloud Run Backend (Node.js + TypeScript)
- Express API deployed as a containerized service on Google Cloud Run
- All routes protected by Firebase ID token verification (Firebase Admin SDK middleware)
- Security hardened with: Helmet.js, CORS, express-rate-limit, Zod input validation
- Multi-stage Docker build (node:20-alpine builder → production) running as non-root user
- CI/CD via Google Cloud Build (`cloudbuild.yaml`)

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   React 18 Frontend                  │
│         (Vite · TypeScript · Tailwind CSS)           │
│                                                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────────┐   │
│  │ Attendee  │  │   Staff   │  │     Admin     │   │
│  │  Portal   │  │   Portal  │  │    Portal     │   │
│  └─────┬─────┘  └─────┬─────┘  └──────┬────────┘   │
└────────┼──────────────┼───────────────┼─────────────┘
         │              │               │
         ▼              ▼               ▼
┌─────────────────────────────────────────────────────┐
│                  Google Firebase                     │
│  ┌──────────┐  ┌───────────┐  ┌──────────────────┐ │
│  │   Auth   │  │ Firestore │  │ Cloud Messaging  │ │
│  │ (Google  │  │ (Real-time│  │  (FCM Push       │ │
│  │ Sign-In) │  │  Database)│  │   Notifications) │ │
│  └──────────┘  └───────────┘  └──────────────────┘ │
│  ┌──────────┐                                        │
│  │ Storage  │  (Incident photo uploads)              │
│  └──────────┘                                        │
└─────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────┐
│             Google Cloud Run (Backend API)           │
│         Node.js · Express · TypeScript               │
│                                                      │
│  POST /api/alerts    →  FCM broadcast                │
│  POST /api/incidents →  Cloud Pub/Sub publish        │
│  GET  /api/zones     →  Crowd zone data              │
│  GET  /api/routes/:z →  Exit routing scores          │
│  GET  /health        →  Health check probe           │
└─────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────┐
│           Google Cloud Pub/Sub                       │
│   Topic: incident-reports  (async processing)        │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React 18 + TypeScript (Vite) |
| Styling | Tailwind CSS + Shadcn/ui |
| State Management | Zustand |
| Routing | React Router v6 (lazy loaded) |
| Forms & Validation | React Hook Form + Zod |
| Maps | Google Maps JavaScript API (`@vis.gl/react-google-maps`) |
| Authentication | Firebase Auth (Google Sign-In + Email) |
| Database | Firestore (real-time `onSnapshot`) |
| Push Notifications | Firebase Cloud Messaging (FCM) |
| File Storage | Firebase Storage |
| Backend | Node.js + Express + TypeScript |
| Deployment | Google Cloud Run (containerized) |
| CI/CD | Google Cloud Build |
| Drag & Drop | @dnd-kit/core + @dnd-kit/sortable |
| Testing | Vitest + React Testing Library + Playwright |
| Accessibility | WCAG 2.1 AA, axe-core audits |

---

## 🗄️ Firestore Collections

| Collection | Purpose |
|------------|---------|
| `users` | User profiles with role (attendee / staff / admin) |
| `crowd_zones` | Zone density, coordinates, capacity, wait time |
| `queues` | Live queue status per venue zone |
| `tasks` | Staff coordination tasks (Kanban) |
| `alerts` | Admin broadcast alert history |
| `incidents` | Attendee-reported incidents |
| `user_notifications/{uid}` | Per-user notification read/unread state |

---

## 🚀 Local Setup

### Prerequisites
- Node.js 20+
- npm 9+
- Firebase project with Auth, Firestore, Storage, and FCM enabled
- Google Maps API key with Maps JavaScript API + Visualization API enabled
- Google Cloud project with Cloud Run and Pub/Sub APIs enabled

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/stadiumsync.git
cd stadiumsync

# Install dependencies
npm install

# Create environment file
cp .env.example .env.development

# Start development server
npm run dev
```

### Backend Setup

```bash
cd stadiumsync-api

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start backend server
npm run dev
```

### Environment Variables

#### Frontend (`.env.development`)

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase Web API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | FCM Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |
| `VITE_FIREBASE_VAPID_KEY` | FCM VAPID Key (for push notifications) |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API Key |
| `VITE_API_BASE_URL` | Cloud Run backend URL |

#### Backend (`.env`)

| Variable | Description |
|----------|-------------|
| `FIREBASE_PROJECT_ID` | Firebase Project ID |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to Firebase service account JSON |
| `PUBSUB_TOPIC_INCIDENTS` | Pub/Sub topic name for incidents |
| `ALLOWED_ORIGIN` | Frontend URL for CORS |
| `PORT` | Server port (default: 8080) |

---

## ☁️ Google Cloud Run Deployment

```bash
# Build and deploy frontend
gcloud builds submit --config cloudbuild.yaml

# Deploy backend API separately
cd stadiumsync-api
gcloud run deploy stadiumsync-api \
  --source . \
  --region asia-south1 \
  --min-instances 1 \
  --memory 512Mi \
  --allow-unauthenticated=false
```

---

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# Unit tests with coverage report
npm run test:coverage

# E2E tests (Playwright)
npm run test:e2e

# Accessibility audit
npm run test:a11y
```

---

## 📊 Lighthouse Scores (Target)

| Metric | Target |
|--------|--------|
| ⚡ Performance | ≥ 90 |
| ♿ Accessibility | ≥ 95 |
| ✅ Best Practices | ≥ 95 |
| 🔍 SEO | ≥ 90 |

---

## 📝 Assumptions Made

1. **Crowd data is simulated** — In a real deployment, crowd density would come from IoT sensors, CCTV analytics, or ticketing gate scan data. For this project, data is seeded in Firestore and can be adjusted via the Admin panel sliders.

2. **Single venue layout** — The heatmap uses a fixed set of lat/lng coordinates representing a generic large stadium (based in Pune, India). A production system would support multiple venues with configurable floor plans.

3. **FCM push notifications require HTTPS** — Push notifications via Firebase Cloud Messaging only work on HTTPS origins. On local development, the notification feature gracefully degrades with a console warning.

4. **Role assignment is admin-controlled** — New users who sign in with Google are assigned the `attendee` role by default. Role upgrades (to `staff` or `admin`) must be done manually in Firestore by an existing admin. A production system would include an admin UI for role management.

5. **Exit routing uses a simplified scoring model** — The weighted algorithm `(crowdDensity × 0.6) + (distanceScore × 0.4)` is a prototype model. A real system would integrate with indoor mapping APIs and historical foot traffic data for more accurate routing.

6. **Cloud Pub/Sub consumers are not implemented** — The backend publishes incident reports to a Pub/Sub topic. In production, a subscriber (e.g., a Cloud Function) would process these messages and notify the relevant staff. The subscriber is out of scope for this hackathon submission.

7. **Photos uploaded during incident reporting** are stored in Firebase Storage but not moderated. A production system would use Google Cloud Vision API for content safety filtering.

8. **Firestore security rules are permissive for demo** — Rules allow any authenticated user to read/write most collections. Production rules would be role-scoped (e.g., only admins can write to `alerts`, only staff can update `tasks`).

---

## 👨‍💻 Author

Built for **PromptWars Virtual Hackathon**  
Vertical: Physical Event Experience  
Stack: React · Firebase · Google Cloud Run · Google Maps

---

> *"Turning chaos at the gates into a seamless stadium journey — one real-time data point at a time."*