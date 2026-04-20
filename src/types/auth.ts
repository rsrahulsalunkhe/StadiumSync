export type UserRole = 'attendee' | 'staff' | 'admin';

/** App-level user profile — stored in Zustand and derived from Firebase + Firestore */
export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  photoURL?: string;
}

/** Shape stored in Firestore at users/{uid} */
export interface FirestoreUserDoc {
  role: UserRole;
  displayName?: string;
  email?: string;
  createdAt?: string;
}

/** Zod-validated form values for email/password login */
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  currentUser: User | null;
  userRole: UserRole | null;
  isLoading: boolean;
  isLoggedIn: boolean;
}
