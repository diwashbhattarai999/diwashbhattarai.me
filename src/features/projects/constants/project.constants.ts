import CoachHqImg from "@/assets/images/projects/coach-hq.png";
import CoachHqAdminImg from "@/assets/images/projects/coach-hq-admin.png";
import EuroToursImg from "@/assets/images/projects/euro-tours.png";
import Finance360Img from "@/assets/images/projects/finance-360.png";
import FoundationImg from "@/assets/images/projects/foundation.jpg";
import GoodBuyImg from "@/assets/images/projects/good-buy.png";
import GovCertifyImg from "@/assets/images/projects/gov-certify.png";
import GymGrowImg from "@/assets/images/projects/gymgrow.png";
import GymGrowGymImg from "@/assets/images/projects/gymgrow-gym.png";
import GymGrowSuperadminImg from "@/assets/images/projects/gymgrow-superadmin.png";
import GymGrowTVImg from "@/assets/images/projects/gymgrow-tv.png";
import LuxeImg from "@/assets/images/projects/luxe.png";
import MovizImg from "@/assets/images/projects/moviez.png";
import PlexbitImg from "@/assets/images/projects/plexbit.png";
import SmartYatraImg from "@/assets/images/projects/smart-yatra-light.png";
import StriideImg from "@/assets/images/projects/striide.png";
import StriideAdminDarkImg from "@/assets/images/projects/striide-admin-dark.png";
import StriideAdminLightImg from "@/assets/images/projects/striide-admin-light.png";
import StriideCoachDarkImg from "@/assets/images/projects/striide-coach-dark.png";
import StriideCoachLightImg from "@/assets/images/projects/striide-coach-light.png";
import StriideSubscriberImg from "@/assets/images/projects/striide-subscriber.png";
import { UPCHAAR_PROJECTS } from "@/features/projects/constants/upchaar-projects.constants";
import type { Project } from "@/features/projects/types/project.types";

