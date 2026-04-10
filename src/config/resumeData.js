export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = {
  Languages: { iconName: 'Code2', items: ['Java', 'HTML', 'CSS', 'MySQL', 'PostgreSQL'] },
  Frameworks: { iconName: 'Braces', items: ['Spring Boot', 'Hibernate', 'React', 'Redux', 'Tailwind CSS'] },
  'Tools & Platforms': { iconName: 'Cloud', items: ['Maven', 'Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Kafka', 'Redis', 'AWS'] },
  'Core Concepts': { iconName: 'Brain', items: ['OOP', 'DSA', 'RESTful APIs', 'JWT Authentication', 'Microservices', 'MVC'] },
}

export const EXPERIENCE = [
  {
    title: 'Associate Software Developer',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Oct 2025 – Present',
    current: true,
    points: [
      'Engineered and maintained RESTful APIs using Spring Boot, serving React-based frontends with reliable client-server communication.',
      'Designed and optimized PostgreSQL database schemas, improving query performance for core application features.',
      'Built and containerized backend services using Docker, ensuring consistent environments across dev and production.',
      'Contributed to frontend development with React, supporting end-to-end feature delivery across the full stack.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Jul 2025 – Sep 2025',
    current: false,
    points: [
      'Developed and tested RESTful API endpoints using Spring Boot during a 3-month internship in a production team environment.',
      'Worked with PostgreSQL to write and optimize queries supporting core application features.',
      'Built React components and integrated them with backend APIs, contributing to live feature delivery.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'HRM Application',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025 – Present',
    description: [
      'Architecting backend services with Spring Boot to automate core HR operations including payroll and attendance.',
      'Designed PostgreSQL schemas for employee management — onboarding, profiles, department tracking, and reporting.',
      'Integrated automated payroll calculation logic with real-time attendance data processing.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Git'],
  },
  {
    name: 'CRM Application',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025 – Present',
    description: [
      'Designed and implemented Spring Boot REST APIs for CRM operations — CRUD, filtering, search, and reporting.',
      'Built PostgreSQL data models to support customer relationship tracking and sales pipeline management.',
      'Developed React-based dashboards consuming backend APIs for customer data visualization and workflow management.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Git'],
  },
  {
    name: 'Jewellery Platform',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025',
    description: [
      'Designed and developed a full-stack Jewellery platform with a modern, responsive UI using React.',
      'Built RESTful backend APIs using Spring Boot to handle product listings, user interactions, and data management.',
      'Developed a dedicated Product Admin Panel enabling admins to upload, manage, and organize products efficiently.',
      'Implemented Redis caching to optimize product data retrieval and improve overall application performance.',
      'Deployed and hosted the application on AWS, managing cloud infrastructure and configurations.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
  },
  {
    name: 'Smart Document Vault',
    type: 'Personal',
    company: null,
    duration: 'Mar 2025',
    description: [
      'Built a secure document management system using Spring Boot, with JWT-based authentication and role-based access control.',
      'Developed RESTful APIs for uploading, downloading, filtering, and organizing documents by folder, type, and date.',
      'Used Spring Data JPA with MySQL for efficient persistence and implemented modular, scalable service and controller layers.',
      'Integrated Swagger UI for API documentation and testing, and deployed on Railway cloud.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Maven', 'Swagger', 'Railway', 'Git'],
  },
  {
    name: 'Banking Application',
    type: 'Personal',
    company: null,
    duration: 'Sep 2024',
    description: [
      'Developed RESTful APIs to facilitate transactions, account management, and user authentication.',
      'Implemented user authentication with secure password handling for data protection.',
      'Designed and optimized MySQL database schemas for effective data management.',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL'],
  },
]

export const EDUCATION = [
  {
    institution: 'University College of Engineering BIT Campus, Tiruchirappalli',
    degree: 'B.Tech in Information Technology',
    duration: 'Nov 2020 – Jun 2024',
    score: 'CGPA: 8.13',
  },
  {
    institution: 'Government Higher Secondary School, Maramadakki',
    degree: 'HSC – State Board, Tamil Nadu',
    duration: 'Jun 2019 – Apr 2020',
    score: '79.5%',
  },
]
