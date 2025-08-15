import {
  Newspaper,
  Calendar,
  Bus,
  Cloud,
  Megaphone,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Header } from '@/components/layout/header';

const liveFeedItems = [
  {
    category: 'Traffic',
    content: 'Heavy traffic reported near Technopark phase 3 entrance.',
    timestamp: '2m ago',
    source: 'User Report',
    icon: <Bus className="h-4 w-4 text-red-500" />,
  },
  {
    category: 'Event',
    content: 'Live music performance at The Trivandrum Club tonight at 8 PM.',
    timestamp: '15m ago',
    source: 'Trivandrum Club',
    icon: <Calendar className="h-4 w-4 text-blue-500" />,
  },
  {
    category: 'Transport',
    content: 'KSRTC bus routes 24 and 32 are delayed by 20 minutes.',
    timestamp: '30m ago',
    source: 'KSRTC Updates',
    icon: <Bus className="h-4 w-4 text-yellow-500" />,
  },
  {
    category: 'Notice',
    content: 'Water supply will be interrupted in Kazhakootam area tomorrow.',
    timestamp: '1h ago',
    source: 'KWA',
    icon: <Megaphone className="h-4 w-4 text-green-500" />,
  },
];

const dealItems = [
  {
    title: '50% Off on Pizza',
    business: 'Pizza Corner',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pizza food',
    isPriority: true,
  },
  {
    title: 'Buy 1 Get 1 Free',
    business: 'Style Garments',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fashion shopping',
    isPriority: false,
  },
  {
    title: '20% discount on all electronics',
    business: 'Gadget World',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'electronics gadgets',
    isPriority: false,
  },
];

const emergencyContacts = [
  { name: 'Police', number: '100' },
  { name: 'Ambulance', number: '102' },
  { name: 'Fire Station', number: '101' },
  { name: 'KSEB', number: '1912' },
];

const personalizedFeed = [
    {
        title: "Indie Music Fest",
        description: "A festival showcasing local indie bands. Perfect for your taste in music!",
        icon: <Calendar className="h-5 w-5 text-primary"/>
    },
    {
        title: "Tech Meetup: AI in 2024",
        description: "Based on your past activity, you might like this upcoming tech meetup.",
        icon: <Lightbulb className="h-5 w-5 text-accent"/>
    },
     {
        title: "25% off at 'The Reading Room' Cafe",
        description: "A special deal for book lovers like you. Enjoy a quiet evening with a book and coffee.",
        icon: <Heart className="h-5 w-5 text-destructive"/>
    }
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6 md:col-span-2 lg:col-span-3">
            {/* Live City Feed */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Live City Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveFeedItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.content}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.timestamp} - {item.source}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Snapshot */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Daily Snapshot</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="news">
                    <AccordionTrigger>
                      <Newspaper className="mr-2 h-5 w-5" /> Today's News
                    </AccordionTrigger>
                    <AccordionContent>
                      Top headlines and news summaries for Trivandrum will appear here.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="events">
                    <AccordionTrigger>
                      <Calendar className="mr-2 h-5 w-5" /> Events
                    </AccordionTrigger>
                    <AccordionContent>
                      Upcoming events, workshops, and gatherings in the city.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="transport">
                    <AccordionTrigger>
                      <Bus className="mr-2 h-5 w-5" /> Public Transport
                    </AccordionTrigger>
                    <AccordionContent>
                      Updates on KSRTC schedules, delays, and other transport news.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="weather">
                    <AccordionTrigger>
                      <Cloud className="mr-2 h-5 w-5" /> Weather
                    </AccordionTrigger>
                    <AccordionContent>
                      Today's weather forecast: 32°C, partly cloudy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="notices">
                    <AccordionTrigger>
                      <Megaphone className="mr-2 h-5 w-5" /> Official Notices
                    </AccordionTrigger>
                    <AccordionContent>
                      Important announcements from local authorities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-1">
            {/* Emergency Hub */}
            <Card className="bg-destructive/10 border-destructive">
              <CardHeader>
                <CardTitle className="font-headline text-destructive">
                  Emergency & Help Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {emergencyContacts.map((contact) => (
                    <li
                      key={contact.name}
                      className="flex items-center justify-between"
                    >
                      <span className="font-semibold">{contact.name}</span>
                      <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive">
                        {contact.number}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Personalized Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Heart className="text-primary"/> For You
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  {personalizedFeed.map((item, index) => (
                     <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div>
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                     </div>
                  ))}
              </CardContent>
            </Card>
            
             {/* Mini Games */}
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Fun Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-lg">
                    <p className="font-semibold mb-2">Trivandrum Quiz</p>
                    <p className="text-sm text-muted-foreground mb-4">Test your knowledge about our city!</p>
                    <Button>Play Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Deals and Discounts */}
        <div className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Instant Deals & Discounts</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {dealItems.map((deal, index) => (
                    <Card key={index} className="overflow-hidden group">
                    <div className="relative">
                        <Image
                        src={deal.image}
                        alt={deal.title}
                        width={600}
                        height={400}
                        data-ai-hint={deal.dataAiHint}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {deal.isPriority && (
                        <Badge variant="default" className="absolute top-2 right-2 bg-primary">Priority</Badge>
                        )}
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold font-headline">{deal.title}</h3>
                        <p className="text-sm text-muted-foreground">{deal.business}</p>
                        <Button variant="link" className="p-0 mt-2 h-auto">View Deal</Button>
                    </div>
                    </Card>
                ))}
                </CardContent>
            </Card>
        </div>

      </main>
    </div>
  );
}
