'use server';
/**
 * @fileOverview Suggests optimal times for outdoor activities based on calendar, location, and air quality data.
 *
 * - suggestOptimalActivityTimes - A function that suggests optimal times for activities.
 * - SuggestOptimalActivityTimesInput - The input type for the suggestOptimalActivityTimes function.
 * - SuggestOptimalActivityTimesOutput - The return type for the suggestOptimalActivityTimes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimalActivityTimesInputSchema = z.object({
  calendarData: z
    .string()
    .describe('User calendar data in JSON format, including event times and descriptions.'),
  location: z
    .string()
    .describe('User location as a string (e.g., city, state).'),
  airQualityData: z
    .string()
    .describe('Air quality data for the specified location, including pollutant levels and forecasts.'),
  activityType: z
    .string()
    .describe('The type of outdoor activity the user is planning (e.g., running, cycling, gardening).'),
  healthProfile: z
    .string()
    .optional()
    .describe('Optional user health profile with relevant conditions (e.g., asthma, allergies).'),
});
export type SuggestOptimalActivityTimesInput = z.infer<
  typeof SuggestOptimalActivityTimesInputSchema
>;

const SuggestOptimalActivityTimesOutputSchema = z.object({
  suggestedTimes: z
    .array(z.string())
    .describe(
      'An array of suggested times (e.g., "Monday 10:00 AM - 11:00 AM") when air quality is optimal for the activity.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why these times are optimal, considering air quality, weather, and user calendar.'
    ),
});
export type SuggestOptimalActivityTimesOutput = z.infer<
  typeof SuggestOptimalActivityTimesOutputSchema
>;

export async function suggestOptimalActivityTimes(
  input: SuggestOptimalActivityTimesInput
): Promise<SuggestOptimalActivityTimesOutput> {
  return suggestOptimalActivityTimesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimalActivityTimesPrompt',
  input: {schema: SuggestOptimalActivityTimesInputSchema},
  output: {schema: SuggestOptimalActivityTimesOutputSchema},
  prompt: `You are an AI assistant designed to suggest the best times for outdoor activities based on air quality, weather, and the user's calendar.

  Analyze the following data to determine the safest and most suitable times for the user to engage in their planned activity.

  User Location: {{{location}}}
  Activity Type: {{{activityType}}}
  Calendar Data: {{{calendarData}}}
  Air Quality Data: {{{airQualityData}}}
  {{#if healthProfile}}User Health Profile: {{{healthProfile}}}{{/if}}

  Consider the user's calendar to avoid suggesting times when they are busy. Use the air quality data to identify periods with the lowest pollutant levels. Account for the weather to ensure it is conducive to the activity.

  Provide a list of suggested times and a brief explanation of your reasoning. List the reasoning inline with the suggested times, avoid providing a section called reasoning, and just present the answer in paragraph form.
  `,
});

const suggestOptimalActivityTimesFlow = ai.defineFlow(
  {
    name: 'suggestOptimalActivityTimesFlow',
    inputSchema: SuggestOptimalActivityTimesInputSchema,
    outputSchema: SuggestOptimalActivityTimesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
