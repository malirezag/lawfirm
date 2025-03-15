import supabase from "./supabase";

export async function makeRegister(newRegistration) {
  const { data, error } = await supabase

    .from("register-form")
    .insert([newRegistration])
    .select();
  if (error) throw new Error("خطای ارسال اطلاعات");
  return { data, error };
}
