import supabase from "./supabase";

export async function postComment(newComment) {
  const { data, error } = await supabase
    .from("coment-form")
    .insert([newComment])
    .select();

  if (error) throw new Error("کامنت شما ثبت نشد ! ");

  return { data, error };
}

export async function getComments() {
  let { data, error } = await supabase
    .from("coment-form")
    .select("*")
    .order("id", { ascending: false });
  if (error) throw new Error(error.message);

  return data;
}