export const PROJECTS: Project[] = [
    {
        conclusion:
            "GymGrow is the largest product I shipped at Plex Bit — a full gym operations suite spanning platform onboarding, day-to-day gym management, and wall-ready programming displays.",
        description:
            "A multi-tenant gym management platform spanning superadmin onboarding, gym-owner operations, and a public TV programming display — with memberships, classes, finances, and Stripe Express payouts.",
        developmentChallenges:
            "The hardest parts were modeling multi-tenant gyms with branch-level data, keeping role and permission checks consistent across every screen, wiring Stripe Express so owners could onboard and take payments without mixing accounts, and keeping the TV display readable from across a gym floor while staying in sync with published programming.",
        features: [
            "Superadmin console for creating and managing gym owners",
            "Name-change requests, profile settings, and email templates",
            "Multi-branch gym management with members, staff, and subscriptions",
            "Membership lifecycle including visits, payments, documents, activity, and freeze",
            "Staff roles and permissions per gym",
            "Class scheduling, recurring classes, and calendar views",
            "Class programming shared to a public TV webapp",
            "Finance tools for revenue, expenses, tax, transactions, and refunds",
            "Memberships, leaderboards, and custom email communications",
            "Settings for booking, gym hours, payments, waivers, profile, and training spaces",
            "Stripe Express connection for payouts and transaction management",
            "TV display with date/session selectors and on-screen size scaling",
        ],
        id: "gymgrow",
        image: GymGrowImg,
        liveUrl: "https://gymgrow.ai",
        liveUrls: [
            { label: "Marketing Site", url: "https://gymgrow.ai" },
            { label: "Superadmin", url: "https://uat-sadmin-gymgrow.pbinfosystems.com" },
            { label: "Gym Dashboard", url: "https://uat-admin-gymgrow.pbinfosystems.com" },
            { label: "TV Display", url: "https://uat-gymgrow.pbinfosystems.com" },
        ],
        overview:
            "GymGrow (Grow HQ) is a multi-tenant gym operating system with three connected surfaces. Superadmins onboard gym owners and manage platform settings. Gym owners run branches, members, staff, classes, programming, and finances with role-based permissions. A public TV webapp displays session programming on gym screens. Together they cover the full loop from platform onboarding to floor-ready workouts.",
        poweredBy:
            "Gyms connect a Stripe Express account to collect payments and manage transactions, refunds, and payouts. Programming created in the gym dashboard publishes to the TV display for members.",
        screenshots: [
            {
                alt: "GymGrow superadmin gym owners dashboard",
                caption: "Superadmin console for onboarding and managing gym owners across the platform.",
                src: GymGrowSuperadminImg,
            },
            {
                alt: "GymGrow gym owner dashboard",
                caption:
                    "Gym-owner dashboard with revenue metrics, today's classes, member health, and branch operations.",
                src: GymGrowGymImg,
            },
            {
                alt: "GymGrow TV programming display",
                caption:
                    "Public TV webapp showing warmup, strength, and metcon blocks scaled for gym screens.",
                src: GymGrowTVImg,
            },
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "Stripe", "RBAC"],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "TanStack Query",
            "Stripe Express",
            "Role-based access control",
        ],
        title: "GymGrow",
    },
    {
        conclusion:
            "Striide is a three-app coaching system — operations, creator tools, and consumer access — built so content, payments, and permissions stay in sync.",
        description:
            "Three connected web apps for a female cricket coaching platform — admin operations, coach publishing and monetization, and subscriber auth and payments.",
        developmentChallenges:
            "Splitting one product into three apps meant keeping roles, content approval, and payments aligned. Admin review gates coach uploads, coach monetization depends on Stripe Express, and subscribers only see approved, paid content.",
        features: [
            "Admin dashboard for coaches, content review, playlists, and lesson plans",
            "Paid lesson plans, monetization, subscribers, logs, subscriptions, and vouchers",
            "Ticketing with events and a scanner, plus incident and contact response handling",
            "Admin settings for app versions, FAQs, taxonomy, avatars, badges, and plans",
            "Coach app for uploading content, playlists, insights, and Stripe Express monetization",
            "Coach profile settings including notifications, privacy, connected accounts, agreements, and danger zone",
            "Subscriber authentication, social login, and payments",
        ],
        id: "striide",
        image: StriideImg,
        liveUrl: "https://striide.app/",
        liveUrls: [
            { label: "Main Site", url: "https://striide.app/" },
            { label: "Admin", url: "https://admin-striide.pbinfosystems.com/" },
            { label: "Coach", url: "https://coach-striide.pbinfosystems.com/" },
            { label: "Subscriber", url: "https://subscriber-striide.pbinfosystems.com/" },
        ],
        overview:
            "Striide is a coaching platform for female cricketers at striide.app. I built three connected web apps around that product: an admin console for content, monetization, and operations; a coach app for publishing, insights, and Stripe Express payouts; and a subscriber app for authentication and payments. Together they cover the full loop from content review to paid access.",
        poweredBy:
            "Coaches connect Stripe Express for monetization, while subscribers authenticate and pay through the consumer app. Admin remains the source of truth for plans, vouchers, taxonomy, and content approval.",
        screenshots: [
            {
                alt: "Striide admin dashboard in light mode",
                caption: "Admin dashboard with subscriber, coach, content, and engagement metrics.",
                src: StriideAdminLightImg,
            },
            {
                alt: "Striide admin dashboard in dark mode",
                caption: "Admin console covering content review, commerce, ticketing, and platform health.",
                src: StriideAdminDarkImg,
            },
            {
                alt: "Striide coach dashboard in light mode",
                caption: "Coach dashboard for uploading training content, analytics, and recent activity.",
                src: StriideCoachLightImg,
            },
            {
                alt: "Striide coach dashboard in dark mode",
                caption:
                    "Coach workspace with category uploads, performance stats, and payout notifications.",
                src: StriideCoachDarkImg,
            },
            {
                alt: "Striide subscriber login page",
                caption: "Subscriber authentication with featured coaches, social login, and email sign-in.",
                src: StriideSubscriberImg,
            },
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Stripe"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Stripe Express", "OAuth"],
        title: "Striide",
    },
    {
        conclusion:
            "Coach HQ shows how a coaching product can stay one codebase while still feeling purpose-built for superadmins, coaches, and content creators.",
        description:
            "An AI-led coaching platform with public marketing pages and a permission-driven dashboard for superadmins, coaches, and content creators.",
        developmentChallenges:
            "Every dashboard surface had to stay permission-aware so a missing grant hid the nav item, the button, and the feature — not just the API. That meant a single source of truth for roles across layout, actions, and content workflows like drill review.",
        features: [
            "Marketing site covering home, about, pricing, contact, FAQ, and webinars",
            "Dashboard UI that changes with role and permission — sidebar, buttons, and features",
            "Superadmin CRUD for drills, including approve/reject of creator submissions",
            "Lesson plans, playlists, coaches, content creators, categories, sub-categories, and sport tags",
            "Subscription plans, transactions, subscribers, and newsletter management",
            "Contact messages, FAQs, and app version management",
            "Coach and content creator access to the content library and Stripe subscriptions",
        ],
        id: "coach-hq",
        image: CoachHqImg,
        liveUrl: "https://uat-coachhq.pbinfosystems.com/",
        overview:
            "Coach HQ helps teachers and coaches find drills, lesson plans, and playlists across sports. I built the landing and public pages plus a dashboard where the sidebar, actions, and features all resolve from the signed-in role and permissions. Superadmins manage the content library, users, catalog, subscriptions, and site content. Coaches and content creators work inside the same product with a narrower surface — submitting drills, browsing the library, and handling Stripe subscriptions.",
        poweredBy:
            "Content submitted by creators is reviewed by superadmins before it reaches the library, keeping the catalog expert-led while still scaling contributions.",
        screenshots: [
            {
                alt: "Coach HQ admin overview dashboard",
                caption:
                    "Admin overview with content, coach, and subscription metrics plus drill moderation.",
                src: CoachHqAdminImg,
            },
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Stripe", "RBAC"],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Stripe",
            "Role-based access control",
        ],
        title: "Coach HQ",
    },
    ...UPCHAAR_PROJECTS,
    {
        conclusion:
            "Euro Tours Travel combines a destination-led marketing site with a dashboard so the team can run tours without a separate CMS.",
        description:
            "A tour and travel website with an admin dashboard for managing destinations, packages, and bookings.",
        developmentChallenges:
            "The site needed to feel like a travel brand on the public side while still giving admins a practical way to keep packages, destinations, and inquiries up to date.",
        features: [
            "Marketing site for destinations, services, and tour packages",
            "Hero and package carousels for featured itineraries",
            "Admin dashboard for managing travel content and operations",
            "Contact and inquiry paths for travelers",
        ],
        id: "euro-tours",
        image: EuroToursImg,
        liveUrl: "https://eurotourstravel.com/",
        overview:
            "Euro Tours Travel is a public tour and travel site paired with an admin dashboard. Visitors browse destinations and packages from a visual homepage, while admins manage the catalog and operations behind the scenes.",
        poweredBy:
            "The public site and dashboard share the same product so package content stays consistent from the admin editor to the customer-facing pages.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        title: "Euro Tours Travel",
    },
    {
        conclusion:
            "Finance 360 Degree gives the consultancy a clear public face: what they do, who they serve, and how to start a conversation.",
        description:
            "A marketing site for a Nepal-based finance, accounting, and tax consultancy covering services, social proof, and consultation intake.",
        developmentChallenges:
            "The page had to explain a broad service mix — tax, VAT, MIS, BPO, and education — without turning into a brochure dump. Hierarchy and conversion paths were the main design constraints.",
        features: [
            "Hero and positioning for 360° finance, accounting, and tax services",
            "Service and process sections for tax, accounting systems, and ongoing support",
            "Social proof, locations, and consultation call-to-actions",
            "Academy and content links for financial literacy",
        ],
        id: "finance-360",
        image: Finance360Img,
        liveUrl: "https://finance360degree.com/",
        overview:
            "Finance 360 Degree is the public site for a CA-led consultancy in Nepal. I built the landing experience — positioning, services, social proof, and consultation CTAs — so startups and SMEs can understand the offer and get in touch.",
        poweredBy:
            "The site is the firm’s primary digital presence, connecting visitors to tax, accounting, VAT, BPO, and academy pathways.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        title: "Finance 360 Degree",
    },
    {
        conclusion:
            "Luxe is a campaign-driven beauty storefront where the homepage and dashboard work together to merchandise products and promotions.",
        description:
            "A multi-vendor premium beauty ecommerce experience — landing page plus selected dashboard surfaces for catalogs, deals, and storefront merchandising.",
        developmentChallenges:
            "The landing page had to support several campaign types at once — launches, sales, palettes, and deals — while staying fast and on-brand for a premium beauty store.",
        features: [
            "Campaign-led homepage with hero sliders and exclusive launches",
            "Flash sale, seasonal, and deal modules for merchandising",
            "Multi-vendor beauty catalog presentation",
            "Selected dashboard work for storefront content and campaigns",
        ],
        id: "luxe",
        image: LuxeImg,
        liveUrl: "https://luxe.pbinfosystems.com/",
        overview:
            "Luxe is a multi-vendor ecommerce storefront for premium beauty. I built the landing page and parts of the dashboard, including merchandising-led sections such as exclusive launches, flash sales, seasonal campaigns, and deal modules.",
        poweredBy:
            "The storefront is designed around campaigns and collections so brands can push launches, bundles, and seasonal offers without rebuilding the homepage each time.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        title: "Luxe",
    },
    {
        conclusion:
            "The Plex Bit homepage redesign turns a generic IT landing page into a focused first impression for AI, cloud, and product engineering work.",
        description:
            "Homepage redesign for Plex Bit Infosystems, repositioning the company around AI-native engineering, services, and proof.",
        developmentChallenges:
            "The homepage had to feel like a global AI engineering firm without losing the existing brand. That meant tightening information architecture, rebuilding the hero, and making case studies and proof easier to scan.",
        features: [
            "AI-led hero with services and consultation CTAs",
            "Services, industries, workflow, and technology sections",
            "Featured work, testimonials, blogs, and recognition",
            "Hire-a-developer and newsletter conversion paths",
        ],
        id: "plexbit-website",
        image: PlexbitImg,
        liveUrl: "https://v2.pbinfosystems.com/",
        overview:
            "I redesigned the Plex Bit homepage to match how the company actually sells work today — AI-powered delivery, services, industries, case studies, and social proof. The previous site was a generic IT brochure; the new homepage is a productized engineering narrative with clearer CTAs.",
        poweredBy:
            "The redesign sits on the v2 site while the company still operates from pbinfosystems.com, so the new homepage had to stand on its own as a complete first impression.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        title: "Plex Bit Website",
    },
    {
        conclusion:
            "Foundation gives the team one searchable place for Git, GitHub, Node.js, frontend, and backend notes instead of scattered files.",
        description:
            "An internal knowledge base for documenting and sharing Git, GitHub, Node.js, frontend, backend, and related full stack topics.",
        developmentChallenges:
            "The work was turning scattered team notes into one structured docs site — searchable, themed, and organized around JavaScript, TypeScript, tooling, and frameworks rather than a pile of markdown files.",
        features: [
            "Keyboard search (⌘K) across the docs",
            "Light and dark theme",
            "Structured docs for JavaScript, TypeScript, formatting, toolchains, and frameworks",
            "Coverage of Git, GitHub, Node.js, frontend, and backend topics",
            "MDX-sourced documentation linked from GitHub",
        ],
        githubUrl: "https://github.com/diwashbhattarai999/foundation-docs",
        id: "foundation",
        image: FoundationImg,
        liveUrl: "https://foundation.diwashb.com.np/",
        overview:
            "Foundation is a curated internal source of truth for modern full stack development. The public site at foundation.diwashb.com.np is a documentation hub — JavaScript, TypeScript, tooling, and frontend and backend frameworks — with a Get Started path into the docs.",
        poweredBy:
            "The site is a React Router app with Fumadocs for the docs UI, MDX for content, TypeScript, Tailwind CSS, and Vite. Docs live at /docs.",
        tags: ["React Router", "Fumadocs", "TypeScript", "Tailwind CSS", "Vite", "MDX"],
        technologies: ["React", "React Router", "Fumadocs", "TypeScript", "Tailwind CSS", "Vite", "MDX"],
        title: "Foundation",
    },
    {
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
            "Building Smart Yatra was a rewarding experience that enhanced my understanding of API integrations, real-time data handling, and responsive design. The project also helped me tackle challenges like cross-browser compatibility and optimizing map rendering for large datasets.",
        description:
            "A digital public transportation system utilizing QR codes for fare collection and route optimization in Kathmandu Valley.",
        developmentChallenges:
            "Building Smart Yatra required integrating multiple APIs and ensuring real-time updates for route optimization and fare calculation. Handling large datasets for route mapping and ensuring a seamless user experience across devices were key challenges.",
        features: [
            "QR code-based bus boarding and fare payment",
            "Automated distance-based fare calculation using Haversine formula",
            "Bus route mapping with OpenStreetMap and OSRM API",
            "User authentication and profile management",
            "Admin panel for route and fare management",
            "Secure database management with Firebase and MySQL",
            "Custom map integration with Leaflet.js",
            "Mobile-friendly and responsive UI",
        ],
        githubUrl: "https://github.com/SmartYatra/smart-yatra-frontend",
        id: "smart-yatra",
        image: SmartYatraImg,
        overview:
            "Smart Yatra is a digital public transport management system that enhances commuting efficiency in Kathmandu Valley. It enables passengers to board and exit buses using QR codes, calculates fares based on travel distance, and optimizes routes using OpenStreetMap and OSRM API.",
        poweredBy:
            "Powered by OpenStreetMap and OSRM API, Smart Yatra supports real-time route optimization and distance-based fare calculation, providing a seamless experience for both passengers and bus operators.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Laravel",
            "MySQL",
            "OpenStreetMap",
            "Leaflet",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Laravel",
            "MySQL",
            "OpenStreetMap",
            "Leaflet.js",
        ],
        title: "Smart Yatra",
    },
    {
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
            "Good-Buy is a comprehensive e-commerce platform that demonstrates my ability to build secure, user-friendly applications. The project deepened my knowledge of payment gateway integrations, user authentication, and responsive design, providing valuable insights into e-commerce development.",
        description:
            "An e-commerce platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB, offering seamless integration with Khalti payment and cash on delivery options.",
        developmentChallenges:
            "Building an e-commerce platform like Good-Buy required integrating payment gateways, ensuring secure data handling, and optimizing the user experience for various devices. Implementing features like user authentication and product browsing were key challenges.",
        features: [
            "User authentication and authorization",
            "Product browsing and searching",
            "Secure payment processing with Khalti",
            "Cash on delivery option",
            "Responsive design for various devices",
        ],
        githubUrl: "https://github.com/diwashbhattarai999/GoodBuy",
        id: "good-buy",
        image: GoodBuyImg,
        overview:
            "Good-Buy is a Next.js-based e-commerce platform that provides a streamlined shopping experience. It features product browsing, user authentication, payment integration with Khalti, and support for cash on delivery. The application is built with TypeScript, styled using Tailwind CSS, and utilizes Prisma as the ORM with MongoDB as the database.",
        poweredBy:
            "Powered by Khalti API, Good-Buy supports secure payment processing and cash on delivery options, ensuring a seamless shopping experience for users. The platform leverages Prisma and MongoDB for efficient data management and storage.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "Khalti API"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "Khalti API"],
        title: "Good-Buy",
    },
    {
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
            "Gov Certify streamlines the bureaucratic process of certificate issuance, making it more accessible to citizens while ensuring security and efficiency. The project deepened my understanding of authentication, database optimization, and user experience in e-governance applications.",
        description:
            "An online certificate registration platform developed for e-governance projects, streamlining the process of certificate issuance and registration for citizens.",
        developmentChallenges:
            "Ensuring data security and efficient processing was a key challenge. Implementing authentication, managing different user roles, and optimizing database queries required careful design choices.",
        features: [
            "Online application for certificates",
            "User authentication and profile management",
            "Admin dashboard for managing applications",
            "Email notifications for application status",
            "Responsive design for accessibility",
        ],
        githubUrl: "https://github.com/diwashbhattarai999/Gov-Certify",
        id: "gov-certify",
        image: GovCertifyImg,
        overview:
            "Gov Certify is an e-governance platform designed to simplify the process of certificate issuance and registration. Built with Next.js and TypeScript, it offers a user-friendly interface for citizens to apply for and receive various certificates. The platform ensures secure data handling and efficient processing, leveraging Prisma and MongoDB for data management.",
        poweredBy:
            "Powered by Prisma and MongoDB, Gov Certify ensures secure data storage and efficient processing of certificate applications. The platform offers a seamless user experience for citizens applying for certificates online.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
        title: "Gov Certify",
    },
    {
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
            "Moviez showcases how React, Redux, and API integration can be combined to build a dynamic movie database. The project strengthened my experience in state management, API optimization, and responsive UI design.",
        description:
            "A movie database application built with React, Redux, and the TMDB API that lets users explore movies and TV shows.",
        developmentChallenges:
            "Optimizing API calls for efficient data fetching and implementing infinite scrolling were key challenges. Leveraging Redux for state management helped improve performance and scalability.",
        features: [
            "Search and filter movies/TV shows",
            "Detailed pages with movie information",
            "Responsive design with smooth animations",
            "Real-time data fetching from TMDB API",
        ],
        githubUrl: "https://github.com/diwashbhattarai999/moviez",
        id: "moviez",
        image: MovizImg,
        overview:
            "Moviez is a feature-rich movie database app where users can search, filter, and explore movies and TV shows. Built with React and Redux, it leverages the TMDB API to provide real-time data. The application features a clean design with smooth animations and is fully responsive.",
        tags: ["React", "Redux", "TMDB API", "SCSS", "Infinite Scroll"],
        technologies: ["React", "Redux", "TMDB API", "SCSS", "Infinite Scroll"],
        title: "Moviez",
    },
];

/**
 * Finds a portfolio project by its stable id.
 *
 * @param projectId - Project id used in routes and experience links.
 * @returns Matching project or undefined.
 */
export const getProjectById = (projectId: string): Project | undefined =>
    PROJECTS.find((project) => project.id === projectId);
