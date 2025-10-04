'use server';

import { suggestOptimalActivityTimes } from '@/ai/flows/suggest-optimal-activity-times';
import { z } from 'zod';

const FormSchema = z.object({
  activityType: z.string().min(1, 'Activity type is required.'),
  location: z.string().min(1, 'Location is required.'),
  healthProfile: z.string().optional(),
});

export type State = {
  message?: string | null;
  suggestions?: string[];
  reasoning?: string;
  errors?: {
    activityType?: string[];
    location?: string[];
    healthProfile?: string[];
  };
};

export async function getOptimalActivityTimes(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    activityType: formData.get('activityType'),
    location: formData.get('location'),
    healthProfile: formData.get('healthProfile'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to get suggestions.',
    };
  }
  
  const { activityType, location, healthProfile } = validatedFields.data;

  // Mock data for the GenAI flow
  const mockCalendarData = JSON.stringify([
    { event: 'Work Meeting', start: '9:00 AM', end: '11:00 AM' },
    { event: 'Lunch', start: '12:30 PM', end: '1:30 PM' },
    { event: 'Project Deadline', start: '3:00 PM', end: '5:00 PM' },
  ]);
  const mockAirQualityData = JSON.stringify({
    '8:00 AM': { aqi: 60, pollutant: 'PM2.5' },
    '12:00 PM': { aqi: 75, pollutant: 'Ozone' },
    '4:00 PM': { aqi: 55, pollutant: 'PM2.5' },
    '8:00 PM': { aqi: 45, pollutant: 'PM2.5' },
  });

  try {
    const result = await suggestOptimalActivityTimes({
      activityType,
      location,
      calendarData: mockCalendarData,
      airQualityData: mockAirQualityData,
      healthProfile: healthProfile || 'Mild asthma', // Fallback for existing structure
    });

    if (result.suggestedTimes.length > 0) {
      return {
        message: 'Here are your personalized suggestions:',
        suggestions: result.suggestedTimes,
        reasoning: result.reasoning,
      };
    } else {
      return { message: 'Could not find any optimal times based on the current data.' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while getting suggestions. Please try again.' };
  }
}
