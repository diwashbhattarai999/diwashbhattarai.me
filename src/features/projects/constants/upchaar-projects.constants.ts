import UpchaarAdminImg from "@/assets/images/projects/upchaar-admin.png";
import UpchaarClinicImg from "@/assets/images/projects/upchaar-clinic.png";
import UpchaarDiagnosticImg from "@/assets/images/projects/upchaar-diagnostic.png";
import UpchaarDoctorImg from "@/assets/images/projects/upchaar-doctor.png";
import UpchaarLoggerImg from "@/assets/images/projects/upchaar-logger.png";
import UpchaarPatientImg from "@/assets/images/projects/upchaar-patient.png";
import UpchaarPharmacyImg from "@/assets/images/projects/upchaar-pharmacy.png";
import type { Project } from "@/features/projects/types/project.types";

/**
 * UpchaarNepal healthcare platform surfaces built at Upachaar Nepal.
 */
export const UPCHAAR_PROJECTS: Project[] = [
    {
        conclusion:
            "The Patient Portal is the entry point for care on UpchaarNepal — discovery, booking, and ongoing health management in a single product.",
        description:
            "Patient-facing healthcare app for finding doctors, booking appointments, managing prescriptions, lab tests, and family health activity across Nepal.",
        developmentChallenges:
            "The hard parts were keeping search, booking, and medical records consistent across multiple backend services, handling payment flows safely, and making the patient dashboard useful without overwhelming first-time users.",
        features: [
            "Doctor search and filtered discovery by specialty and availability",
            "Appointment booking for clinic and online consultations",
            "Patient dashboard with appointments, lab tests, and medicine orders",
            "Prescriptions, medications, and upcoming consultation cards",
            "Favourites, family profiles, messages, and payments",
            "Health packages and recent activity across the care journey",
        ],
        id: "upchaar-patient-portal",
        image: UpchaarPatientImg,
        liveUrl: "https://upchaarnepal.com",
        overview:
            "The Patient Portal is the consumer surface of UpchaarNepal. Patients search for verified doctors, book clinic or video consultations, track appointments, order medicines, view prescriptions, and follow lab results from one account. The dashboard also surfaces medications, upcoming consultations, favourites, family members, messages, and payments so day-to-day care stays in one place.",
        poweredBy:
            "Doctor discovery and booking connect into the wider UpchaarNepal network of doctors, clinics, pharmacies, and diagnostics, with Khalti available for payments where checkout is required.",
        screenshots: [
            {
                alt: "UpchaarNepal patient dashboard",
                caption:
                    "Patient dashboard with top doctors, health packages, medications, and upcoming consultations.",
                src: UpchaarPatientImg,
            },
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "React Query", "Redux Toolkit"],
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "React Query",
            "Redux Toolkit",
            "Khalti Payment Gateway",
        ],
        title: "UpchaarNepal Patient Portal",
    },
    {
        conclusion:
            "The Doctor Portal is the clinical operations hub of UpchaarNepal — from request triage to consulting and follow-up in one dashboard.",
        description:
            "Doctor dashboard for appointments, patients, schedule timings, clinic and video consulting, payments, and day-to-day practice workflows.",
        developmentChallenges:
            "Unifying clinic and video consulting in one UI, keeping request states accurate under concurrent bookings, and designing permission-aware navigation for doctors with different practice setups were the main challenges.",
        features: [
            "Overview metrics for appointments, patients, clinic consulting, and video consulting",
            "Appointment request queue with confirm and decline actions",
            "Today’s appointments list with ongoing and upcoming visits",
            "Patient stats, gender breakdown, and recent patients table",
            "Schedule timings, payments, messaging, and blog management",
            "Calendar week view for planning the practice schedule",
        ],
        id: "upchaar-doctor-portal",
        image: UpchaarDoctorImg,
        liveUrl: "https://doctor.upchaarnepal.com",
        overview:
            "The Doctor Portal gives clinicians an operations console for UpchaarNepal. Doctors review appointment requests, confirm or decline bookings, manage patients, set schedule timings, track clinic and video consulting volume, and handle payments and messaging. Overview widgets cover today’s appointments, patient mix, and calendar planning so the practice can run from one workspace.",
        poweredBy:
            "Appointment requests and patient records sync with the patient, clinic, and admin surfaces, while video consulting builds on WebRTC for remote visits.",
        screenshots: [
            {
                alt: "UpchaarNepal doctor overview dashboard",
                caption:
                    "Doctor overview with appointment requests, patient insights, today’s schedule, and calendar.",
                src: UpchaarDoctorImg,
            },
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "React Query", "WebRTC"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Query", "WebRTC", "Node.js"],
        title: "UpchaarNepal Doctor Portal",
    },
    {
        conclusion:
            "The Clinic Portal brings physical clinics onto UpchaarNepal with onboarding, appointment operations, and a clear public story for healthcare providers.",
        description:
            "Clinic onboarding and management portal for digitizing doctors, patients, appointments, and services across Nepal’s healthcare system.",
        developmentChallenges:
            "Balancing a conversion-focused marketing site with a serious operations product, and modeling clinic-level staff and appointment data that still plugs into platform-wide patient discovery, required careful product and API boundaries.",
        features: [
            "Marketing site covering features, how it works, pricing, FAQ, and contact",
            "Clinic registration and get-started onboarding",
            "Appointment management with patient and doctor context",
            "Tools aimed at reducing admin effort and improving patient satisfaction",
            "Network visibility for clinics joining the UpchaarNepal ecosystem",
        ],
        id: "upchaar-clinic-portal",
        image: UpchaarClinicImg,
        liveUrl: "https://clinic.upchaarnepal.com",
        overview:
            "The Clinic Portal helps clinics across Nepal manage doctors, patients, appointments, and services in one place. The public marketing site explains features, pricing, and onboarding, while registered clinics move into operational workflows for appointment management and day-to-day administration. It is positioned as a digital layer built specifically for Nepal’s healthcare system.",
        poweredBy:
            "Clinic accounts connect into the shared UpchaarNepal network so patients can discover providers and book against clinic availability managed in the portal.",
        screenshots: [
            {
                alt: "UpchaarNepal Clinic Portal landing page",
                caption:
                    "Clinic Portal landing with digitize-your-clinic messaging and appointment management preview.",
                src: UpchaarClinicImg,
            },
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "NestJS"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL"],
        title: "UpchaarNepal Clinic Portal",
    },
    {
        conclusion:
            "The Pharmacy Portal extends UpchaarNepal from clinical care into pharmacy operations and patient reach.",
        description:
            "Pharmacy management system for inventory, prescriptions, billing, analytics, and online visibility for Nepali pharmacies.",
        developmentChallenges:
            "Pharmacy workflows need accurate inventory and prescription states while still connecting to patient-facing medicine orders, which meant keeping commerce and clinical data models aligned.",
        features: [
            "Pharmacy marketing site with features, benefits, pricing, and contact",
            "Inventory, prescription, and billing workflows",
            "Analytics for weekly overview and revenue trends",
            "Online showcase so pharmacies can reach more patients",
            "Onboarding path designed for Nepali pharmacy operators",
        ],
        id: "upchaar-pharmacy-portal",
        image: UpchaarPharmacyImg,
        liveUrl: "https://pharmacy.upchaarnepal.com",
        overview:
            "The Pharmacy Portal is a modern pharmacy management product that helps pharmacies run inventory, prescriptions, billing, and analytics while showcasing the pharmacy online. The marketing site targets Nepali pharmacies with fast onboarding and no-credit-card signup messaging, then leads operators into operational tooling for sales performance and revenue tracking.",
        poweredBy:
            "Pharmacy operations sit alongside patient medicine orders and prescriptions flowing through the UpchaarNepal care network.",
        screenshots: [
            {
                alt: "UpchaarNepal Pharmacy Portal landing page",
                caption:
                    "Pharmacy Portal hero highlighting inventory, prescriptions, billing, analytics, and online reach.",
                src: UpchaarPharmacyImg,
            },
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        title: "UpchaarNepal Pharmacy Portal",
    },
    {
        conclusion:
            "The Diagnostic Portal brings labs into UpchaarNepal so testing, referrals, and reports stay connected to the rest of the care network.",
        description:
            "Diagnostic lab portal for online visibility, doctor and patient referrals, and report management across Nepal’s healthcare network.",
        developmentChallenges:
            "Diagnostics had to feel simple for lab operators while still fitting a multi-portal architecture where reports and referrals cross patient, doctor, and admin boundaries.",
        features: [
            "Lab marketing site with get-started and request-demo paths",
            "Online visibility for diagnostic centers",
            "Referral pathways from doctors and patients",
            "Report management for lab results",
            "Positioning within Nepal’s healthcare search and telehealth platform",
        ],
        id: "upchaar-diagnostic-portal",
        image: UpchaarDiagnosticImg,
        liveUrl: "https://diagnostic.upchaarnepal.com",
        overview:
            "The Diagnostic Portal positions labs as trusted partners for doctors and patients on UpchaarNepal. Labs can grow online visibility, receive referrals, and manage reports from one place. The product sits inside Nepal’s broader healthcare search and telehealth story, connecting diagnostics with the patient and doctor journeys.",
        poweredBy:
            "Referrals and report flows connect diagnostic providers with patients and doctors already using the UpchaarNepal network.",
        screenshots: [
            {
                alt: "UpchaarNepal Diagnostic Portal landing page",
                caption: "Diagnostic Portal landing focused on lab trust, referrals, and report management.",
                src: UpchaarDiagnosticImg,
            },
        ],
        tags: ["React", "TypeScript", "Tailwind CSS"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        title: "UpchaarNepal Diagnostic Portal",
    },
    {
        conclusion:
            "The Admin Portal is where UpchaarNepal’s multi-portal healthcare network is verified, onboarded, and operated.",
        description:
            "Central admin dashboard for verifying and managing doctors, patients, clinics, and diagnostics across the UpchaarNepal platform.",
        developmentChallenges:
            "Admin tooling had to stay fast over large healthcare datasets while enforcing verification rules that affect every public portal, which pushed careful filtering, status modeling, and service boundaries.",
        features: [
            "Doctor verification requests and manage-doctors workflows",
            "Patient management across the platform",
            "Clinic and diagnostic onboarding request queues",
            "Search and filters for verification and profile status",
            "Specialization and profile completeness tracking",
        ],
        id: "upchaar-admin-portal",
        image: UpchaarAdminImg,
        liveUrl: "",
        overview:
            "The Admin Portal is the platform control plane for UpchaarNepal. Operators manage verification requests, onboard clinics and diagnostics, and maintain doctor and patient records. Screens like Manage Doctors combine search, profile completeness, verification status, and specialization data so the marketplace stays trustworthy.",
        poweredBy:
            "Admin actions gate what appears across patient, doctor, clinic, pharmacy, and diagnostic portals, keeping verification and onboarding consistent platform-wide.",
        screenshots: [
            {
                alt: "UpchaarNepal admin manage doctors screen",
                caption:
                    "Admin Manage Doctors view with verification status, profile completeness, and specializations.",
                src: UpchaarAdminImg,
            },
        ],
        tags: ["React", "TypeScript", "Redux Toolkit", "NestJS"],
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux Toolkit",
            "NestJS",
            "MongoDB",
            "PostgreSQL",
        ],
        title: "UpchaarNepal Admin Portal",
    },
    {
        conclusion:
            "The Logger System underpins UpchaarNepal’s production healthcare stack by making multi-service failures diagnosable.",
        description:
            "Internal logging and observability system supporting UpchaarNepal’s distributed healthcare microservices.",
        developmentChallenges:
            "Distributed healthcare traffic produces noisy, cross-service logs. The challenge was structuring observability so failures in booking, payments, or messaging could be traced without slowing the services themselves.",
        features: [
            "Centralized logging across healthcare microservices",
            "Visibility into gateway, consumer, cache, and payment flows",
            "Support for diagnosing distributed failures",
            "Operational backbone for production reliability",
        ],
        id: "upchaar-logger-system",
        image: UpchaarLoggerImg,
        liveUrl: "",
        overview:
            "The Logger System supports reliability across UpchaarNepal’s microservice architecture. It centralizes operational logs from gateway traffic, event consumers, cache behavior, and payment retries so engineering can diagnose issues across patient, doctor, clinic, pharmacy, diagnostic, and admin services.",
        poweredBy:
            "Event-driven services using Apache Kafka and Redis benefit from correlated logs when requests cross multiple healthcare domains.",
        screenshots: [
            {
                alt: "UpchaarNepal logger system cover",
                caption: "Logger System cover representing observability across UpchaarNepal microservices.",
                src: UpchaarLoggerImg,
            },
        ],
        tags: ["Node.js", "Microservices", "Redis", "Apache Kafka"],
        technologies: ["Node.js", "Express.js", "NestJS", "Apache Kafka", "Redis", "Docker"],
        title: "UpchaarNepal Logger System",
    },
];
