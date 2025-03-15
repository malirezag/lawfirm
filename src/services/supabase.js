import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cjqaeowkcbpwzsxdwuhd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcWFlb3drY2Jwd3pzeGR3dWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTAzMTMsImV4cCI6MjA1MzU2NjMxM30.yHEcTJjOt1ebA5u2xycQIDQs8XIxQ3dlJIutWHUTFxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
