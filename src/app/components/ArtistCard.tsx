import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtistCardProps {
  name: string;
  stage?: string;
  time?: string;
  color?: string;
  onClick?: () => void;
  imageSrc?: string | null;
}

export default function ArtistCard({
  name,
  stage,
  time,
  color = "#F7C600",
  onClick,
  imageSrc,
}: ArtistCardProps) {
  const shouldContainImage = /sotabosc|sotobosc/i.test(name);

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${onClick ? "cursor-pointer" : ""}`}
      style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
    >
      <div className="w-full h-36 rounded-xl border-2 border-black mb-3 overflow-hidden bg-gray-100">
        {imageSrc ? (
          <ImageWithFallback
            src={imageSrc}
            alt={name}
            className={`w-full h-full ${
              shouldContainImage
                ? "object-contain bg-white p-1"
                : "object-cover object-center"
            }`}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-['Bangers'] text-lg text-white"
            style={{ backgroundColor: color }}
          >
            {name}
          </div>
        )}
      </div>

      {/* Artist Name */}
      <h4 className="font-['Fredoka'] text-lg font-bold mb-2" style={{ color }}>
        {name}
      </h4>

      {/* Stage Info */}
      {stage && (
        <p className="font-['Poppins'] text-xs text-gray-600 mb-1">
          📍 {stage}
        </p>
      )}

      {/* Time Info */}
      {time && (
        <p className="font-['Poppins'] text-xs font-semibold text-gray-800">
          🕐 {time}
        </p>
      )}
    </div>
  );
}
