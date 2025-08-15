// Summarize News AI Agent.
//
// - summarizeNews - A function that summarizes news articles.
// - SummarizeNewsInput - The input type for the summarizeNews function.
// - SummarizeNewsOutput - The return type for the summarizeNews function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeNewsInputSchema = z.object({
  article: z.string().describe('The news article to summarize.'),
});
export type SummarizeNewsInput = z.infer<typeof SummarizeNewsInputSchema>;

const SummarizeNewsOutputSchema = z.object({
  summary: z.string().describe('A short summary of the news article.'),
});
export type SummarizeNewsOutput = z.infer<typeof SummarizeNewsOutputSchema>;

export async function summarizeNews(input: SummarizeNewsInput): Promise<SummarizeNewsOutput> {
  return summarizeNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeNewsPrompt',
  input: {schema: SummarizeNewsInputSchema},
  output: {schema: SummarizeNewsOutputSchema},
  prompt: `You are an expert news summarizer. Please provide a concise summary of the following news article, highlighting the key points:\n\n{{{article}}}`,
});

const summarizeNewsFlow = ai.defineFlow(
  {
    name: 'summarizeNewsFlow',
    inputSchema: SummarizeNewsInputSchema,
    outputSchema: SummarizeNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
