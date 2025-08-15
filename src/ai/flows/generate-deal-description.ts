'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating deal descriptions.
 *
 * - generateDealDescription - A function that generates a description for a deal or discount.
 * - GenerateDealDescriptionInput - The input type for the generateDealDescription function.
 * - GenerateDealDescriptionOutput - The return type for the generateDealDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDealDescriptionInputSchema = z.object({
  dealName: z.string().describe('The name of the deal or discount.'),
  businessName: z.string().describe('The name of the business offering the deal.'),
  originalPrice: z.number().optional().describe('The original price of the item or service.'),
  discountedPrice: z.number().optional().describe('The discounted price of the item or service.'),
  discountPercentage: z.number().optional().describe('The discount percentage being offered.'),
  dealCategory: z.string().describe('The category of the deal (e.g., food, electronics, apparel).'),
  dealExpiry: z.string().describe('The expiry date of the deal in the format YYYY-MM-DD.'),
});
export type GenerateDealDescriptionInput = z.infer<typeof GenerateDealDescriptionInputSchema>;

const GenerateDealDescriptionOutputSchema = z.object({
  dealDescription: z.string().describe('A compelling description of the deal.'),
});
export type GenerateDealDescriptionOutput = z.infer<typeof GenerateDealDescriptionOutputSchema>;

export async function generateDealDescription(input: GenerateDealDescriptionInput): Promise<GenerateDealDescriptionOutput> {
  return generateDealDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDealDescriptionPrompt',
  input: {schema: GenerateDealDescriptionInputSchema},
  output: {schema: GenerateDealDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging deal descriptions.

  Based on the information provided, generate a description for the deal that will attract customers.
  Include key details such as the deal name, business name, prices (if available), discount, category, and expiry date.

  Deal Name: {{{dealName}}}
  Business Name: {{{businessName}}}
  Original Price: {{#if originalPrice}}{{{originalPrice}}}{{else}}N/A{{/if}}
  Discounted Price: {{#if discountedPrice}}{{{discountedPrice}}}{{else}}N/A{{/if}}
  Discount Percentage: {{#if discountPercentage}}{{{discountPercentage}}}%{{else}}N/A{{/if}}
  Deal Category: {{{dealCategory}}}
  Deal Expiry: {{{dealExpiry}}}

  Write a short but enticing description of the deal:
  `,
});

const generateDealDescriptionFlow = ai.defineFlow(
  {
    name: 'generateDealDescriptionFlow',
    inputSchema: GenerateDealDescriptionInputSchema,
    outputSchema: GenerateDealDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
