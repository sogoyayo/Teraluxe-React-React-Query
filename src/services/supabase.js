import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ypkeutoyzmgdkppzvwiq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwa2V1dG95em1nZGtwcHp2d2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MzMxOTYsImV4cCI6MjAxMjAwOTE5Nn0.K6XjQl_ndHimxFFqgTYTLqQHcR5RQB8RC9JiqAsddwM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;