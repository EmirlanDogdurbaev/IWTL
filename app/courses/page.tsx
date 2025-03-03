"use client";
import { useEffect } from "react";
import CourseCard from "@/entities/course/ui/CourseCard";
import CourseSkeleton from "@/entities/course/ui/CourseSkeleton";
import { useCourseStore } from "@/entities/course/model/courseStore";

export default function CoursesPage() {
  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Доступные курсы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {courses.length === 0
          ? Array.from({ length: 6 }).map((_, i) => <CourseSkeleton key={i} />)
          : courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
      </div>
    </div>
  );
}
