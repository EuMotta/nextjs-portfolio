import { NavbarBottom } from '../components';
import { } from '../sections/apiConsulta';
import { Dashboard1, Hero } from '../sections/dashboards';
import '../styles/globals.css';
import '../tailwind.config';

const Dashboard = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <div className="">
      <div className="container mx-auto">
        <Hero />
        <div className="bg-slate-300">
          <Dashboard1 />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
