const SUPABASE_URL = "hhttps://uvzafdxrhzlzvubloxml.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2emFmZHhyaHpsenZ1YmxveG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNDQ1MjQsImV4cCI6MjA5ODcyMDUyNH0.w3TFFFMF5dr9GJpGQQn9OzSAU0dPcKUKCFUffOEXjdQ";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);