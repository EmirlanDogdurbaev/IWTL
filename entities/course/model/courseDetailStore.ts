import { create } from "zustand";

interface Module {
  id: number;
  title: string;
  lessons: { id: number; title: string }[];
}

interface CourseDetailStore {
  course: { id: number; title: string; description: string; modules: Module[] } | null;
  fetchCourse: (id: number) => Promise<void>;
}

export const useCourseDetailStore = create<CourseDetailStore>((set) => ({
  course: null,
  fetchCourse: async (id) => {
    try {
      const res = await fetch(`/api/courses/${id}`);
      const data = await res.json();
      set({ course: data });
    } catch (error) {
      console.error("Ошибка загрузки курса", error);
    }
  },
}));
