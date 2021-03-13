import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joseph Tran', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Joseph Tran's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_photo.jpg',
  paragraphOne: `I'm a self-taught programer with a B.S. in Aerospace Engineering from the University of Notre Dame.`,
  paragraphTwo: `I enjoy creating web apps, learning new technologies, and discovering new ways to write clean, concise code.`,
  paragraphThree: `Besides programming, I'm passionate about teaching and mentoring. I've held several teaching assistant and mentorship positions (most recently for the Summer Science Program in summer 2020).`,
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recurse_store.png',
    title: 'Recurse Store',
    info: 'A mock e-commerce platform for Recurse Center participants and alumni.',
    techs: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
    info2: '',
    url: 'https://recurse-store.vercel.app/',
    repo: 'https://github.com/jp-tran/recurse-store',
  },
  {
    id: nanoid(),
    img: 'mit_site_ss.png',
    title: 'MIT Biomimetic Robotics Lab Website',
    info: 'The official website for the MIT Biomimetic Robotics Lab.',
    techs: ['Gatsby.js', 'React', 'TypeScript', 'Material-UI'],
    info2: '',
    url: 'https://biomimetics.mit.edu/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'discord_trivia_bot.png',
    title: 'Discord Trivia Bot',
    info: `A Discord bot that delivers trivia questions and evaluates users' answers, keeping a profile of scores for each server member.`,
    techs: ['Python'],
    info2: '',
    url: '',
    repo: 'https://github.com/jp-tran/discord-trivia-bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'product_landing_page_ss.jpg',
    title: 'Product Landing Page',
    info: `A landing page for my favorite boots, thematically similar to the official Thursday boots website.`,
    techs: ['HTML', 'CSS'],
    info2: '',
    url: 'https://jp-tran.github.io/product-landing-page/',
    repo: 'https://github.com/jp-tran/product-landing-page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Got any interesting projects, opportunities, or just want to say hi?', // call to action text for the contact section
  btn: 'Send an Email', // text inside the button
  email: 'phuoctran27@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jp-tran/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jp-tran',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jp-tran',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
