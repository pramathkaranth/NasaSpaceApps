import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ReportsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="font-headline text-4xl font-bold mb-4">Community Reports</h1>
            <p className="text-muted-foreground mb-8">
                See what others in your community are observing about the air quality.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Feature Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>The full community reports page is under construction. Check back soon for live updates and the ability to submit your own observations!</p>
                </CardContent>
            </Card>
        </div>
    );
}
