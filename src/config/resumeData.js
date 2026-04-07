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
  'Core Concepts': { iconName: 'Brain', items: ['OOP', 'DSA', 'RESTful APIs', 'JWT Authentication'] },
}

export const EXPERIENCE = [
  {
    title: 'Associate Software Developer',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Oct 2025 – Present',
    current: true,
    points: [
      'Develop and maintain full-stack web applications using React (frontend) and Spring Boot (backend).',
      'Design and build RESTful APIs consumed by React-based frontends for seamless client-server communication.',
      'Manage and optimize PostgreSQL database schemas and queries to support application features.',
      'Collaborate on end-to-end feature development, from UI components to backend business logic.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Jul 2025 – Sep 2025',
    current: false,
    points: [
      'Contributed to frontend and backend development tasks during a 3-month internship program.',
      'Gained hands-on experience with React, Spring Boot, and MySQL in a production team environment.',
      'Assisted in API development and database management under senior developer guidance.',
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
      'Actively developing a Human Resource Management system to automate and streamline core HR operations.',
      'Building modules for employee management, including onboarding, profiles, and department tracking.',
      'Implementing payroll and attendance management with automated calculation and reporting features.',
      'Developing a leave management module to handle leave requests, approvals, and balance tracking.',
      'Integrated Apache Kafka for event-driven communication between HR modules and other internal services.',
      'Utilizing Docker, Kubernetes, and Jenkins for containerization and CI/CD pipeline management.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Git'],
  },
  {
    name: 'CRM Application',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025 – Present',
    description: [
      'Building an enterprise CRM application to streamline customer relationship and sales management.',
      'Developing frontend dashboards and UI components using React for managing customer data and workflows.',
      'Designing and implementing Spring Boot backend APIs for CRM operations including CRUD, filtering, and reporting.',
      'Structuring PostgreSQL database schemas to support scalable CRM data models.',
      'Integrated Apache Kafka for event-driven messaging and asynchronous communication between services.',
      'Integrated Keycloak for identity and access management, handling authentication and role-based authorization.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Git'],
  },
  {
    name: 'E-Commerce Jewellery Platform',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025',
    description: [
      'Designed and developed a full-stack e-commerce platform with a modern, responsive UI using React.',
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
