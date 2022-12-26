import { Footer, NavbarBottom, PositionBar, Top } from '../components';
import { AboutTest, Cep, Cnpj, Education, Experience, Explore, Feedback, GetStarted, Hero, Insights, Languages, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => (
  <>
    <iframe
      title="title"
      className="w-full -z-10 fixed min-h-screen"
      src="https://www.shadertoy.com/embed/WlSSWV?gui=true&t=10&paused=false&muted=true&autoplay=1"
    />
    <div className=" overflow-hidden">
      <Top />
      <PositionBar />
      <NavbarBottom />
      <Hero />
      <AboutTest />
      <Me />
      <Experience />
      <Languages />
      <Education />
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
  </>
);

export default Page;
