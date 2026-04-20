import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './routes';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

// ── Eagerly loaded pages ──────────────────────────────────────────────────────
import LoginPage from '@/pages/LoginPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage';

// ── Layouts ───────────────────────────────────────────────────────────────────
import RootLayout from '@/components/layout/RootLayout';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ClassErrorBoundary } from '@/components/ClassErrorBoundary';

const AppLayout = lazy(() => import('@/components/layout/AppLayout'));

// ── Attendee feature pages (lazy) ─────────────────────────────────────────────
const AttendeeDashboard = lazy(() => import('@/features/attendee/Dashboard'));
const AttendeeMyTickets = lazy(() => import('@/features/attendee/MyTickets'));
const AttendeeCrowdHeatmap = lazy(() => import('@/features/attendee/CrowdHeatmap'));
const AttendeeQueueDashboard = lazy(() => import('@/features/attendee/QueueDashboard'));
const AttendeeNotificationsPage = lazy(() => import('@/features/attendee/NotificationsPage'));

// ── Staff feature pages (lazy) ────────────────────────────────────────────────
const StaffDashboard = lazy(() => import('@/features/staff/Dashboard'));
const StaffEntryScanner = lazy(() => import('@/features/staff/EntryScanner'));
const StaffTaskBoard = lazy(() => import('@/features/staff/TaskBoard'));

// ── Admin feature pages (lazy) ────────────────────────────────────────────────
const AdminDashboard = lazy(() => import('@/features/admin/Dashboard'));
const AdminUserManagement = lazy(() => import('@/features/admin/UserManagement'));
const AdminCrowdMonitor = lazy(() => import('@/features/admin/CrowdMonitor'));
const AdminCrowdHeatmap = lazy(() => import('@/features/admin/CrowdHeatmapAdmin'));
const AdminBroadcastAlerts = lazy(() => import('@/features/admin/BroadcastAlerts'));

const RouteLoader = (
  <div
    className="flex h-screen items-center justify-center bg-navy-950"
    aria-live="polite"
    aria-busy="true"
  >
    <LoadingSpinner size="lg" label="Loading page…" />
  </div>
);

// Helper to wrap lazy routes
const withBoundary = (Element: React.ReactNode) => (
  <ClassErrorBoundary>
    <Suspense fallback={RouteLoader}>
      {Element}
    </Suspense>
  </ClassErrorBoundary>
);

export const router = createBrowserRouter([
  {
    // RootLayout provides AuthContext to all child routes
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
  // Public routes
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.UNAUTHORIZED, element: <UnauthorizedPage /> },
  { path: '/404', element: <NotFoundPage /> },
  { path: ROUTES.PROFILE, element: <ProfilePage /> },

  // Root redirect
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.LOGIN} replace /> },

  // ── Attendee ──────────────────────────────────────────────────────────────
  {
    element: <ProtectedRoute allowedRoles={['attendee']} />,
    children: [
      {
        element: withBoundary(<AppLayout role="attendee" />),
        children: [
          {
            path: ROUTES.ATTENDEE_DASHBOARD,
            element: withBoundary(<AttendeeDashboard />),
          },
          {
            path: ROUTES.ATTENDEE_TICKETS,
            element: withBoundary(<AttendeeMyTickets />),
          },
          {
            path: ROUTES.ATTENDEE_HEATMAP,
            element: withBoundary(<AttendeeCrowdHeatmap />),
          },
          {
            path: ROUTES.ATTENDEE_QUEUE,
            element: withBoundary(<AttendeeQueueDashboard />),
          },
          {
            path: ROUTES.ATTENDEE_NOTIFICATIONS,
            element: withBoundary(<AttendeeNotificationsPage />),
          },
        ],
      },
    ],
  },

  // ── Staff ─────────────────────────────────────────────────────────────────
  {
    element: <ProtectedRoute allowedRoles={['staff']} />,
    children: [
      {
        element: withBoundary(<AppLayout role="staff" />),
        children: [
          {
            path: ROUTES.STAFF_DASHBOARD,
            element: withBoundary(<StaffDashboard />),
          },
          {
            path: ROUTES.STAFF_SCANNER,
            element: withBoundary(<StaffEntryScanner />),
          },
          {
            path: ROUTES.STAFF_TASKS,
            element: withBoundary(<StaffTaskBoard />),
          },
          {
            // Staff can view notifications page too
            path: ROUTES.ATTENDEE_NOTIFICATIONS,
            element: withBoundary(<AttendeeNotificationsPage />),
          },
        ],
      },
    ],
  },

  // ── Admin ─────────────────────────────────────────────────────────────────
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        element: withBoundary(<AppLayout role="admin" />),
        children: [
          {
            path: ROUTES.ADMIN_DASHBOARD,
            element: withBoundary(<AdminDashboard />),
          },
          {
            path: ROUTES.ADMIN_USERS,
            element: withBoundary(<AdminUserManagement />),
          },
          {
            path: ROUTES.ADMIN_CROWD,
            element: withBoundary(<AdminCrowdMonitor />),
          },
          {
            path: ROUTES.ADMIN_HEATMAP,
            element: withBoundary(<AdminCrowdHeatmap />),
          },
          {
            path: ROUTES.STAFF_TASKS,
            element: withBoundary(<StaffTaskBoard />),
          },
          {
            path: ROUTES.ADMIN_ALERTS,
            element: withBoundary(<AdminBroadcastAlerts />),
          },
        ],
      },
    ],
  },

  // Catch-all
  { path: '*', element: <NotFoundPage /> },
  ], // end RootLayout children
  },
]);
