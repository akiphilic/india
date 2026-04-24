import { HeroSection } from '../components/HeroSection';
import { WhatIsJhamtse } from '../components/WhatIsJhamtse';
import { ImpactNumbers } from '../components/ImpactNumbers';
import { DocumentarySection } from '../components/DocumentarySection';
import { GroupSponsorship } from '../components/GroupSponsorship';
import { SchoolConstruction } from '../components/SchoolConstruction';
import { TransformationStories } from '../components/TransformationStories';
import { DonationBreakdown } from '../components/DonationBreakdown';
import { EventsSection } from '../components/EventsSection';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhatIsJhamtse />
      <ImpactNumbers />
      <DocumentarySection />
      <GroupSponsorship />
      <SchoolConstruction />
      <TransformationStories />
      <DonationBreakdown />
      <EventsSection />
      <FinalCTA />
    </div>
  );
}
