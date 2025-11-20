import { useAuthState } from '@/hooks/useAuthState';
import { Redirect } from 'expo-router';

export default function Index() {
  const { user } = useAuthState();

  if (!user) return <Redirect href='/(auth)/login' />;
  return <Redirect href='/(home)' />;
}
