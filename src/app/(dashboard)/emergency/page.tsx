import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmergencyPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="font-headline text-4xl font-bold mb-4">Emergency Mode</h1>
            <p className="text-muted-foreground mb-8">
                Get hyper-local safety alerts during significant air quality events.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Feature Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>The dedicated emergency information page is under construction. In a real event, this page would provide critical, hyper-local safety alerts and guidance.</p>
                </CardContent>
            </Card>
        </div>
    );
}
