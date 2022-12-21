import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaThList } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import Me from '../public/Me.jpg';

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

export const personalInformation = [
  { label: 'Birthday', value: '5 Nov 1999' },
  { label: 'Website', value: 'https://www.example.com' },
  { label: 'Country/State', value: 'Brazil / São Paulo' },
  { label: 'City', value: 'Guaratinguetá' },
];
export const contactInformation = [
  { label: 'Age', value: '23' },
  { label: 'Email', value: 'motta@example.com' },
  { label: 'Phone', value: '+55 (99)99999 9999' },
  { label: 'Freelancer', value: 'Yes!' },
];

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

