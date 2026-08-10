import Announcementbar from '../components/Home/Announcementbar';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import FloatingStatsWrap from '../components/Home/FloatingStatsWrap';
import Tabletop from '../components/Home/Tabletop';
import FutureSkills from '../components/Home/FutureSkills';
import Learning from '../components/Home/Learning';
import Kits from '../components/Home/Kits';
import Why from '../components/Home/Why';
import KidsFutureSection from '../components/Home/KidsFutureSection';
import AwardsRecognitionBlock from '../components/Home/AwardsRecognitionBlock';
import Partners from '../components/Home/Partners';
import Demo from '../components/Home/Demo';
import Support from '../components/Home/Support';
import SiteFooter from '../components/Footer';
import WhatsappFloat from '../components/Home/WhatsappFloat';
import Backtotop from '../components/Home/Backtotop';
import Authmodal from '../components/Home/Authmodal';
import Script18 from '../components/Home/Script18';
import Script19 from '../components/Home/Script19';
import Script20 from '../components/Home/Script20';
import Script21 from '../components/Home/Script21';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      '.reveal-left, .reveal-right, .reveal-up, .reveal-timeline, .highlight-card, .kit-cat, .kit-card',
    );
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => {
      revealEls.forEach((el) => revealObs.unobserve(el));
    };
  }, []);

  return (
    <>
      <Hero />
      <FloatingStatsWrap />
      <Tabletop />
      <FutureSkills />
      <Learning />
      <Kits />
      <Why />
      <KidsFutureSection />
      <AwardsRecognitionBlock />
      <Partners />
      <Demo />
      <Support />
      <Backtotop />
      <Authmodal />
      <Script18 />
      <Script19 />
      <Script20 />
      <Script21 />
    </>
  );
}
