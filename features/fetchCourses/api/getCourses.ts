import { API_URL } from "@/shared/config/api";

export async function getCourses() {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error("Ошибка загрузки курсов");
  return res.json();
}
