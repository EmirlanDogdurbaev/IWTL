"use client";
import { useEffect } from "react";
import { useCourseStore } from "@/entities/course/model/courseStore";
import CourseCard from "@/entities/course/ui/CourseCard";

export default function CoursesPage() {
  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Доступные курсы</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.length === 0 ? (
          <p>Загрузка...</p>
        ) : (
          courses.map((course) => <CourseCard key={course.id} {...course} />)
        )}
      </div>
    </div>
  );
}
