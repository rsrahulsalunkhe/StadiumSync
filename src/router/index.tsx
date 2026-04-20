import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './routes';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

// ── Eagerly loaded pages ──────────────────────────────────────────────────────
import LoginPage from '@/pages/LoginPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import NotFoundPage from '@/pages/NotFoundPage';

// ── Layouts ───────────────────────────────────────────────────────────────────
import RootLayout from '@/components/layout/RootLayout';
import { ErrorBoundary } from '@/components/ErrorBoundary';

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

  // Root redirect
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.LOGIN} replace /> },

  // ── Attendee ──────────────────────────────────────────────────────────────
  {
    element: <ProtectedRoute allowedRoles={['attendee']} />,
    children: [
      {
        element: (
          <Suspense fallback={RouteLoader}>
            <AppLayout role="attendee" />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.ATTENDEE_DASHBOARD,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeDashboard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ATTENDEE_TICKETS,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeMyTickets />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ATTENDEE_HEATMAP,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeCrowdHeatmap />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ATTENDEE_QUEUE,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeQueueDashboard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ATTENDEE_NOTIFICATIONS,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeNotificationsPage />
              </Suspense>
            ),
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
        element: (
          <Suspense fallback={RouteLoader}>
            <AppLayout role="staff" />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.STAFF_DASHBOARD,
            element: (
              <Suspense fallback={RouteLoader}>
                <StaffDashboard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.STAFF_SCANNER,
            element: (
              <Suspense fallback={RouteLoader}>
                <StaffEntryScanner />
              </Suspense>
            ),
          },
          {
            path: ROUTES.STAFF_TASKS,
            element: (
              <Suspense fallback={RouteLoader}>
                <StaffTaskBoard />
              </Suspense>
            ),
          },
          {
            // Staff can view notifications page too
            path: ROUTES.ATTENDEE_NOTIFICATIONS,
            element: (
              <Suspense fallback={RouteLoader}>
                <AttendeeNotificationsPage />
              </Suspense>
            ),
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
        element: (
          <Suspense fallback={RouteLoader}>
            <AppLayout role="admin" />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.ADMIN_DASHBOARD,
            element: (
              <Suspense fallback={RouteLoader}>
                <AdminDashboard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ADMIN_USERS,
            element: (
              <Suspense fallback={RouteLoader}>
                <AdminUserManagement />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ADMIN_CROWD,
            element: (
              <Suspense fallback={RouteLoader}>
                <AdminCrowdMonitor />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ADMIN_HEATMAP,
            element: (
              <Suspense fallback={RouteLoader}>
                <AdminCrowdHeatmap />
              </Suspense>
            ),
          },
          {
            path: ROUTES.STAFF_TASKS,
            element: (
              <Suspense fallback={RouteLoader}>
                <StaffTaskBoard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ADMIN_ALERTS,
            element: (
              <Suspense fallback={RouteLoader}>
                <AdminBroadcastAlerts />
              </Suspense>
            ),
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
