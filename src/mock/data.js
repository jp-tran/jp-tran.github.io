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
    img: 'mit_site_ss.png',
    title: 'MIT Biomimetics Website',
    info: 'A revamp of the original lab website with a modern, responsive UI and improved UX.',
    techs: ['Gatsby', 'React', 'TypeScript', 'Material-UI'],
    info2: '',
    url: 'https://jp-tran.github.io/mit-biomimetics-site',
    repo: 'https://github.com/jp-tran/mit-biomimetics-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'discord_logo.png',
    title: 'Discord Trivia Bot',
    info: `A Discord bot that delivers trivia questions and evaluates users' answers, keeping a profile of scores for each server member.`,
    techs: ['Python'],
    info2: '',
    url: '',
    repo: 'https://github.com/ptran3/discord-trivia-bot', // if no repo, the button will not show up
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
