'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getOptimalActivityTimes } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Wind, Sparkles, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ActivityPlannerPage() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(getOptimalActivityTimes, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && (state.errors || state.message.startsWith('An error'))) {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: state.message,
        })
    }
  }, [state, toast])


  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">Smart Activity Planner</h1>
        <p className="text-muted-foreground mt-2">Let our AI find the perfect, healthiest time for your outdoor activities.</p>
      </div>

      <Card>
        <form action={dispatch}>
          <CardHeader>
            <CardTitle>Plan Your Activity</CardTitle>
            <CardDescription>Tell us what you're planning, and we'll analyze the air quality to find the best time.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="activityType">Activity Type</Label>
              <Input id="activityType" name="activityType" placeholder="e.g., Running, Gardening, Stroll in the park" />
              {state.errors?.activityType && <p className="text-sm font-medium text-destructive">{state.errors.activityType[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="e.g., San Francisco, CA" />
              {state.errors?.location && <p className="text-sm font-medium text-destructive">{state.errors.location[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="healthProfile">Other Health Conditions (Optional)</Label>
              <Input id="healthProfile" name="healthProfile" placeholder="e.g., Allergies, COPD" />
               {state.errors?.healthProfile && <p className="text-sm font-medium text-destructive">{state.errors.healthProfile[0]}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state.suggestions && (
        <Card className="mt-8 bg-accent/50">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <CardTitle className="text-primary">{state.message}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-accent-foreground">{state.reasoning}</p>
                <ul className="list-disc list-inside space-y-2">
                    {state.suggestions.map((time, index) => (
                        <li key={index} className="font-semibold">{time}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wind className="mr-2 h-4 w-4" />}
      Find Best Times
    </Button>
  );
}
