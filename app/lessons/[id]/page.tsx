"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import LessonContent from "@/entities/lesson/ui/LessonContent";
import { useLessonStore } from "@/entities/lesson/model/lessonStore";
import Loader from "@/shared/ui/loader/Loader";

export default function LessonPage() {
      const { id } = useParams();
      const { lesson, fetchLesson } = useLessonStore();

      useEffect(() => {
            fetchLesson(Number(id));
      }, [id]);

      if (!lesson) return <Loader />;

      return <LessonContent title={lesson.title} content={lesson.content} videoUrl={lesson.videoUrl} />;
}
