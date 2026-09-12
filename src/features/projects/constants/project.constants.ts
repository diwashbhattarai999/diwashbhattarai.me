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
            "GymGrow is the largest product I shipped at Plex Bit — three connected apps covering platform administration, branch-level gym operations, and wall-ready programming displays for the gym floor.",
        description:
            "A gym operations suite with three apps: a superadmin platform for onboarding gym owners, a Grow HQ gym-owner dashboard for branch-wise operations, and a TV programming display members see on gym screens.",
        developmentChallenges:
            "The hardest parts were scoping gym owners by how many branches they can run, keeping the entire Grow HQ dashboard branch-aware without mixing data across locations, wiring Stripe Express so each gym can take payments and open its Express dashboard from Grow HQ, modeling highly customizable memberships with freezes and cancellations, and keeping the TV display synced to published programming while staying readable from across a gym floor.",
        features: [
            "Superadmin: add gym owners and assign how many gym branches each owner can manage",
            "Superadmin: review, verify, and approve gym name-change requests",
            "Superadmin: broadcast communications to everyone on the platform",
            "Superadmin: customize email templates for welcome, password setup, and other system emails",
            "Gym owner: add multiple gym branches and run the full dashboard branch by branch",
            "Gym owner: manage training spaces and set up gym branch profiles",
            "Gym owner: control memberships and waivers shown to users before they sign up",
            "Gym owner: connect Stripe Express and open the Stripe Express dashboard from Grow HQ",
            "Gym owner: gym time settings — opening hours, timezones, special hours, reduced hours, and closings",
            "Gym owner: booking settings — booking window, cancellation rules, no-show policy, capacity, and waitlist",
            "Gym owner: membership freezes plus reusable class types for faster class creation",
            "Gym owner: full calendar views with one-off and recurring classes, branch-wise",
            "Gym owner: day-by-day programming management and reusable programming libraries",
            "Gym owner: memberships — recurring, one-off, and free trials with freezes, cancellations, and highly customizable plans",
            "Gym owner: finance dashboard — revenue, members, tax, expenses, transactions, and refunds",
            "Gym owner: RBAC staff management with role-controlled dashboards",
            "Gym owner: member management — branch assignment, subscriptions, visits, activity, and legal documents",
            "TV display: enter a gym ID from the branch profile to show today's programming on big screens",
            "TV display: date and class filters sized for gym-floor viewing",
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
            "GymGrow (Grow HQ) is a gym operations product built as three connected apps. The superadmin platform onboards gym owners, caps how many branches each owner can manage, reviews gym name-change requests, sends broadcast messages, and customizes system email templates. The gym-owner platform is where day-to-day work happens: owners add multiple branches and use the whole dashboard branch by branch — training spaces, profiles, memberships and waivers, Stripe Express, hours and booking rules, class types, calendars, programming libraries, finances, RBAC staff, and member lifecycle tracking. The TV programming portal is the floor-facing surface: a branch copies its gym ID, opens the TV site on a screen, enters that ID, and gets today's programming with date and class filters sized for big displays.",
        poweredBy:
            "Gym owners connect Stripe Express from Grow HQ to collect payments and jump into their Stripe Express dashboard for transactions, refunds, and payouts. Programming published in the gym dashboard is what the TV site shows after a branch enters its gym ID.",
        screenshots: [
            {
                alt: "GymGrow superadmin gym owners dashboard",
                caption:
                    "Superadmin console for gym owners, branch limits, name-change review, broadcasts, and email templates.",
                src: GymGrowSuperadminImg,
            },
            {
                alt: "GymGrow gym owner dashboard",
                caption:
                    "Grow HQ gym-owner dashboard — branch-wise operations, classes, members, and finance overview.",
                src: GymGrowGymImg,
            },
            {
                alt: "GymGrow TV programming display",
                caption:
                    "TV programming portal unlocked by gym ID, with date and class filters for gym-floor screens.",
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
            "Striide is a three-app coaching system for female cricket — admin operations, coach publishing and monetization, and subscriber access — with shared content, in-app notifications, and a share preview that drives people into the app.",
        description:
            "Three connected web apps for a female cricket coaching platform: an admin portal for KYC, content, monetization, and events; a coach app for publishing and Stripe Express payouts; and a subscriber app for login, subscriptions, and mobile WebView access.",
        developmentChallenges:
            "Keeping three apps aligned meant admin KYC and content approval had to gate what coaches publish and what subscribers see. Coach monetization depends on Stripe Express, payout scoring, and withdrawal requests that admin can calculate, block, or unblock. Lesson plans can be free or paid with sales and conversion tracking. Shared content and playlist links only show a preview on the web so full viewing requires the app, while the mobile app reuses the subscriber experience in a WebView.",
        features: [
            "Admin: coach management with full KYC approval flow and in-app notifications to coaches",
            "Admin: content management like Coach HQ — video and YouTube, no PDFs — with review before subscribers see it",
            "Admin: lesson plans like Coach HQ, with free or paid plans plus sales and conversion tracking",
            "Admin: playlist management like Coach HQ",
            "Admin monetization: calculate coach payouts, block/unblock coaches, update coach scores, metric breakdowns, payouts, and withdrawals",
            "Admin: manage subscribers — in-app notifications, email, and delete",
            "Admin: view active subscriptions and logs, with delete",
            "Admin: voucher management for plans with monthly and yearly cycles",
            "Admin ticketing: event management and scanners for organizers to scan audience entries",
            "Admin: incident reports and contact management",
            "Admin users: full role and permission management",
            "Admin settings: app versions, FAQs, taxonomy, avatars, badges, and subscription plans",
            "Coach: upload content for admin approval before subscribers see it",
            "Coach: playlists, lesson plans, practice reviews submitted by users, and content performance insights",
            "Coach monetization: connect Stripe Express, track earnings, and request withdrawals",
            "Coach: tags guide, connect multiple accounts, FAQ, contact, and incident reporting",
            "Subscriber: login, pay for subscription; mobile app uses the same experience in a WebView",
            "In-app notifications across admin, coach, and subscriber surfaces",
            "Share web app: preview of shared content or playlists — download the app to view full",
            "Striide Shop currently under development",
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
            "Striide is a female cricket coaching platform at striide.app, built as three connected web apps plus a share preview surface. The admin portal runs coach KYC approval with in-app notifications, content review (video and YouTube — no PDFs), free or paid lesson plans with sales and conversion tracking, playlists, coach monetization and payouts, subscribers, active subscriptions and logs, monthly/yearly plan vouchers, event ticketing with entry scanners, incident and contact handling, admin roles and permissions, and platform settings for app versions, FAQs, taxonomy, avatars, badges, and plans. The coach app is where creators upload content for admin approval, build playlists and lesson plans, review user practice submissions, read content performance insights, connect Stripe Express for monetization and withdrawals, manage tags and connected accounts, and reach FAQ, contact, and incident flows. Subscribers log in and pay for access; the mobile app embeds that experience in a WebView. Notifications run across all surfaces. Shared content or playlist links open a web preview that prompts downloading the app for the full view. Striide Shop is under development.",
        poweredBy:
            "Coach uploads stay gated behind admin approval before subscribers see them. Coaches connect Stripe Express to earn and request withdrawals while admin calculates payouts, updates scores, and can block or unblock coaches. Subscribers pay for plans; vouchers cover monthly and yearly cycles. Shared links only preview content or playlists on the web so full viewing stays in the app.",
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
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Stripe", "RBAC"],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Stripe Express",
            "OAuth",
            "Role-based access control",
            "In-app notifications",
            "Mobile WebView",
        ],
        title: "Striide",
    },
    {
        conclusion:
            "Coach HQ is a sports coaching product where one permission-aware dashboard serves superadmins, coaches, content creators, and presenters — from streaming-ready drills and AI-assisted lesson plans through webinars, subscriptions, and invoice billing.",
        description:
            "A role-based coaching platform with fine-grained permissions for admin, coach, content creator, and presenter — covering expert drills with HLS streaming, AI-assisted lesson plans and playlists, webinars, subscriptions, vouchers, and invoice billing.",
        developmentChallenges:
            "Every sidebar item, button, and feature had to resolve from roles and fine-grained permissions, not just the API. Streaming uploads needed m3u8 conversion with multi-quality, multi-audio, and multi-caption support alongside PDF and YouTube sources. AI had to fill drill forms and help build lesson plans and playlists for admins only, while coaches still got full manual authoring. Subscriptions also had to support Stripe card checkout and pay-by-invoice with a 30-day unpaid revoke path that admins can mark paid.",
        features: [
            "Role-based dashboard with fine-grained permissions for admin, coach, content creator, and presenter — including sidebar items controlled by assigned permissions",
            "Drill library: upload expert-led sports content (cricket, hockey, and more) as video, PDF, or YouTube",
            "Streaming-ready video conversion to m3u8 with multi-quality, multi-audio, and multi-caption support",
            "Thumbnail picker from frames exported from the uploaded video",
            "AI drill analysis that fills title, description, category, tags, and related form fields after upload",
            "Assign expert content creators per drill; mark content premium or free; keep private or publish to the community library",
            "Content creators manage their own drills with the same upload and publishing tools",
            "Lesson plans: organize weeks and days, place content per day, share plans with organization members",
            "Create lesson plans manually (all users) or interact with AI (admin only); admin weekly quizzes and AI-generated final quizzes",
            "Playlists: organize content manually or with AI, then play with autoplay on/off",
            "Webinars: schedule for Coach HQ members (free) or non-members (paid), AI-enhance titles and descriptions",
            "Create presenters, assign them to webinars, share via email and social, cancel, and upload recordings sent to attendees",
            "Member and non-member webinar registration with the join link delivered by email",
            "Admin management for coaches, content creators, categories, sub-categories, and sport tags",
            "Subscription plans coaches can purchase; voucher management for admin discounts coaches can redeem",
            "Admin transaction and subscriber history; coaches see their own transactions",
            "Admin newsletters with email sending; contact messages and plan enquiry inbox",
            "Roles and permissions CRUD with permission assignment and sidebar item management",
            "FAQ management and Android/iOS app version management for admin",
            "API usage dashboard for external services such as OpenAI",
            "Invoices for admin and my-invoices for coaches; coaches pay by Stripe card or pay by invoice",
            "Pay-by-invoice emails the invoice, revokes access if unpaid after 30 days, and lets admin mark invoices paid",
            "Shared content library for coaches and content creators",
        ],
        id: "coach-hq",
        image: CoachHqImg,
        liveUrl: "https://uat-coachhq.pbinfosystems.com/",
        overview:
            "Coach HQ is a sports coaching platform built around a single dashboard whose UI — sidebar, actions, and features — resolves from role-based access plus fine-grained permissions for admin, coach, content creator, and presenter. Superadmins run the catalog and operations layer: expert drills (video, PDF, or YouTube) that convert to streaming-ready m3u8 with multi-quality, multi-audio, and multi-caption support; thumbnail picking from video frames; AI analysis that drafts the drill form; premium/free and private/community publishing; lesson plans by week and day with optional AI authoring for admins; playlists; member/non-member webinars with presenters, sharing, cancellation, and recording delivery; coach and creator management; taxonomy; subscription plans and vouchers; transactions and subscribers; newsletters; contact and plan enquiries; roles, permissions, and sidebar configuration; FAQs; app versions; OpenAI API usage; and invoices. Coaches and content creators work inside the same product on their drills, the content library, playlists, manual lesson plans, and Stripe card or pay-by-invoice subscriptions.",
        poweredBy:
            "Video drills convert to HLS (m3u8) for multi-quality playback with multi-audio and multi-caption tracks. AI assists admins with drill form fill, lesson plans, playlists, webinar copy, and final quizzes. Coaches subscribe with Stripe card payments or pay-by-invoice — unpaid invoices revoke access after 30 days unless an admin marks them paid.",
        screenshots: [
            {
                alt: "Coach HQ admin overview dashboard",
                caption:
                    "Permission-aware admin overview covering drills, coaches, subscriptions, and content operations.",
                src: CoachHqAdminImg,
            },
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Stripe", "RBAC", "AI"],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Stripe",
            "HLS / m3u8 streaming",
            "OpenAI",
            "Role-based access control",
            "Fine-grained permissions",
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
