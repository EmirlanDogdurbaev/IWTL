import { create } from "zustand";
import { getCourses } from "@/features/fetchCourses/api/getCourses";

interface Course {
  id: number;
  title: string;
  description: string;
}

interface CourseStore {
  courses: Course[];
  fetchCourses: () => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  fetchCourses: async () => {
    try {
      const data = await getCourses();
      set({ courses: data });
    } catch (error) {
      console.error("Ошибка загрузки курсов", error);
    }
  },
}));
