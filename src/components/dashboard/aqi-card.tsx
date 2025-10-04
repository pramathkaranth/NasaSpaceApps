import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AqiData } from "@/types";
import { IconO3, IconNO2, IconSO2, IconPM25 } from "@/components/icons";

const getAqiInfo = (value: number) => {
  if (value <= 50) return { level: 'Good', color: 'bg-green-500' };
  if (value <= 100) return { level: 'Moderate', color: 'bg-yellow-500' };
  if (value <= 150) return { level: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500' };
  if (value <= 200) return { level: 'Unhealthy', color: 'bg-red-500' };
  if (value <= 300) return { level: 'Very Unhealthy', color: 'bg-purple-500' };
  return { level: 'Hazardous', color: 'bg-maroon-500' };
};

const PollutantIcon: React.FC<{ pollutant: AqiData['pollutant'], className?: string }> = ({ pollutant, className }) => {
  switch (pollutant) {
    case 'O₃': return <IconO3 className={className} />;
    case 'NO₂': return <IconNO2 className={className} />;
    case 'SO₂': return <IconSO2 className={className} />;
    case 'PM2.5': return <IconPM25 className={className} />;
    default: return null;
  }
};

export function AqiCard({ data }: { data: AqiData }) {
  const { level, color } = getAqiInfo(data.value);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{data.city}</CardTitle>
          <Badge variant="outline">{data.source}</Badge>
        </div>
        <CardDescription>Live Air Quality</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <PollutantIcon pollutant={data.pollutant} className="h-8 w-8 text-muted-foreground" />
          <div>
            <div className="text-4xl font-bold">{data.value}</div>
            <div className="text-sm text-muted-foreground">{data.pollutant} AQI</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${color}`}></span>
            <span className="font-semibold">{level}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 text-right">{data.recommendation}</p>
        </div>
      </CardContent>
    </Card>
  );
}
