import AdvancedEnglishBoardingSchoolImg from "@/assets/education/advanced-english-boarding-school.png";
import BhaktapurMultipleCampusImg from "@/assets/education/bhaktapur-multiple-campus.png";
import XavierInternationalCollegeImg from "@/assets/education/xavier-international-college.png";
import type { EducationDetail } from "@/features/education/types/education.types";

export const EDUCATION_DETAILS: EducationDetail[] = [
    {
        affiliation: "Constituent Campus of Tribhuvan University",
        conclusion:
            "Bhaktapur Multiple Campus gave me the structured CSIT training — algorithms, systems thinking, and practical software work — that became the academic base for my career as a full stack developer.",
        current: false,
        degree: "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
        description:
            "Completed a TU-affiliated B.Sc. CSIT degree with coursework in programming, data structures, algorithms, databases, networking, and software engineering, alongside hands-on web development and system design projects.",
        duration: "Apr 2021 - Jun 2025",
        highlights: [
            "UGC-recognized constituent campus of Tribhuvan University",
            "Well-equipped computer labs, smart classrooms, and research-friendly campus environment",
            "Faculty across Management, Humanities, and Science departments",
            "Focus on innovation, entrepreneurship, internships, and placement support",
            "Active campus events, workshops, and academic publications such as Swarnadwar and Anusheelan",
            "Affordable public education with strong CSIT, BCA, BIT, BIM, and BBM offerings",
        ],
        id: "bhaktapur-multiple-campus",
        image: BhaktapurMultipleCampusImg,
        institution: "Bhaktapur Multiple Campus",
        links: [{ label: "Campus Website", url: "https://bkmc.tu.edu.np/" }],
        location: "Doodhpati, Bhaktapur, Nepal",
        overview:
            "Bhaktapur Multiple Campus is a government-owned constituent campus of Tribhuvan University in the historical city of Bhaktapur. Established in 2016 Kartik 19 B.S., it has grown into one of the valley's established public institutions for management, humanities, and science programs. I studied B.Sc. CSIT here from 2021 to 2025, building the computer science foundation that later shaped my full stack development work.",
        programs: ["B.Sc. CSIT", "BCA", "BIT", "BIM", "BBM", "BBA", "Bachelor of Arts"],
        shortDegree: "B.Sc. CSIT",
        skills: [
            "C",
            "C++",
            "Java",
            "Data Structures & Algorithms",
            "Database Systems",
            "Web Development",
            "Software Engineering",
        ],
    },
    {
        conclusion:
            "Xavier International College was where my formal science education took shape — the math, physics, and early computer science exposure that made the move into B.Sc. CSIT feel natural.",
        degree: "Higher Secondary Education (10+2)",
        description:
            "Completed 10+2 with a science focus in Mathematics, Physics, and Computer Science, building analytical thinking and an early interest in technology and engineering.",
        duration: "Apr 2019 - Apr 2021",
        highlights: [
            "Science stream with Mathematics, Physics, and Computer Science",
            "Modern campus infrastructure including classrooms, labs, and sports facilities",
            "Recognized for academic quality, including Outstanding College of the Year 2021",
            "Student services, events, and research-oriented campus culture",
            "Undergraduate programs in BCA, BBM, BSc, BSW, BBS, and MBS",
            "Strong transition path from school-level science into university computing studies",
        ],
        id: "xavier-international-college",
        image: XavierInternationalCollegeImg,
        institution: "Xavier International College",
        links: [{ label: "College Website", url: "https://xaviercollege.edu.np/" }],
        location: "Boudha, Tushal, Kathmandu, Nepal",
        overview:
            "Xavier International College is a private college in Boudha, Kathmandu, known for undergraduate and graduate programs across business, science, and social work. During my 10+2 years from 2019 to 2021, I studied science with emphasis on Mathematics, Physics, and Computer Science. The college's structured curriculum, campus facilities, and student-focused environment helped strengthen my problem-solving skills before university-level computing.",
        programs: [
            "10+2 Science",
            "BCA",
            "BBM",
            "BSc Environmental Science",
            "BSc Microbiology",
            "BSW",
            "BBS",
            "MBS",
        ],
        shortDegree: "Higher Secondary Education (10+2)",
        skills: [
            "Physics",
            "Chemistry",
            "Mathematics",
            "Computer Science Fundamentals",
            "Problem Solving",
            "Analytical Thinking",
        ],
    },
    {
        conclusion:
            "Advanced English Boarding School laid the groundwork — language skills, discipline, and participation outside the classroom — that supported everything that came after in college and university.",
        degree: "School Leaving Certificate (SLC)",
        description:
            "Completed School Leaving Certificate with strong fundamentals in Mathematics, Nepali, and English, while taking part in extracurricular activities, sports, and community programs.",
        duration: "2015 - 2018",
        highlights: [
            "English-medium school education with focus on core academic subjects",
            "Participation in sports, extracurricular activities, and leadership opportunities",
            "Community engagement programs, including school-level civic initiatives",
            "Discipline-oriented boarding school environment",
            "Early development of communication skills and teamwork",
            "Foundation years before higher secondary science studies",
        ],
        id: "advanced-english-boarding-school",
        image: AdvancedEnglishBoardingSchoolImg,
        institution: "Advanced English Boarding School",
        links: [
            {
                label: "Facebook Page",
                url: "https://www.facebook.com/profile.php?id=100063524185505&sk=directory_links",
            },
        ],
        location: "Nepal",
        overview:
            "Advanced English Boarding High School was my school-level foundation from 2015 to 2018. The institution emphasized English-medium education alongside core subjects like Mathematics and Nepali, while encouraging participation in extracurricular activities, sports, and community engagement. That mix of academic discipline and school-life involvement helped build confidence, communication, and consistency early on.",
        shortDegree: "School Leaving Certificate (SLC)",
        skills: [
            "English",
            "Nepali",
            "Mathematics",
            "Extracurricular Activities",
            "Communication",
            "Teamwork",
        ],
    },
];

/**
 * Finds an education record by its route identifier.
 *
 * @param id - Education route slug.
 * @returns Matching education detail or undefined.
 */
export const getEducationById = (id: string) => EDUCATION_DETAILS.find((education) => education.id === id);
