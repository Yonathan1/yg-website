import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import FooterMain from './components/footer/FooterMain';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import SkillsMain from './components/skillSection/SkillsMain';
import SubSkills from './components/skillSection/SubSkills';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <main className='font-body overflow-x-hidden w-screen'>
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ContactMeMain />
      <FooterMain />
      <Analytics />
    </main>
  );
}

export default App
