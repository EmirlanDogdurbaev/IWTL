"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCourseDetailStore } from "@/entities/course/model/courseDetailStore";
import Link from "next/link";

export default function CoursePage() {
  const { id } = useParams();
  const { course, fetchCourse } = useCourseDetailStore();

  useEffect(() => {
    fetchCourse(Number(id));
  }, [id]);

  if (!course) return <div className="text-center">Загрузка...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600">{course.description}</p>

      <h2 className="text-2xl font-semibold mt-6">Модули</h2>
      <ul className="mt-2">
        {course.modules.map((module) => (
          <li key={module.id} className="border-b py-2">
            <Link href={`/lessons/${module.lessons[0].id}`} className="text-blue-600">
              {module.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
