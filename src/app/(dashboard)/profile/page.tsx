'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your health profile and location have been saved.",
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">Your Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your health information and location for tailored alerts and recommendations.
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Health & Location</CardTitle>
            <CardDescription>This information helps us provide personalized air quality advice.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" placeholder="e.g., 35" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <Input id="location" name="location" placeholder="e.g., San Francisco, CA" />
              <p className="text-xs text-muted-foreground">We use this to provide hyper-local air quality data.</p>
            </div>
            
            <div className="space-y-4 rounded-lg border p-4">
                <h3 className="text-sm font-medium">Health Conditions</h3>
                <p className="text-sm text-muted-foreground">
                    Enable conditions to receive specialized alerts.
                </p>
                <div className="flex items-center justify-between">
                    <Label htmlFor="asthma" className="flex flex-col space-y-1">
                        <span>Asthma</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Get alerts for conditions that may affect asthma.
                        </span>
                    </Label>
                    <Switch id="asthma" name="asthma" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="heart-condition" className="flex flex-col space-y-1">
                        <span>Heart Condition</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                           Receive warnings about air quality impacting heart health.
                        </span>
                    </Label>
                    <Switch id="heart-condition" name="heart-condition" />
                </div>
            </div>

          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
