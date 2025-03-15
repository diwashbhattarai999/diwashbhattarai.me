import GoodBuyImg from '@/assets/projects/good-buy.png';
import GovCertifyImg from '@/assets/projects/gov-certify.png';
import MetaLogicImg from '@/assets/projects/metalogic.png';
import MovizImg from '@/assets/projects/moviez.png';
import NextAuthV5Img from '@/assets/projects/next-auth-v5.png';
import SmartYatraImg from '@/assets/projects/smart-yatra-light.png';

export const PROJECTS = [
  {
    id: 'smart-yatra',
    title: 'Smart Yatra',
    description:
      'A digital public transportation system utilizing QR codes for fare collection and route optimization in Kathmandu Valley.',
    image: SmartYatraImg,
    github: 'https://github.com/SmartYatra/smart-yatra-frontend',
    demo: 'https://smart-yatra-frontend.vercel.app/',
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
    longDescription:
      'Smart Yatra is a digital public transport management system that enhances commuting efficiency in Kathmandu Valley. It enables passengers to board and exit buses using QR codes, calculates fares based on travel distance, and optimizes routes using OpenStreetMap and OSRM API. The system features real-time data updates, automated fare processing, and a seamless experience for both passengers and bus operators.',
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
  },
  {
    id: 'good-buy',
    title: 'Good-Buy',
    description:
      'An e-commerce platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB, offering seamless integration with Khalti payment and cash on delivery options.',
    image: GoodBuyImg,
    github: 'https://github.com/diwashbhattarai999/GoodBuy',
    demo: 'https://good-buy.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MongoDB'],
    longDescription:
      'Good-Buy is a Next.js-based e-commerce platform that provides a streamlined shopping experience. It features product browsing, user authentication, payment integration with Khalti, and support for cash on delivery. The application is built with TypeScript, styled using Tailwind CSS, and utilizes Prisma as the ORM with MongoDB as the database.',
    features: [
      'User authentication and authorization',
      'Product browsing and searching',
      'Secure payment processing with Khalti',
      'Cash on delivery option',
      'Responsive design for various devices',
    ],
  },
  {
    id: 'gov-certify',
    title: 'Gov Certify',
    description:
      'An online certificate registration platform developed for e-governance projects, streamlining the process of certificate issuance and registration for citizens.',
    image: GovCertifyImg,
    github: 'https://github.com/diwashbhattarai999/Gov-Certify',
    demo: 'https://gov-certify.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MongoDB'],
    longDescription:
      'Gov Certify is an e-governance platform designed to simplify the process of certificate issuance and registration. Built with Next.js and TypeScript, it offers a user-friendly interface for citizens to apply for and receive various certificates. The platform ensures secure data handling and efficient processing, leveraging Prisma and MongoDB for data management.',
    features: [
      'Online application for certificates',
      'User authentication and profile management',
      'Admin dashboard for managing applications',
      'Email notifications for application status',
      'Responsive design for accessibility',
    ],
  },
  {
    id: 'next-auth-v5',
    title: 'Next Auth v5',
    description:
      'A project showcasing the implementation of authentication and various key features using Next.js 14, NextAuth v5, Tailwind CSS, Shadcn UI, Prisma, and MongoDB.',
    image: NextAuthV5Img,
    github: 'https://github.com/diwashbhattarai999/Next-Auth-v5',
    demo: 'https://db-next-auth-v5.vercel.app/',
    tags: [
      'Next.js',
      'NextAuth',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
    ],
    longDescription:
      'Next Auth v5 demonstrates the integration of authentication mechanisms in a Next.js application using NextAuth v5. The project includes features like user sign-up/sign-in, protected routes, and session management. It utilizes Tailwind CSS for styling, Shadcn UI for components, Prisma for ORM, and MongoDB as the database.',
    features: [
      'User authentication with NextAuth v5',
      'Protected routes and API endpoints',
      'Session management and security',
      'Integration with Prisma and MongoDB',
      'Responsive and accessible UI components',
    ],
  },
  {
    id: 'movix',
    title: 'Movix',
    description:
      'A movie database application built with React, Redux, and the TMDB API that lets users explore movies and TV shows.',
    image: MovizImg,
    github: 'https://github.com/diwashbhattarai999/movix',
    demo: 'https://db-movie-app.vercel.app/',
    tags: ['React', 'Redux', 'TMDB API', 'SCSS'],
    longDescription:
      'Movix is a feature-rich movie database app where users can search, filter, and explore movies and TV shows. Built with React and Redux, it leverages the TMDB API to provide real-time data. The application features a clean design with smooth animations and is fully responsive.',
    features: [
      'Search and filter movies/TV shows',
      'Detailed pages with movie information',
      'Responsive design with smooth animations',
      'Real-time data fetching from TMDB API',
    ],
  },
  {
    id: 'nextjs-starter-template',
    title: 'Next.js Starter Template',
    description:
      'A highly optimized Next.js starter template with Tailwind CSS, TypeScript, ESLint, Prettier, and authentication setup.',
    image: '/placeholder.svg?height=200&width=400',
    github: 'https://github.com/diwashbhattarai999/Next.js-Starter-Template',
    demo: 'https://nextjs-starter-template.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ESLint', 'Prettier'],
    longDescription:
      'This Next.js starter template provides a ready-to-use boilerplate for modern web applications. It includes authentication, internationalization support, UI components, and best practices for performance and maintainability. Developers can use it as a foundation to quickly build and scale projects.',
    features: [
      'Authentication system with NextAuth',
      'Dark mode support with Tailwind CSS',
      'Pre-configured ESLint & Prettier setup',
      'Responsive and accessible UI components',
      'SEO-friendly structure with meta tag handling',
    ],
  },
  {
    id: 'metalogic',
    title: 'MetaLogic',
    description:
      'A single-page website designed for MetaLogic, showcasing the company’s services, projects, and contact information.',
    image: MetaLogicImg,
    github: 'https://github.com/diwashbhattarai999/MetaLogic',
    demo: 'https://meta-logic.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    longDescription:
      'MetaLogic is a single-page website created for a fictional company to demonstrate its services and projects. The site features a clean and modern design with sections for company information, services, projects, and contact details. It is built using React, TypeScript, and Tailwind CSS for styling.',
    features: [
      'Responsive single-page design',
      'Company information and services overview',
      'Project showcase with image gallery',
      'Contact form for inquiries',
      'Modern UI with smooth animations',
    ],
  },
];
