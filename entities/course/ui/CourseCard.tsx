import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function CourseCard({
  id,
  title,
  description,
  url,
}: CourseCardProps) {

  console.log("CourseCardProps", url);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        x: 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Card
        className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-[350px] h-[420px] flex flex-col
        bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-800/40 shadow-lg"
      >
        <div className="relative w-full h-40">
          <img
            src="https://i.ytimg.com/vi/5iD4j-TOvog/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHggLyh_MA8=&rs=AOn4CLD0xlPofoz7GE4PhZk6rO3Q6Zm1pQ"
            alt={title}

            className="object-cover rounded-t-lg"
          />
        </div>

        <CardHeader className="flex-1">
          <CardTitle className="text-lg text-gray-800 dark:text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300 line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Кнопка */}
        <CardContent className="pt-0 pb-4">
          <Link
            href={`/courses/${id}`}
            className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Подробнее →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
