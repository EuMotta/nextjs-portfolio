import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaThList } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { MdDashboardCustomize, MdMiscellaneousServices, MdWork } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import { RiCodeSSlashFill } from 'react-icons/ri';
import Me from '../public/Me.jpg';
import project01 from '../public/project01.jpg';
import project02 from '../public/project02.jpg';
import project03 from '../public/project03.jpg';
import project04 from '../public/project04.jpg';
import project05 from '../public/project05.jpg';
import project06 from '../public/project06.jpg';

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];
export const AboutSection = [
  {
    id: 'about-1',
    title: 'Experiência de vida:',
    subtitle: ' Enfrentando desafios e me tornando mais forte',
    description: ' Já passei por momentos difíceis que me deixaram no chão, mas consegui superáloscom determinação e força de vontade. Isso me deu muita confiança e me inspirou a lutar pelos meus objetivos. Acredito que essas dificuldades superadas me tornam mais forte e experiente para qualquer oportunidade de trabalho.Estou pronto para enfrentar novos desafios e continuar crescendo como pessoa e profissional.',
    fadeIn: 'left',
  },
  {
    id: 'about-2',
    title: 'Procurando novos desafios:',
    subtitle: 'Determinado e comprometido com a excelência',
    description: 'Sempre dei o meu melhor para alcançar meus objetivos e acredito que, com determinação e esforço, é possível superar qualquer obstáculo. Na programação, trabalho com afinco para atingir esses objetivos e me sinto realizado quando consigo atingir os resultados esperados. Além disso, busco me atualizar constantemente e estou sempre pronto para enfrentar novos desafios. Sou um profissional comprometido e dedicado, que busca sempre se superar e atingir seus objetivos.',
    fadeIn: 'right',
  },
  {
    id: 'about-3',
    title: ' Apaixonado por criar soluções',
    subtitle: 'Pronto para evoluir e encarar novos desafios',
    description: 'Programar é minha paixão e meu hobby. Desde cedo, a informática sempre esteve presente em minha vida e, quando descobri a programação, me apaixonei ainda mais por essa área. <br /> Cada linguagem trás um desafio diferente que tenho o prazer de enfrentar. Programar é muito mais do que um simples trabalho para mim e estou sempre pronto para enfrentar novos desafios e me desenvolver na minha carreira.',
    fadeIn: 'left',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const personalInformation = {
  personalInformation: [
    { label: 'Birthday', value: '5 Nov 1999' },
    { label: 'Website', value: 'https://www.example.com' },
    { label: 'Country/State', value: 'Brazil / São Paulo' },
    { label: 'City', value: 'Guaratinguetá' },
  ],
  contactInformation: [
    { label: 'Age', value: '23' },
    { label: 'Email', value: 'motta@example.com' },
    { label: 'Phone', value: '+55 (99)99999 9999' },
    { label: 'Freelancer', value: 'Yes!' },
  ],
};
export const links = [
  {
    label: 'Aperfeiçoamento',
    id: 'item-1',
    icon: IoCheckmarkCircleSharp,
    description:
      'Focar em aprender novas tecnologias e aperfeiçoar minhas habilidades atuais.',
  },
  {
    label: 'Impacto',
    id: 'item-2',
    icon: IoCheckmarkCircleSharp,
    description:
      'Encontrar projetos que tenham um significado pessoal para você e que possam ter um impacto positivo na comunidade.',
  },
  {
    label: 'Carreira',
    id: 'item-3',
    icon: IoCheckmarkCircleOutline,
    description:
      'Desenvolver uma base sólida de conhecimentos e habilidades e estabelecer uma carreira bem-sucedida como programador.',
  },
  {
    label: 'Colaboração',
    id: 'item-4',
    icon: IoCheckmarkCircleSharp,
    description:
      'Trabalhar em equipe com outros programadores pode ser uma ótima maneira de aprender e crescer em sua carreira.',
  },
  {
    label: 'Ensino',
    id: 'item-5',
    icon: IoCheckmarkCircleSharp,
    description:
      'Compartilhar meus conhecimentos e experiências com outras pessoas que estão interessadas em aprender a programar.',
  },
];

export const navbarItems = [
  {
    icon: AiOutlineHome,
    href: '#Hero',
    title: 'Inicio',
  },
  {
    icon: FaThList,
    href: '#About',
    title: 'Sobre Mim',
  },
  {
    icon: AiOutlineUser,
    href: '#Me',
    title: 'Sobre Mim2',
  },
  {
    icon: HiInformationCircle,
    href: '#AboutMe',
    title: 'Sobre Mim3',
  },
  {
    icon: MdWork,
    href: '#CursesExp',
    title: 'Sobre Mim4',
  },
  {
    icon: VscChecklist,
    href: '#Objectives',
    title: 'Sobre Mim5',
  },
  {
    icon: MdMiscellaneousServices,
    href: '#Services',
    title: 'Sobre Mim6',
  },
  {
    icon: MdDashboardCustomize,
    href: '#Projects',
    title: 'Sobre Mim7',
  },
];

export const feedbacks = {
  messages: [
    {
      name: 'Caio Abreu',
      image: Me,
      message: 'Excelente trabalho no novo recurso! A implementação ficou muito clara e fácil de entender.',
      fadeIn: 'up',
    },
    {
      name: 'Gabriel Augusto',
      image: Me,
      message: 'Obrigado por sua dedicação em corrigir o bug na função de login. Agora o sistema está rodando sem problemas.',
      fadeIn: 'down',
    },
    {
      name: 'Pedro Paulo',
      image: Me,
      message: 'Gostaria de expressar minha gratidão pelo seu trabalho na melhoria da performance do aplicativo.',
      fadeIn: 'up',
    },
    {
      name: 'José Antonio',
      image: Me,
      message: 'Gostaria de expressar minha gratidão pelo seu trabalho na melhoria da performance.',
      fadeIn: 'down',
    },
  ],
};

export const services = [
  {
    id: 'service-1',
    icon: RiCodeSSlashFill,
    name: 'Desenvolvedor Web',
    description: 'Desenvolvedor Web',
    fadeIn: 'down',
  },
  {
    id: 'service-2',
    icon: RiCodeSSlashFill,
    name: 'Desenvolvedor Web',
    description: 'Desenvolvedor Web',
    fadeIn: 'up',
  },
  {
    id: 'service-3',
    icon: RiCodeSSlashFill,
    name: 'Desenvolvedor Web',
    description: 'Desenvolvedor Web',
    fadeIn: 'down',
  },
  {
    id: 'service-4',
    icon: RiCodeSSlashFill,
    name: 'Desenvolvedor Web',
    description: 'Desenvolvedor Web',
    fadeIn: 'up',
  },
];
export const projects = [
  {
    id: 'project-01',
    imgUrl: project01,
    title: 'Site de empresa responsivo',
    description: 'Desenvolvi um site de apresentação de empresa responsivo usando React e Next.js. O site apresenta os produtos e serviços da empresa de maneira atraente e é otimizado para dispositivos móveis.',
    fadeIn: 'right',
  },
  {
    id: 'project-02',
    imgUrl: project02,
    title: 'Blog pessoal',
    description: 'Criei um blog pessoal usando o Next.js e HTML. O blog possui uma interface de usuário amigável e é fácil de atualizar com novos conteúdos.',
    fadeIn: 'down',
  },
  {
    id: 'project-03',
    imgUrl: project03,
    title: 'Site de notícias',
    description: 'Desenvolvi um site de notícias usando o React e o Next.js. O site apresenta as últimas notícias de diversas fontes e permite que os usuários pesquisem por assuntos específicos.',
    fadeIn: 'left',
  },
  {
    id: 'project-04',
    imgUrl: project04,
    title: 'Site de reservas de hotéis',
    description: 'Criei um site de reservas de hotéis usando o React e o Next.js. O site permite que os usuários pesquisem e reservem quartos em hotéis de todo o mundo, além de gerenciar suas próprias reservas.',
    fadeIn: 'right',
  },
  {
    id: 'project-05',
    imgUrl: project05,
    title: 'Site de comparação de preços',
    description: 'Desenvolvi um site de comparação de preços usando Next.js. O site permite que os usuários pesquisem e comparem preços de produtos de diversas lojas online.',
    fadeIn: 'up',
  },
  {
    id: 'project-06',
    imgUrl: project06,
    title: 'Site de agendamento de serviços de beleza',
    description: 'Criei um site de agendamento de serviços de beleza usando o Rails e o Ruby. O site permite que os usuários agendem serviços de beleza de sua escolha e gerenciem suas próprias reservas.',
    fadeIn: 'left',
  },
];
