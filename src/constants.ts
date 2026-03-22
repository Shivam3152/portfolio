import { Project, Education, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Shivam Kumar Jha",
  role: "Mechanical Engineering Undergraduate",
  location: "Tadepalligudem, India",
  email: "jhashivam783@gmail.com",
  linkedin: "https://linkedin.com/in/shivamkumarjha52",
  website: "https://www.shivamjha.com.np",
  about: "Mechanical Engineering undergraduate at NIT Andhra Pradesh with interests in additive manufacturing, materials science and space-related research. Currently working on a machine learning-based project to predict the mechanical properties of Ti-6Al-4V alloy in Laser Powder Bed Fusion processes. Possesses strong analytical and problem-solving skills, with the ability to apply data-driven approaches to engineering challenges. Experienced in leadership and event coordination. Aspiring to pursue a master's degree in Europe in interdisciplinary and research-oriented fields."
};

export const PROJECTS: Project[] = [
  {
    title: "Undergraduate Research Project",
    subtitle: "Additive Manufacturing & Machine Learning",
    period: "Dec 2025 – Current",
    description: [
      "Developed a machine learning model to predict mechanical properties of Ti-6Al-4V alloy",
      "Analyzed data from laser powder bed fusion (LPBF) processes",
      "Studied the effect of process parameters on material performance",
      "Performed data preprocessing, feature selection and model validation",
      "Applied concepts of materials science and additive manufacturing",
      "Interpreted results to improve prediction accuracy and process understanding"
    ]
  },
  {
    title: "Undergraduate Research Project",
    subtitle: "Automatic Drip Irrigation System",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Designed and developed a smart irrigation system to optimize agricultural water usage through real-time soil moisture monitoring and IoT-based automation.",
      "Integrated soil moisture sensors with Arduino to enable automatic pump control, delivering water only when required.",
      "Achieved 98.03% water-use efficiency, outperforming conventional and government-supported irrigation systems."
    ],
    technologies: ["Arduino", "IoT", "Soil Moisture Sensors"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "National Institute of Technology Andhra Pradesh",
    period: "Aug 2023 – Current",
    location: "Tadepalligudem, India",
    details: [
      "Engineering mechanics, thermodynamics, fluid mechanics, heat transfer",
      "Strength of materials, theory of machines, machine design",
      "Manufacturing processes, engineering materials and metallurgy",
      "CAD/CAM and basic simulation tools (e.g., AutoCAD, SolidWorks)",
      "Basics of mechatronics and control systems"
    ]
  },
  {
    degree: "12th Grade",
    institution: "United Academy",
    period: "Apr 2019 – Mar 2021",
    location: "Kumaripati, Nepal",
    details: ["Physics, Chemistry, Mathematics, English, Nepali"]
  }
];

export const VOLUNTEERING: Experience[] = [
  {
    role: "Sponsorship Coordinator",
    organization: "University Fest",
    period: "Jan 2026 – Mar 2026",
    location: "Tadepalligudem",
    details: [
      "Research and identify potential sponsors based on the fest's theme and target audience.",
      "Approach local businesses, startups, and corporations via emails, calls, and meetings.",
      "Successfully onboarded sponsors such as SBI and PepsiCo, collectively raising ₹20L+ in funding."
    ]
  },
  {
    role: "Technical Team Coordinator",
    organization: "TECHKRIYA (Annual Technical Fest)",
    period: "Sep 2025 – Oct 2025",
    location: "NIT Andhra Pradesh",
    details: [
      "Coordinated technical events, workshops, and competitions as part of the core technical team.",
      "Managed end-to-end planning and execution of technical activities."
    ]
  }
];

export const LEADERSHIP: Experience[] = [
  {
    role: "Joint Secretary",
    organization: "Career Guidance Club",
    period: "Current",
    location: "NIT Andhra Pradesh",
    details: [
      "Assisted in planning and organizing career guidance sessions, workshops, and seminars.",
      "Onboarded International Career Coach Nitin Nagaich for 'Campus to Corporate' session (350+ students).",
      "Facilitated resume-building and interview preparation programs."
    ]
  }
];

export const SKILLS = [
  "Manufacturing Processes", "Predictive Modeling", "Python", "Thermodynamics", 
  "Heat Transfer", "SolidWorks", "AutoCAD", "Arduino", "IoT", 
  "Event Management", "Teamwork", "Problem Solving"
];
