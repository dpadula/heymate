import { useAuthState } from '@/hooks/useAuthState';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const { sessionLoaded } = useAuthState();

  if (!sessionLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
