export type ProjectItem = { name: string; link?: string };

export interface ExperienceDetail {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  projects: ProjectItem[];
  website: string;
  current: boolean;
  logo: string;
}

export const EXPERIENCE_DETAILS: ExperienceDetail[] = [
  {
    title: 'Full Stack Software Developer',
    company: 'Upachaar Nepal',
    duration: 'Jun 2024 - Present',
    description:
      'Built and scaled large healthcare platforms serving patients, doctors, clinics, pharmacies, diagnostics, and admins using React, TypeScript, Tailwind CSS, and modern frontend architecture. Designed and developed RESTful APIs and distributed microservices using Node.js, Express, NestJS, MongoDB, and PostgreSQL. Implemented event-driven microservice communication using Apache Kafka and Redis. Published reusable UI component libraries to npm and GitHub Packages. Mentored interns on React, Git workflows, clean architecture, and system design. Implemented unit and integration tests to ensure performance, reliability, and maintainability of backend services.',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Redux Toolkit',
      'React Query',
      'Node.js',
      'NestJS',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Apache Kafka',
      'Redis',
      'Microservices',
      'Docker',
      'PM2',
      'GCP',
      'WebRTC',
      'Khalti Payment Gateway',
    ],
    projects: [
      { name: 'Patient Portal', link: 'https://upchaarnepal.com' },
      { name: 'Doctor Portal', link: 'https://doctor.upchaarnepal.com' },
      { name: 'Clinic Portal', link: 'https://clinic.upchaarnepal.com' },
      { name: 'Pharmacy Portal', link: 'https://pharmacy.upchaarnepal.com' },
      { name: 'Diagnostic Portal', link: 'https://diagnostic.upchaarnepal.com' },
      { name: 'Admin Panel', },
      { name: 'Logger System' },
    ],
    website: 'https://upchaarnepal.com',
    current: true,
    logo: '/company/upchaar-nepal.png',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Fact Digi',
    duration: 'Jan 2024 - Jun 2024',
    description:
      'Designed and developed responsive and SEO-optimized frontends for platforms like AI Color Analysis, Themjo Traders, Service Provider App, and the Company Website using React, Next.js, TypeScript, and Tailwind CSS. Integrated REST APIs with error boundaries and suspense. Implemented CI/CD pipelines using GitHub Actions and deployed apps using Docker and Nginx to AWS EC2.',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Shadcn UI',
      'GitHub Actions',
      'Docker',
      'Nginx',
      'AWS EC2',
    ],
    projects: [
      { name: 'Service Provider Application' },
      { name: 'Company Website', link: 'https://factdigi.com' },
      { name: 'Themjon Traders', link: "http://13.233.7.146"},
      { name: 'Korean Color Analysis' },
    ],
    website: 'https://factdigi.com',
    current: false,
    logo: '/company/fact-digi.png',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'KSW Techzone',
    duration: 'Dec 2023 - Feb 2024',
    description:
      'Contributed to the frontend development of e-commerce platforms, booking applications, and portfolio websites. Enhanced existing design systems and applications to ensure a consistent user experience across all platforms. Collaborated with the team to implement frontend functionalities based on project requirements. Worked on improving UI/UX aspects and applied responsive design principles effectively.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    projects: [
      { name: 'E-commerce Platform' },
      { name: 'Booking Application' },
      { name: 'Portfolio Website', link: 'https://kswtechzone.com.np/' },
    ],
    website: 'https://kswtechzone.com.np/',
    current: false,
    logo: '/company/ksw.png',
  },
];
