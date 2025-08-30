import { PortableTextBlock } from '@portabletext/types';

export interface SiteSettings {
  title: string;
  description: string;
  logo: any;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface Homepage {
  title: string;
  heroSlides: Array<{
    _key: string;
    image: any;
    title: string;
    subtitle: string;
    cta?: {
      text: string;
      href: string;
      secondary?: boolean;
    };
  }>;
  welcomeMessage: PortableTextBlock[];
  missionSection: {
    title: string;
    statement: string;
    bulletPoints: Array<{
      _key: string;
      point: string;
      description?: string;
    }>;
  };
  serviceTimesSection: {
    title: string;
    sundayService: {
      time: string;
      location: string;
    };
    bibleStudy: {
      time: string;
      location: string;
    };
    prayerMeeting: {
      time: string;
      location: string;
    };
  };
  callToActions: Array<{
    title: string;
    link: string;
    type: 'primary' | 'secondary' | 'outline';
  }>;
}

export interface AboutPage {
  title: string;
  mission: PortableTextBlock[];
  vision: PortableTextBlock[];
  history: PortableTextBlock[];
  pastor: {
    name: string;
    bio: PortableTextBlock[];
    image: any;
  };
}

export interface Sermon {
  title: string;
  slug: { current: string };
  preacher: string;
  date: string;
  scripture: string;
  description: PortableTextBlock[];
  audioUrl?: string;
  videoUrl?: string;
}

export interface Event {
  title: string;
  slug: { current: string };
  date: string;
  time: string;
  location: string;
  description: PortableTextBlock[];
  image?: any;
}

export interface Ministry {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  description: PortableTextBlock[];
  image?: any;
  leader: {
    name: string;
    role: string;
    image?: any;
    bio?: string;
  };
  meetingSchedule: Array<{
    day: string;
    time: string;
    location: string;
  }>;
  activities: Array<{
    title: string;
    description: string;
  }>;
  contactInfo: {
    email?: string;
    phone?: string;
    socialMedia?: Array<{
      platform: 'facebook' | 'instagram' | 'whatsapp';
      url: string;
    }>;
  };
  order: number;
}
