import { Footer, NavbarBottom } from '../components';
import { AboutTest, Cep, Cnpj, Experience, Experience2, Explore, Feedback, GetStarted, Hero, Insights, Languages, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-slate-200 dark:bg-gradient-to-b from-slate-900 to-[#0d0f13] overflow-hidden">
    <NavbarBottom />
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
    <Cnpj />
    <Cep />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
