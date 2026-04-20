import { useEffect } from 'react';
import { 
  getRedirectResult,
  signInWithRedirect,
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth, db, googleProvider } from '@/lib/firebase';
import { useAuthStore } from '@/store/authStore';

let isAuthListenerAttached = false;
let isRedirectHandlerAttached = false;

// Error message mapper
const getAuthErrorMessage = (code: string): string => {
  const messages: Record<string, string> = {
    'auth/popup-closed-by-user': 'Sign-in cancelled. Please try again.',
    'auth/cancelled-popup-request': 'Sign-in cancelled. Please try again.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/popup-blocked': 'Popup was blocked. Please allow popups.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/user-disabled': 'This account has been disabled.',
  };
  return messages[code] || 'Sign-in failed. Please try again.';
};

export function useAuth() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);
  const setLoading = useAuthStore((state) => state.setLoading);
  
  // Pull current state to return to consumers
  const { user, isLoading, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isRedirectHandlerAttached) return;
    isRedirectHandlerAttached = true;

    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (!result) return; // No redirect result, normal app load

        const { user: firebaseUser } = result;
        
        // Check if user doc exists in Firestore
        const userRef = doc(db, 'users', firebaseUser.uid);
        let role = 'attendee';
        
        try {
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            role = userSnap.data().role || 'attendee';
          } else {
            // Create new user document
            await setDoc(userRef, {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              role: 'attendee',
              createdAt: serverTimestamp()
            });
          }
        } catch (firestoreError) {
          console.warn('Firestore error — defaulting role to attendee');
          role = 'attendee';
        }

        // Update Zustand store
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || '',
          role: role as 'attendee' | 'staff' | 'admin'
        });

        // Redirect to correct dashboard
        const routes: Record<string, string> = { attendee: '/attendee', staff: '/staff', admin: '/admin' };
        navigate(routes[role] || '/attendee');

      } catch (error: any) {
        if (error.code !== 'auth/no-auth-event') {
          toast.error(getAuthErrorMessage(error.code));
        }
      }
    };

    handleRedirectResult();
  }, [navigate, setUser]);

  useEffect(() => {
    // Only attach the Firebase listener once per application lifecycle
    if (isAuthListenerAttached) return;
    isAuthListenerAttached = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // Don't set loading to true if we're processing a redirect result
      // Let handleRedirectResult manage the navigation.
      if (firebaseUser) {
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          let role: 'attendee' | 'staff' | 'admin' = 'attendee';
          if (userDoc.exists()) {
            role = userDoc.data().role || 'attendee';
          }
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || '',
            photoURL: firebaseUser.photoURL || '',
            role,
          });
        } catch (error) {
          console.error("Error fetching user role", error);
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || '',
            photoURL: firebaseUser.photoURL || '',
            role: 'attendee',
          });
        }
      } else {
        clearUser();
      }
      setLoading(false);
    });

  }, [setUser, clearUser, setLoading]);

  const loginWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error: any) {
      const msg = getAuthErrorMessage(error.code);
      toast.error(msg);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      clearUser();
      navigate('/login');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return { 
    // New exact fields
    loginWithGoogle, 
    logout,
    user,
    isLoading,
    isAuthenticated,
    // Legacy backwards-compatible fields
    currentUser: user,
    userRole: user?.role || null,
    isLoggedIn: isAuthenticated,
    login: async () => {}, 
  };
}
