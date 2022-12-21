import { Footer, Nav, Navbar } from '../components';
import { About, About2, About3, Experience, Experience2, Explore, Feedback, GetStarted, Hero, Insights, Me, Objectives, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
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
