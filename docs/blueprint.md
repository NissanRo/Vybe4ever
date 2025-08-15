# **App Name**: Trivandrum Vibes Hyperlocal Aggregator

## Core Features:

- Live City Feed: Displays real-time updates including events, traffic, public transport, movie times, fuel prices, and official notifications. Populates from APIs, web scraping, RSS feeds and admin entries. Includes Daily Snapshot card (expandable for News, Events, Transport, Weather, Notices). Each update shows a timestamp and source for trust and verifiability.
- Instant Deals & Discounts: Live list of local offers from businesses, restaurants, malls. Shows image, text, and link per deal. Businesses can request "Priority Listing" (sponsored, flagged). AI-simulated or manually entered deals. Old deals auto-removed on expiry; users/admin can add new deals.
- Emergency & Help Hub: Static, admin-editable directory of verified emergency contacts (police, fire, hospitals, utilities, etc.). Always visible. Admin can update details easily.
- Community Alerts: Users can submit events, alerts, offers by category and geolocation. Moderation layer for admin review. Only approved items show up in feed. User dashboard displays submitted and past alerts (“history”).
- User Authentication & Profiles: Signup/Login: email, Google, or phone OTP. Unique customer identifier (auto-generated). User profile: name, contact, profile/business type, activity dashboard.
- Personalized Recommendations: Suggest events, deals, and news based on preferences and history. Uses AI models (Gemini via Genkit) as a tool for personalization.
- Admin Module: Dedicated admin panel at unique URL; login via unique credentials (username: admin, password: admin1234). Admin role unlocks full permissions (future-proof for multi-admin if needed). Manage all City Feed/Deals/Emergency/Community data (CRUD: Create, Read, Update, Delete). Approve/reject/modify user-submitted alerts, offers, events. Add/edit/delete static emergency contacts. Schedule or post manual updates (with “publish at” time option). See and manage user profiles and history. Access activity analytics (most viewed posts, active users, new signups, etc.). Drag & drop, resize, rearrange, and edit homepage/section banners, placeholders, and cards.  Live preview of changes. Change colors, typography (preconfigured font/styles), RTF editing (headers, lists, bold, links), image uploads, link buttons. All blocks and banners drag-and-droppable. CRUD for each section, with bulk import/export. Upload images/files for deals/events (with placeholder used if image fails). Toggle items “featured”, “priority”, “archived”. Set timers for automatic removal of outdated items. Toggle maintenance mode. Add/update external API keys for scrapers/AIs. Multilingual content entry. Set moderation flows and rate limits.
- Additional Features: Plug-and-play mini-games (quizzes, puzzles). Multilingual UI toggle (English/Malayalam). Dark mode. Modular for easy addition of new features/integrations.

## Style Guidelines:

- Built using ShadCN UI, a collection of reusable UI components for consistency.
- Styled using Tailwind CSS with a utility-first approach and semantic class names.
- Color scheme defined in src/app/globals.css using HSL CSS variables for easy theming in light and dark modes.
- Primary color: Vibrant orange (hsl(33 100% 50%)) for key actions and branding.
- Accent color: Cool teal (hsl(180 100% 25.1%)) for secondary actions and highlights.
- Background/Foreground: Neutral grays and whites for backgrounds and text to ensure readability.
- Headlines: Poppins for titles and major headings for a bold, impactful look.
- Body Text: PT Sans is used for paragraphs and general content for clarity and readability.
- Responsive layout using a consistent spacing system provided by Tailwind CSS. Centered content with a maximum width for comfortable reading.
- Lucide icon library for clean, modern, and consistent icons.
- Reusable components (e.g., DealCard, LiveFeedCard) to ensure a consistent appearance and easier codebase management.