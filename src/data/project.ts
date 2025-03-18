import { StaticImageData } from 'next/image';

import GoodBuyImg from '@/assets/projects/good-buy.png';
import GovCertifyImg from '@/assets/projects/gov-certify.png';
import MetaLogicImg from '@/assets/projects/metalogic.png';
import MovizImg from '@/assets/projects/moviez.png';
import NextAuthV5Img from '@/assets/projects/next-auth-v5.png';
import NextStarterImg from '@/assets/projects/next-starter.png';
import Portfoliov1Img from '@/assets/projects/portfolio-v1.png';
import Portfoliov2Img from '@/assets/projects/portfolio-v2.png';
import SmartYatraImg from '@/assets/projects/smart-yatra-light.png';

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  overview: string;
  poweredBy?: string;
  technologies: string[];
  features: string[];
  developmentChallenges?: string;
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  conclusion: string;
}

export const PROJECTS: IProject[] = [
  {
    id: 'smart-yatra',
    title: 'Smart Yatra',
    description:
      'A digital public transportation system utilizing QR codes for fare collection and route optimization in Kathmandu Valley.',
    image: SmartYatraImg,
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Laravel',
      'MySQL',
      'OpenStreetMap',
      'Leaflet',
    ],
    liveUrl: 'https://smart-yatra-frontend.vercel.app/',
    githubUrl: 'https://github.com/SmartYatra/smart-yatra-frontend',
    overview:
      'Smart Yatra is a digital public transport management system that enhances commuting efficiency in Kathmandu Valley. It enables passengers to board and exit buses using QR codes, calculates fares based on travel distance, and optimizes routes using OpenStreetMap and OSRM API.',
    poweredBy:
      'Powered by OpenStreetMap and OSRM API, Smart Yatra supports real-time route optimization and distance-based fare calculation, providing a seamless experience for both passengers and bus operators.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Laravel',
      'MySQL',
      'OpenStreetMap',
      'Leaflet.js',
    ],
    features: [
      'QR code-based bus boarding and fare payment',
      'Automated distance-based fare calculation using Haversine formula',
      'Bus route mapping with OpenStreetMap and OSRM API',
      'User authentication and profile management',
      'Admin panel for route and fare management',
      'Secure database management with Firebase and MySQL',
      'Custom map integration with Leaflet.js',
      'Mobile-friendly and responsive UI',
    ],
    developmentChallenges:
      'Building Smart Yatra required integrating multiple APIs and ensuring real-time updates for route optimization and fare calculation. Handling large datasets for route mapping and ensuring a seamless user experience across devices were key challenges.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Smart Yatra Dashboard',
    //     caption: 'Smart Yatra Admin Dashboard',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Smart Yatra Mobile View',
    //     caption: 'Smart Yatra Mobile View',
    //   },
    // ],
    conclusion:
      'Building Smart Yatra was a rewarding experience that enhanced my understanding of API integrations, real-time data handling, and responsive design. The project also helped me tackle challenges like cross-browser compatibility and optimizing map rendering for large datasets.',
  },
  {
    id: 'good-buy',
    title: 'Good-Buy',
    description:
      'An e-commerce platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB, offering seamless integration with Khalti payment and cash on delivery options.',
    image: GoodBuyImg,
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
      'Khalti API',
    ],
    liveUrl: 'https://good-buy.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/GoodBuy',
    overview:
      'Good-Buy is a Next.js-based e-commerce platform that provides a streamlined shopping experience. It features product browsing, user authentication, payment integration with Khalti, and support for cash on delivery. The application is built with TypeScript, styled using Tailwind CSS, and utilizes Prisma as the ORM with MongoDB as the database.',
    poweredBy:
      'Powered by Khalti API, Good-Buy supports secure payment processing and cash on delivery options, ensuring a seamless shopping experience for users. The platform leverages Prisma and MongoDB for efficient data management and storage.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
      'Khalti API',
    ],
    features: [
      'User authentication and authorization',
      'Product browsing and searching',
      'Secure payment processing with Khalti',
      'Cash on delivery option',
      'Responsive design for various devices',
    ],
    developmentChallenges:
      'Building an e-commerce platform like Good-Buy required integrating payment gateways, ensuring secure data handling, and optimizing the user experience for various devices. Implementing features like user authentication and product browsing were key challenges.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Good-Buy Homepage',
    //     caption: 'Good-Buy Homepage',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Good-Buy Product Page',
    //     caption: 'Good-Buy Product Page',
    //   },
    // ],
    conclusion:
      'Good-Buy is a comprehensive e-commerce platform that demonstrates my ability to build secure, user-friendly applications. The project deepened my knowledge of payment gateway integrations, user authentication, and responsive design, providing valuable insights into e-commerce development.',
  },
  {
    id: 'gov-certify',
    title: 'Gov Certify',
    description:
      'An online certificate registration platform developed for e-governance projects, streamlining the process of certificate issuance and registration for citizens.',
    image: GovCertifyImg,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MongoDB'],
    liveUrl: 'https://gov-certify.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/Gov-Certify',
    overview:
      'Gov Certify is an e-governance platform designed to simplify the process of certificate issuance and registration. Built with Next.js and TypeScript, it offers a user-friendly interface for citizens to apply for and receive various certificates. The platform ensures secure data handling and efficient processing, leveraging Prisma and MongoDB for data management.',
    poweredBy:
      'Powered by Prisma and MongoDB, Gov Certify ensures secure data storage and efficient processing of certificate applications. The platform offers a seamless user experience for citizens applying for certificates online.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
    ],
    features: [
      'Online application for certificates',
      'User authentication and profile management',
      'Admin dashboard for managing applications',
      'Email notifications for application status',
      'Responsive design for accessibility',
    ],
    developmentChallenges:
      'Ensuring data security and efficient processing was a key challenge. Implementing authentication, managing different user roles, and optimizing database queries required careful design choices.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Gov Certify user dashboard',
    //     caption: 'Gov Certify user dashboard',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800',
    //     alt: 'Gov Certify admin panel',
    //     caption: 'Gov Certify admin panel',
    //   },
    // ],
    conclusion:
      'Gov Certify streamlines the bureaucratic process of certificate issuance, making it more accessible to citizens while ensuring security and efficiency. The project deepened my understanding of authentication, database optimization, and user experience in e-governance applications.',
  },
  {
    id: 'next-auth-v5',
    title: 'Next Auth v5',
    description:
      'A project showcasing the implementation of authentication and various key features using Next.js 14, NextAuth v5, Tailwind CSS, Shadcn UI, Prisma, and MongoDB.',
    image: NextAuthV5Img,
    tags: [
      'Next.js',
      'NextAuth',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
    ],
    liveUrl: 'https://db-next-auth-v5.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/Next-Auth-v5',
    overview:
      'Next Auth v5 demonstrates the integration of authentication mechanisms in a Next.js application using NextAuth v5. The project includes features like user sign-up/sign-in, protected routes, and session management. It utilizes Tailwind CSS for styling, Shadcn UI for components, Prisma for ORM, and MongoDB as the database.',
    technologies: [
      'Next.js 14',
      'NextAuth v5',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Prisma',
      'MongoDB',
    ],
    features: [
      'User authentication with NextAuth v5',
      'Protected routes and API endpoints',
      'Session management and security',
      'Integration with Prisma and MongoDB',
      'Responsive and accessible UI components',
    ],
    developmentChallenges:
      'Handling authentication tokens and session persistence was a key challenge. Ensuring secure user authentication while maintaining a smooth experience required careful implementation of NextAuth session handling and API security measures.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Login page UI',
    //     caption: 'Login page UI with NextAuth integration',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Protected dashboard',
    //     caption: 'Protected user dashboard showcasing session management',
    //   },
    // ],
    conclusion:
      'Next Auth v5 serves as a comprehensive guide for implementing authentication in modern Next.js applications. It strengthened my understanding of authentication flows, session security, and best practices for user management.',
  },
  {
    id: 'moviez',
    title: 'Moviez',
    description:
      'A movie database application built with React, Redux, and the TMDB API that lets users explore movies and TV shows.',
    image: MovizImg,
    tags: ['React', 'Redux', 'TMDB API', 'SCSS', 'Infinite Scroll'],
    liveUrl: 'https://db-movie-app.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/moviez',
    overview:
      'Moviez is a feature-rich movie database app where users can search, filter, and explore movies and TV shows. Built with React and Redux, it leverages the TMDB API to provide real-time data. The application features a clean design with smooth animations and is fully responsive.',
    technologies: ['React', 'Redux', 'TMDB API', 'SCSS', 'Infinite Scroll'],
    features: [
      'Search and filter movies/TV shows',
      'Detailed pages with movie information',
      'Responsive design with smooth animations',
      'Real-time data fetching from TMDB API',
    ],
    developmentChallenges:
      'Optimizing API calls for efficient data fetching and implementing infinite scrolling were key challenges. Leveraging Redux for state management helped improve performance and scalability.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Movie search and filter UI',
    //     caption: 'Search movies and filter by categories using Redux.',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Detailed movie page',
    //     caption:
    //       'Detailed movie information with ratings, trailers, and cast details.',
    //   },
    // ],
    conclusion:
      'Moviez showcases how React, Redux, and API integration can be combined to build a dynamic movie database. The project strengthened my experience in state management, API optimization, and responsive UI design.',
  },
  {
    id: 'nextjs-starter-template',
    title: 'Next.js Starter Template',
    description:
      'A highly optimized Next.js starter template with Tailwind CSS, TypeScript, ESLint, Prettier, and authentication setup.',
    image: NextStarterImg,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ESLint', 'Prettier'],
    liveUrl: 'https://db-next-starter.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/NextStarter',
    overview:
      'This Next.js starter template provides a ready-to-use boilerplate for modern web applications. It includes authentication, internationalization support, UI components, and best practices for performance and maintainability. Developers can use it as a foundation to quickly build and scale projects.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'ESLint',
      'Prettier',
      'NextAuth',
    ],
    features: [
      'Authentication system with NextAuth',
      'Dark mode support with Tailwind CSS',
      'Pre-configured ESLint & Prettier setup',
      'Responsive and accessible UI components',
      'SEO-friendly structure with meta tag handling',
    ],
    developmentChallenges:
      'Setting up a robust authentication system and ensuring optimal performance were key challenges. Implementing best practices for code quality and maintainability required careful configuration of ESLint and Prettier.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Next.js Starter Template',
    //     caption:
    //       'Next.js Starter Template with authentication setup and dark mode support.',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Authentication system UI',
    //     caption: 'User authentication system with NextAuth and Tailwind CSS.',
    //   },
    // ],
    conclusion:
      'This Next.js Starter Template streamlines development by including all essential features, reducing setup time, and ensuring best practices. Ideal for quickly launching production-ready projects.',
  },
  {
    id: 'metalogic',
    title: 'MetaLogic',
    description:
      'A single-page website designed for MetaLogic, showcasing the company’s services, projects, and contact information.',
    image: MetaLogicImg,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://meta-logic.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/MetaLogic',
    overview:
      'MetaLogic is a single-page website created for a fictional company to showcase its services, projects, and contact information. The website features a clean, modern design and utilizes React, TypeScript, and Tailwind CSS for responsive styling and smooth animations.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    features: [
      'Responsive single-page design',
      'Company information and services overview',
      'Project showcase with image gallery',
      'Contact form for inquiries',
      'Modern UI with smooth animations using GSAP',
    ],
    developmentChallenges:
      'Creating a seamless user experience with smooth animations and responsive design was a key challenge. Implementing a contact form with validation and submission handling required careful attention to detail.',
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Next.js Starter Template',
    //     caption:
    //       'Next.js Starter Template with authentication setup and dark mode support.',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Authentication system UI',
    //     caption: 'User authentication system with NextAuth and Tailwind CSS.',
    //   },
    // ],
    conclusion:
      'MetaLogic is a modern, responsive website that effectively showcases company services and projects while providing an engaging user experience through smooth animations and a user-friendly design.',
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio v2',
    description:
      'The second version of my personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
    image: Portfoliov2Img,
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer-motion',
      'Prisma',
      'MongoDB',
    ],
    liveUrl: 'https://diwashb-v2.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/www-v2',
    overview:
      'Portfolio v2 is the second version of my personal portfolio website, built with Next.js, TypeScript, and Tailwind CSS. It showcases my projects, skills, and contact information with a modern and interactive design. The website includes sections for detailed project showcases, skills with proficiency levels, and a contact form.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Prisma',
      'MongoDB',
    ],
    features: [
      'Project showcase with detailed information and visuals',
      'Skills section with proficiency levels and experience',
      'Interactive animations using Framer Motion for smooth transitions',
      'Contact form for inquiries',
      'Responsive design optimized for all devices',
      'Admin panel for managing site content dynamically',
    ],
    developmentChallenges: `Building Portfolio v2 required integrating dynamic content management with Prisma and MongoDB. Implementing interactive animations and responsive design for various devices were key challenges. The project also involved setting up an admin panel for managing site content.`,
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Portfolio v2 Homepage',
    //     caption:
    //       'Portfolio v2 Homepage with project showcase and skills section.',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Portfolio v2 Project Page',
    //     caption: 'Portfolio v2 Project Page with detailed project information.',
    //   },
    // ],
    conclusion:
      'Portfolio v2 reflects my growth as a developer, demonstrating my ability to design clean, functional, and interactive web experiences using modern technologies like Next.js and Framer Motion. The site provides a complete showcase of my skills, projects, and contact information.',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'The first version of my personal portfolio website built with React, TypeScript, and Tailwind CSS.',
    image: Portfoliov1Img,
    tags: ['React', 'JavaScript', 'CSS', 'Framer-motion'],
    liveUrl: 'https://diwashb-v1.vercel.app/',
    githubUrl: 'https://github.com/diwashbhattarai999/www-v1',
    overview:
      'Portfolio v1 is the initial version of my personal portfolio website, built with React, JavaScript, and CSS. It highlights my projects, skills, and contact information with a simple, interactive design. The website includes a showcase of my projects, skills with proficiency levels, and a contact form.',
    technologies: ['React', 'JavaScript', 'CSS', 'Framer Motion'],
    features: [
      'Project showcase with detailed information and visuals',
      'Skills section with proficiency levels and experience',
      'Interactive animations using Framer Motion for smooth transitions',
      'Contact form for inquiries',
      'Responsive design for all device sizes',
    ],
    developmentChallenges: `Creating Portfolio v1 involved designing a clean and interactive layout that effectively showcases my projects and skills. Implementing smooth animations and responsive design for various devices were key challenges. The project also required setting up a contact form for user inquiries.`,
    // screenshots: [
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Portfolio v1 Homepage',
    //     caption:
    //       'Portfolio v1 Homepage with project showcase and skills section.',
    //   },
    //   {
    //     src: '/placeholder.svg?height=600&width=800', // Replace with actual image path
    //     alt: 'Portfolio v1 Project Page',
    //     caption: 'Portfolio v1 Project Page with detailed project information.',
    //   },
    // ],
    conclusion:
      'Portfolio v1 is a simple yet effective introduction to my work, featuring an easy-to-navigate layout that showcases my projects, skills, and contact information. This version marked the beginning of my journey in building a personal online presence as a developer.',
  },
];
