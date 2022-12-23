import { Footer, Nav } from '../components';
import { AboutTest, Experience, Experience2, Explore, Feedback, GetStarted, Hero, Insights, Languages, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-slate-200 dark:bg-gradient-to-b from-slate-900 to-[#0d0f13] overflow-hidden">
    <Nav />
    <Hero />
    <AboutTest />
    <Me />
    <Experience />
    <Languages />
    <Experience2 />
    <Objectives />
    <Services />
    <Projects />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
