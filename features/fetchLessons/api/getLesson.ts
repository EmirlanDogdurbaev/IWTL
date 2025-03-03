import { API_URL } from "@/shared/config/api";

export async function getLesson(id: number) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Ошибка загрузки урока");
  return res.json();
}
