import { Footer, Nav, Navbar } from '../components';
import { About, Experience, Experience2, Explore, Feedback, GetStarted, Hero, Insights, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-gradient-to-b from-slate-900 to-[#0d0f13] overflow-hidden">
    <Navbar />
    <Nav />
    <Hero />
    <About />
    <Me />
    <Experience />
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
