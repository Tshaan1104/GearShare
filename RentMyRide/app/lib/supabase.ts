
// import { createClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with your database
// export const supabase = createClient(process.env.SUPABASE_URl as string, process.env.SUPABASE_ANON_KEY as string)

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);