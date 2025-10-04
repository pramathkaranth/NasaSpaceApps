import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footprints } from "lucide-react";

export function CarbonFootprintCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Carbon Footprint</CardDescription>
        <CardTitle className="text-4xl">4.1 tons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          -5% from last month
        </div>
      </CardContent>
    </Card>
  );
}
