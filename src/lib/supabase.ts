import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

export const supabase = createClient(
  'https://hrnylgxecwjrlbnqbodg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybnlsZ3hlY3dqcmxibnFib2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNDIxMzEsImV4cCI6MjAxMDgxODEzMX0.eG04DbEGZbdPjnrcenuMXDBRdkh8xG-D96fWQNXdLbw',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);