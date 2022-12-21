import { Footer, Nav, Navbar } from '../components';
import { About, About2, About3, Experience, Experience2, Explore, Feedback, GetStarted, Hero, Insights, Me, Objectives, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-gradient-to-b from-slate-900 to-slate-700 overflow-hidden">
    <Navbar />
    <Nav />
    <Hero />
    <About />
    <About2 />
    <About3 />
    <Me />
    <Experience />
    <Experience2 />
    <Objectives />
    <Services />
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
