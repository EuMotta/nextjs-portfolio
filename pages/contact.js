
import { Footer, NavbarBottom } from '../components';
import { Hero } from '../sections/contact';
import '../styles/globals.css';
import '../tailwind.config';

const contact = () => (
  <div className="bg-slate-200 dark:bg-gradient-to-b from-slate-900 to-[#0d0f13] overflow-hidden">
    <NavbarBottom />
    <Hero />
    <Footer />
  </div>
);

export default contact;
