import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cjqaeowkcbpwzsxdwuhd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcWFlb3drY2Jwd3pzeGR3dWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTAzMTMsImV4cCI6MjA1MzU2NjMxM30.yHEcTJjOt1ebA5u2xycQIDQs8XIxQ3dlJIutWHUTFxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getLawyers({ from, to, sortBy }) {

  let query = supabase.from("lawyers").select("*", { count: "exact" });
  if (sortBy)
    query = supabase
      .from("lawyers")
      .select("*", { count: "exact" })
      .order(sortBy, { ascending: false });
  const { data: lawyers, error, count } = await query.range(from, to);

  if (error) throw new Error(error.message);

  return { lawyers, count };
}

//update when there is not new image
export async function AddLawyer({ lawyer, image }) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
  const { error2 } = await supabase.storage
    .from("lawyers")
    .upload(imageName, image);

  if (error2) throw new Error(error2.message);

  const { data: publicUrlData } = supabase.storage
    .from("lawyers")
    .getPublicUrl(imageName);
  const imagePath = publicUrlData.publicUrl;

  const { data, error } = await supabase
    .from("lawyers")
    .insert([{ ...lawyer, image: imagePath }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

//update when new image file uploaded
export async function updateLawyer({ id, name, phone, exp, image }) {
  if (image === undefined) {
    const { data, error } = await supabase
      .from("lawyers")
      .update({ id, name, phone, exp })
      .eq("id", id)
      .select();

    if (error) throw new Error(error.message);

    return data;
  }

  if (image) {
    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const { error2 } = await supabase.storage
      .from("lawyers")
      .upload(imageName, image);

    if (error2) throw new Error(error2.message);

    const { data: publicUrlData } = supabase.storage
      .from("lawyers")
      .getPublicUrl(imageName);
    const imagePath = publicUrlData.publicUrl;

    const { data, error } = await supabase
      .from("lawyers")
      .update({ id, name, phone, exp, image: imagePath })
      .eq("id", id)
      .select();

    if (error) throw new Error(error.message);

    return data;
  }
}

export async function deleteLawyer(id) {
  const { error } = await supabase.from("lawyers").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
