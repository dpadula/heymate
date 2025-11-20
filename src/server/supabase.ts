import { createClient } from '@supabase/supabase-js';

export const supabaseServer = () => {
  return createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // más permisos
    { auth: { persistSession: false } }
  );
};
