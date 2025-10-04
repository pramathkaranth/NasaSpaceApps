import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="font-headline text-4xl font-bold mb-4">Live AQI Map</h1>
            <p className="text-muted-foreground mb-8">
                Visualize real-time air quality data across your region.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Feature Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Our interactive air quality map is currently in development. Soon you'll be able to explore data from various sensors in real-time.</p>
                </CardContent>
            </Card>
        </div>
    );
}
