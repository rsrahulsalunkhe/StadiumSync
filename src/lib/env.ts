/**
 * Environment variable validator
 * Throws clear errors if required variables are missing
 * Import this at the top of src/main.tsx
 */

interface EnvConfig {
  firebaseApiKey: string
  firebaseAuthDomain: string
  firebaseProjectId: string
  firebaseStorageBucket: string
  firebaseMessagingSenderId: string
  firebaseAppId: string
  firebaseVapidKey: string
  googleMapsApiKey: string
  apiBaseUrl: string
}

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}\n` +
      `Please copy .env.example to .env.local and fill in your values.`
    )
  }
  return value
}

export const env: EnvConfig = {
  firebaseApiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  firebaseAuthDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  firebaseProjectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  firebaseStorageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  firebaseMessagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  firebaseAppId: getEnvVar('VITE_FIREBASE_APP_ID'),
  firebaseVapidKey: getEnvVar('VITE_FIREBASE_VAPID_KEY'),
  googleMapsApiKey: getEnvVar('VITE_GOOGLE_MAPS_API_KEY'),
  apiBaseUrl: getEnvVar('VITE_API_BASE_URL'),
}
