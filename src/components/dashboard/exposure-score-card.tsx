import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColor = (p: number) => {
    if (p < 50) return 'stroke-green-500';
    if (p < 80) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <div className="relative">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90 transform"
      >
        <circle
          stroke="hsl(var(--muted))"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className={`transition-all duration-300 ${getColor(progress)}`}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold">{progress}</span>
      </div>
    </div>
  );
};


export function ExposureScoreCard({ score }: { score: number }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Personal Exposure Score</CardTitle>
        <CardDescription>Your estimated exposure over the last 24h.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center gap-4">
        <CircularProgressBar progress={score} />
        <p className="text-sm text-center text-muted-foreground px-4">
          Based on your location, routine, and local air quality.
        </p>
        <Button variant="outline" size="sm" className="mt-auto">
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
