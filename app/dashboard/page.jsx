'use client';

import { NavbarBottom } from '../../components';
import { } from '../../sections/apiConsulta';
import { Dashboard1, Hero } from '../../sections/dashboards';
import '../../styles/globals.css';
import '../../tailwind.config';

const Dashboard = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />

    <div className="bg-pages">
      <Hero />
    </div>
    <div className="bg-slate-300">
      <Dashboard1 />
    </div>

  </div>
);

export default Dashboard;
