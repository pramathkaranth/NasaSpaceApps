import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ActivityPlannerCard() {
  return (
    <Card className="relative overflow-hidden col-span-1 lg:col-span-2">
       <Image
          src="https://picsum.photos/seed/outdoors/800/400"
          alt="Person jogging outdoors"
          fill
          className="object-cover"
          data-ai-hint="jogging outdoors"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="font-headline text-2xl font-bold text-white">Smart Activity Planner</h3>
        <p className="mt-2 text-primary-foreground/80">Get AI-powered suggestions for the safest times to be active outdoors.</p>
        <Link href="/activity-planner" passHref>
          <Button className="mt-4" variant="secondary">
            Plan Your Activity <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
