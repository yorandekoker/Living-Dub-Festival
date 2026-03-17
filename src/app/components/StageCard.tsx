import Button from './Button';

interface StageCardProps {
  name: string;
  description: string;
  color: string;
  rotation?: string;
  linkTo?: string;
}

export default function StageCard({ name, description, color, rotation = '1deg', linkTo }: StageCardProps) {
  return (
    <div
      className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Stage Image Placeholder */}
      <div 
        className="w-full h-48 rounded-2xl border-3 border-black mb-4 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="font-['Luckiest_Guy'] text-4xl text-white text-center px-4">
          {name}
        </div>
      </div>

      {/* Stage Name */}
      <h3 className="font-['Bangers'] text-2xl mb-3" style={{ color }}>
        {name}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] text-sm text-gray-700 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Learn More Button */}
      {linkTo && (
        <Button to={linkTo} variant="outline">
          Learn More
        </Button>
      )}
    </div>
  );
}
