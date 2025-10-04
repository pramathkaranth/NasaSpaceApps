'use server';
/**
 * @fileOverview Generates a personalized air quality summary for a user, including recent trends, health impacts, and actionable recommendations.
 *
 * - generatePersonalizedAQISummary - A function that generates the personalized AQI summary.
 * - GeneratePersonalizedAQISummaryInput - The input type for the generatePersonalizedAQISummary function.
 * - GeneratePersonalizedAQISummaryOutput - The return type for the generatePersonalizedAQISummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedAQISummaryInputSchema = z.object({
  location: z.string().describe('The location for which to generate the AQI summary.'),
  healthProfile: z.string().describe('The user\u0027s health profile, including any relevant conditions.'),
  recentTrends: z.string().describe('A summary of recent air quality trends in the user\u0027s area.'),
});
export type GeneratePersonalizedAQISummaryInput = z.infer<typeof GeneratePersonalizedAQISummaryInputSchema>;

const GeneratePersonalizedAQISummaryOutputSchema = z.object({
  summary: z.string().describe('A personalized summary of recent air quality trends, health impacts, and actionable recommendations.'),
});
export type GeneratePersonalizedAQISummaryOutput = z.infer<typeof GeneratePersonalizedAQISummaryOutputSchema>;

export async function generatePersonalizedAQISummary(input: GeneratePersonalizedAQISummaryInput): Promise<GeneratePersonalizedAQISummaryOutput> {
  return generatePersonalizedAQISummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedAQISummaryPrompt',
  input: {schema: GeneratePersonalizedAQISummaryInputSchema},
  output: {schema: GeneratePersonalizedAQISummaryOutputSchema},
  prompt: `You are an AI assistant that generates personalized air quality summaries for users.

  Location: {{{location}}}
  Health Profile: {{{healthProfile}}}
  Recent Trends: {{{recentTrends}}}

  Based on the provided location, health profile, and recent air quality trends, generate a personalized summary that includes:
  - A concise overview of the current air quality situation.
  - Potential health impacts based on the user\u0027s health profile.
  - Actionable recommendations to protect the user\u0027s health, such as:
    - Suggesting the best times for outdoor activities.
    - Recommending the use of air purifiers or masks.
    - Advising on when to seek medical attention.
`,
});

const generatePersonalizedAQISummaryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedAQISummaryFlow',
    inputSchema: GeneratePersonalizedAQISummaryInputSchema,
    outputSchema: GeneratePersonalizedAQISummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
