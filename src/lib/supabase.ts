import { createClient } from "@supabase/supabase-js";

// We provide fallback dummy strings so the Next.js build doesn't crash 
// if the environment variables aren't set yet during static prerendering.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder_key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
