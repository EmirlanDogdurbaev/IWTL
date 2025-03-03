import { getLesson } from "@/features/fetchLessons/api/getLesson";
import { create } from "zustand";

interface Lesson {
  id: number;
  title: string;
  content: string;
  videoUrl?: string;
}

interface LessonStore {
  lesson: Lesson | null;
  fetchLesson: (id: number) => Promise<void>;
}

export const useLessonStore = create<LessonStore>((set) => ({
  lesson: null,
  fetchLesson: async (id) => {
    try {
      const data = await getLesson(id);
      set({ lesson: data });
    } catch (error) {
      console.error("Ошибка загрузки урока", error);
    }
  },
}));
