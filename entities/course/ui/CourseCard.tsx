import { Card,CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
}

export default function CourseCard({ id, title, description }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
        <Link href={`/courses/${id}`} className="text-blue-600 font-semibold mt-2 block">
          Перейти к курсу →
        </Link>
      </CardContent>
    </Card>
  );
}
