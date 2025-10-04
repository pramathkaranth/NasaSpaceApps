import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import type { CommunityReport } from "@/types";

export function CommunityReportsCard({ reports }: { reports: CommunityReport[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Reports</CardTitle>
        <CardDescription>Live observations from your area.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {reports.slice(0, 2).map((report) => (
          <div key={report.id} className="flex items-start gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={report.user.avatar} />
              <AvatarFallback>{report.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{report.user.name}</p>
              <p className="text-sm text-muted-foreground">&quot;{report.observation}&quot;</p>
              <p className="text-xs text-muted-foreground mt-1">{report.location} - {report.timestamp}</p>
            </div>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/reports">View All Reports <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}
