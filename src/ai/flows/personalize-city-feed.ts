'use server';
/**
 * @fileOverview A personalized city feed AI agent.
 *
 * - personalizeCityFeed - A function that handles the city feed personalization process.
 * - PersonalizeCityFeedInput - The input type for the personalizeCityFeed function.
 * - PersonalizeCityFeedOutput - The return type for the personalizeCityFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeCityFeedInputSchema = z.object({
  userPreferences: z.string().describe('The user preferences.'),
  pastActivity: z.string().describe('The user past activity.'),
  cityFeedData: z.string().describe('The current city feed data.'),
});
export type PersonalizeCityFeedInput = z.infer<typeof PersonalizeCityFeedInputSchema>;

const PersonalizeCityFeedOutputSchema = z.string().describe('The personalized city feed data.');
export type PersonalizeCityFeedOutput = z.infer<typeof PersonalizeCityFeedOutputSchema>;

export async function personalizeCityFeed(input: PersonalizeCityFeedInput): Promise<PersonalizeCityFeedOutput> {
  return personalizeCityFeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeCityFeedPrompt',
  input: {schema: PersonalizeCityFeedInputSchema},
  output: {schema: PersonalizeCityFeedOutputSchema},
  prompt: `You are an AI expert in personalizing city feeds for users.

You will receive user preferences, past activity, and the current city feed data.
Your goal is to personalize the city feed data based on the user preferences and past activity.

User Preferences: {{{userPreferences}}}
Past Activity: {{{pastActivity}}}
City Feed Data: {{{cityFeedData}}}

Personalized City Feed Data:`,
});

const personalizeCityFeedFlow = ai.defineFlow(
  {
    name: 'personalizeCityFeedFlow',
    inputSchema: PersonalizeCityFeedInputSchema,
    outputSchema: PersonalizeCityFeedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
