import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkshopCardProps {
  title: string;
  time: string;
  instructor?: string;
  description?: string;
  color?: string;
  imageSrc?: string | null;
}

export default function WorkshopCard({ title, time, instructor, description, color = '#2EC4B6', imageSrc }: WorkshopCardProps) {
  return (
    <div
      className="bg-white rounded-3xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
      style={{ transform: `rotate(${Math.random() * 3 - 1.5}deg)` }}
    >
      <div className="w-full h-36 rounded-2xl border-2 border-black mb-4 overflow-hidden bg-gray-100">
        {imageSrc ? (
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-['Bangers'] text-2xl text-white"
            style={{ backgroundColor: color }}
          >
            Workshop
          </div>
        )}
      </div>

      {/* Workshop Title */}
      <div 
        className="inline-block px-4 py-2 rounded-xl border-2 border-black mb-3"
        style={{ backgroundColor: color }}
      >
        <h4 className="font-['Fredoka'] text-xl font-bold text-white">
          {title}
        </h4>
      </div>

      {/* Time */}
      <p className="font-['Poppins'] text-sm font-semibold text-gray-800 mb-2">
        🕐 {time}
      </p>

      {/* Instructor */}
      {instructor && (
        <p className="font-['Poppins'] text-sm text-gray-600 mb-3">
          👤 Instructor: <span className="font-semibold">{instructor}</span>
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="font-['Poppins'] text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
