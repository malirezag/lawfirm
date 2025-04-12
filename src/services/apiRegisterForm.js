import supabase from "./supabase";

export async function makeRegister(newRegistration) {
  console.log(newRegistration);
  const { data, error } = await supabase

    .from("register-form")
    .insert([newRegistration])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
}
