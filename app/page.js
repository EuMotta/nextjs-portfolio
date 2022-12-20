import { Footer, Nav, Navbar } from '../components';
import { About, About2, About3, Explore, Feedback, GetStarted, Hero, Insights, Me, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Nav />
    <Hero />
    <About />
    <About2 />
    <About3 />
    <Me />
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
