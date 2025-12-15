import { Trophy, Users, DollarSign, Heart, LucideIcon } from "lucide-react";

export interface InvolvementItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  highlight?: boolean;
}

export interface InvolvementSection {
  category: string;
  items: InvolvementItem[];
}

export const involvements: InvolvementSection[] = [
  {
    category: "Leadership",
    items: [
      {
        title: "Vice President of Fundraising",
        organization: "Business Builders",
        period: "April 2025 – Present",
        description:
          "Elected by 50+ members to connect with companies and startup supporters. Raised $50,000+ to date, funding student-run entrepreneurial initiatives and community-building events.",
        icon: DollarSign,
        highlight: true,
      },
      {
        title: "President",
        organization: "Association for India's Development",
        period: "January 2023 – May 2025",
        description:
          "Led team of 10 students collaborating with community leaders and university organizations. Raised $8,000+ to support nonprofits focused on critical educational and social initiatives in 5+ states across India.",
        icon: Users,
      },
    ],
  },
  {
    category: "Awards",
    items: [
      {
        title: "1st Place Winner",
        organization: "Smart Campus Challenge",
        period: "2024",
        description:
          "Won first place and $60,000 prize for innovative campus solution.",
        icon: Trophy,
        highlight: true,
      },
      {
        title: "Finalist",
        organization: "President's Buckeye Accelerator",
        period: "2024",
        description:
          "Selected as top 10 finalist out of 75 applicants for entrepreneurial excellence.",
        icon: Trophy,
      },
    ],
  },
];
