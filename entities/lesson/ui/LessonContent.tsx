import Loader from "@/shared/ui/loader/Loader";

interface LessonContentProps {
      title: string;
      content: string;
      videoUrl?: string;
    }
    
    export default function LessonContent({ title, content, videoUrl }: LessonContentProps) {
      return (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2">{content}</p>

          {videoUrl && (
            <div className="mt-4">
              <video controls className="w-full rounded-lg">
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      );
    }
    