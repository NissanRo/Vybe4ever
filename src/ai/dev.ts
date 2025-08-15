import { config } from 'dotenv';
config();

import '@/ai/flows/generate-deal-description.ts';
import '@/ai/flows/personalize-city-feed.ts';
import '@/ai/flows/summarize-news.ts';