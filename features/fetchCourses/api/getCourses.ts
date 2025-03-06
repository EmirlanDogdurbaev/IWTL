import { API_URL } from "@/shared/config/api";

export async function getCourses() {
  const res = await fetch(`${API_URL}/photos`);
  if (!res.ok) throw new Error("Ошибка загрузки курсов");
  return res.json();
}


export async function getCoursesByID() {
  const res = await fetch(`${API_URL}/photos/1`);
  if (!res.ok) throw new Error("Ошибка загрузки курсов");
  return res.json();
}
