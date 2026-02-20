/* ═══════════════════════════════════════════════════════════════════
   config.js — Project data & orb layout
   Edit these to customise your portfolio!
   ═══════════════════════════════════════════════════════════════════ */

export const PROJECTS = [
  {
    name: 'About Me',
    tag: 'Personal',
    techs: ['C++', 'Python', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    description: `
      <p>Hi, I'm <strong>Donny Vo</strong> — a Computer Engineering student at
      Rotterdam University of Applied Sciences (2023–2027), based in Spijkenisse, Netherlands.</p>
      <p>I build things across the full stack: from low-level embedded C++ on STM32
      microcontrollers to real-time web dashboards and Android Automotive systems.
      I'm driven by complex problems that sit at the intersection of hardware and software.</p>
      <p><strong>Let's connect:</strong></p>
      <ul>
        <li>LinkedIn — linkedin.com/in/donnyvo</li>
        <li>Email — Donnyvo12@gmail.com</li>
        <li>Phone — (+31) 648 916 001</li>
      </ul>`,
    link: 'https://www.linkedin.com/in/donnyvo/',
    isAbout: true,
  },
  {
    name: 'TNO Internship',
    tag: 'Software Engineer Intern',
    techs: ['C++', 'Android Automotive', 'CI/CD', 'TomTom'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    description: `
      <p><strong>TNO — Android Automotive Integration in Dynamic Driving Simulator</strong><br/>
      August 2025 – January 2026</p>
      <p>Worked at TNO (Netherlands Organisation for Applied Scientific Research) integrating
      TomTom's Android Automotive navigation stack into a dynamic driving simulator.</p>
      <ul>
        <li>Developed a C++ low-level interface to extract real-time simulated vehicle state data</li>
        <li>Integrated TomTom Android Automotive navigation stack with TNO driving simulator</li>
        <li>Implemented real-time communication between simulator, navigation hardware and cluster</li>
        <li>Integrated real-time traffic information for the driving simulator</li>
        <li>Designed CI/CD pipelines for automation of driving simulator modules</li>
        <li>Collaborated with TomTom engineers and TNO researchers in a research-oriented environment</li>
      </ul>`,
    link: 'https://www.tno.nl',
  },
  {
    name: 'Redox Flow Monitor',
    tag: 'Full-Stack / Data Engineering',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'InfluxDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    description: `
      <p><strong>Secure Web-based Data Monitoring for Redox Flow Battery System</strong><br/>
      Collaboration with Tempelman Chemical Technology — January 2024 – June 2025</p>
      <p>Designed and built a full-stack monitoring platform for a redox flow battery system,
      handling live sensor ingestion, storage, and real-time visualization.</p>
      <ul>
        <li>Developed data infrastructure with PostgreSQL and InfluxDB</li>
        <li>Created a visual dashboard in HTML/CSS/JS to display live sensor values</li>
        <li>Built a backend in Python using FastAPI with secure API endpoints</li>
        <li>Deployed a Docker-based web application, reducing downtime by 30%</li>
        <li>Processed 20 sensor readings/sec in Python/SQL feeding live data to the dashboard</li>
      </ul>`,
    link: null,
  },
  {
    name: 'IP-CAR',
    tag: 'Embedded Systems',
    techs: ['C++', 'STM32', 'Sensor Fusion', 'ROS'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    description: `
      <p><strong>IP-CAR: Remote Museum Access Car</strong><br/>
      Collaboration with Kenniscentrum Zorginnovatie &amp; VindiQu — August 2024 – January 2025</p>
      <p>Built an autonomous navigation car enabling remote museum access, focusing on
      embedded sensor fusion and reliable real-time obstacle detection.</p>
      <ul>
        <li>Developed a real-time sensor fusion algorithm (C++/STM32) combining Ultrasonic and Time-of-Flight sensors for obstacle detection</li>
        <li>Integrated 4 sensors with STM32, ensuring 360° awareness and smooth navigation</li>
        <li>Led testing and tuning of autonomous behavior, optimizing embedded software for stability</li>
      </ul>`,
    link: null,
  },
  {
    name: 'Education',
    tag: 'Rotterdam UAS · 2023–2027',
    techs: ['Software Engineering', 'Embedded Software', 'Data Engineering'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    description: `
      <p><strong>Rotterdam University of Applied Sciences</strong><br/>
      HBO Bachelor — Computer Engineering · 2023–2027 · Rotterdam, ZH</p>
      <p>Pursuing a Bachelor's in Computer Engineering with a focus on the intersection
      of hardware, embedded systems, and modern software development.</p>
      <p><strong>Relevant Courses:</strong></p>
      <ul>
        <li>Software Engineering</li>
        <li>Embedded Software</li>
        <li>Data Engineering</li>
      </ul>`,
    link: 'https://www.hogeschoolrotterdam.nl',
  },
  {
    name: 'Technical Skills',
    tag: 'Skills',
    techs: ['C++', 'Python', 'Docker', 'Linux', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&q=80',
    description: `
      <p><strong>Programming Languages</strong></p>
      <ul><li>C, C++, Python, Java, Lua, PHP, Haskell, Rust</li></ul>
      <p><strong>Software &amp; Tools</strong></p>
      <ul><li>Git, GitHub, GitLab, Bash, Docker, Linux, ROS</li></ul>
      <p><strong>Databases &amp; Data</strong></p>
      <ul><li>SQL, PostgreSQL, InfluxDB, Data Management</li></ul>
      <p><strong>Web Development</strong></p>
      <ul><li>HTML, CSS, JavaScript, Node.js, Angular</li></ul>
      <p><strong>Languages</strong></p>
      <ul><li>Dutch (Native), English</li></ul>`,
    link: null,
  },
  {
    name: 'Soft Skills',
    tag: 'How I Work',
    techs: ['Agile', 'Scrum', 'Cross-disciplinary'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    description: `
      <p>I thrive in collaborative, research-driven environments where both engineering
      rigour and creative thinking are valued.</p>
      <ul>
        <li>Agile / Scrum collaboration</li>
        <li>Cross-disciplinary teamwork (research labs, industry partners)</li>
        <li>Problem solving &amp; systems thinking</li>
        <li>Technical documentation &amp; code reviews</li>
        <li>Independent problem ownership</li>
      </ul>
      <p>At TNO I worked directly alongside TomTom engineers and scientific researchers —
      communicating across disciplines to deliver a production integration on time.</p>`,
    link: null,
  },
];

/** Starting positions for each orb in world-space */
export const ORB_ORIGINS = [
  [ 0.0,  5.0, -1.5],   // About Me — top centre, slightly prominent
  [-8.5,  2.0, -1.5],
  [ 8.0,  2.8,  0.8],
  [-3.0, -4.0,  2.2],
  [ 4.8, -3.8, -0.8],
  [-7.8, -1.5,  3.0],
  [ 0.8, -1.0, -3.0],
];
