import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'slimeland',
    title: 'SlimeLand',
    description:
      'A remake of an original game made in Scratch, being built in multiple languages including Java, C++, C#, Python, and more.',
    isFeatured: false,
    coverImage: '/images/projects/slimeland/cover.png',
    tags: ['Game Development', 'Java', 'C++', 'C#', 'Python', 'Scratch'],
    technologies: ['Java', 'Processing', 'C++', 'C#', 'Python', 'Scratch'],
    role: 'Developer',
    duration: 'March 2017 - Present',
    overview:
      'Recreating my Scratch game with improvements, porting it to multiple programming languages for exploration and broadening my skillset.',
    challenge:
      'Need to replicate game mechanics faithfully across different programming languages while enhancing features.',
    solution:
      'Implementing core game logic in Java, C++, C#, and Python; adapting graphics, input handling, and game physics for each language.',
    results:
      'Ongoing project, progressively rebuilding and expanding the original game with cross-language support.',
    liveUrl: 'https://scratch.mit.edu/projects/151951411',
    sourceCode: '',
    images: [],
  },
  {
    id: 'maksimpikovskiy-portfolio',
    title: 'MaksimPikovskiy.github.io',
    description: 'My personal portfolio website to showcase projects, skills, and experience.',
    isFeatured: false,
    coverImage: '/images/projects/my-portfolio/cover.png',
    tags: ['Vue', 'Portfolio', 'Web Development', 'Frontend'],
    technologies: ['Vue', 'Tailwind CSS', 'Vite', 'TypeScript', 'EmailJS'],
    role: 'Frontend Developer',
    duration: 'November 2025 - November 2025',
    overview:
      'A personal portfolio website featuring interactive sections for projects, skills, experience, and contact information.',
    challenge:
      'Needed a clean, modern, and responsive design that is easy to update and maintain using JSON objects for content.',
    solution:
      'Built the site with Vue and Tailwind CSS, loading content from TS files containing JSON objects, integrated EmailJS for contact form, and deployed via GitHub Pages.',
    results:
      'Fully functional portfolio showcasing my projects and experience, easy to maintain and update.',
    liveUrl: 'https://maksimpikovskiy.github.io',
    sourceCode: 'https://github.com/MaksimPikovskiy/MaksimPikovskiy.github.io',
    images: [],
  },
  {
    id: 'mhc-datathon-2025',
    title: 'Bus Route & Neighborhood Risk Analysis - MHC+MTA Datathon 2025',
    description:
      'As part of MHC+MTA Datathon 2025, our team developed a data-driven model to identify high-risk bus routes and neighborhoods using MTA Open Data (ACE/ABLE violations, bus speeds, and ridership). The project combined statistical analysis and visualization to surface accident-prone areas and power a live website for interactive risk scoring. Selected as a Top-20 Finalist and received an Honorable Mention.',
    isFeatured: true,
    coverImage: '/images/projects/mhc-datathon-2025/mhc-datathon-presentation.jpg',
    tags: ['Data Analysis', 'Visualization', 'Web Development', 'React'],
    technologies: [
      'TypeScript',
      'React.js',
      'Python',
      'Pandas',
      'GeoPandas',
      'Leaflet',
      'Recharts',
    ],
    role: 'Data Engineer & Frontend Developer',
    duration: 'September 2025 - September 2025',
    overview:
      'Developed a bus route and neighborhood risk scoring system that integrates MTA ACE/ABLE violations, bus speed, and ridership datasets. The system enables interactive exploration of accident-prone routes through a React-based dashboard, supported by Python data processing and geospatial analysis.',
    challenge:
      'The datasets provided by the MTA were large, inconsistent, and spread across multiple years. We needed to merge violations, speed, and ridership data, align them geographically by neighborhood, and design a user-friendly visualization interface for comparative analysis.',
    solution:
      'Built a Python data pipeline using Pandas and GeoPandas to clean and aggregate data, compute normalized risk scores, and export them to a JSON API. Then implemented a React and Leaflet-and-Recharts-based web app to visualize routes and neighborhoods with interactive sliders for adjusting weighting of risk factors in real time.',
    results:
      'Identified Jamaica, Longwood, and East Harlem as top-risk neighborhoods, and M15+, M101, and BX19 as the most accident-prone routes. The project received an Honorable Mention and was selected as a Top-20 Finalist at the MHC+MTA Datathon 2025.',
    liveUrl: 'https://mhc-datathon-2025.vercel.app/',
    sourceCode: 'https://github.com/MaksimPikovskiy/mhc-datathon-2025',
    images: [
      'https://raw.githubusercontent.com/MaksimPikovskiy/mhc-datathon-2025/main/visuals/graph_risk_bus_routes.png',
      'https://raw.githubusercontent.com/MaksimPikovskiy/mhc-datathon-2025/main/visuals/map_risk_neighborhoods.png',
    ],
  },
  {
    id: 'acamerus-portfolio',
    title: 'Acamerus.github.io',
    description:
      'Built a portfolio website featuring interactive sections, dynamic content from JSON files, responsive design, and a contact form powered by EmailJS.',
    isFeatured: false,
    coverImage: '/images/projects/acamerus-portfolio/cover.png',
    tags: ['Web Development', 'UI/UX', 'React', 'Portfolio'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'EmailJS', 'Lucide React'],
    role: 'Frontend Developer',
    duration: 'May 2025 - July 2025',
    overview:
      'Developed a fully interactive and responsive portfolio website with sections for Home, About, Skills, Experience, Education, Projects, Testimonials, and Contact.',
    challenge:
      'A friend needed a modern, maintainable portfolio with dynamic content loading, responsive design, and email integration for contact submissions.',
    solution:
      'Implemented the site using React and Vite for fast development, Tailwind CSS for responsive design, and EmailJS for client-side email handling. All content is stored in JSON for easy updates.',
    results:
      'A fully functional portfolio that allows easy content updates and displays well across devices, showcasing personal projects and skills effectively.',
    liveUrl: 'https://maksimpikovskiy.github.io/Acamerus.github.io',
    sourceCode: 'https://github.com/MaksimPikovskiy/Acamerus.github.io',
    images: [],
  },

  {
    id: 'perception-stack',
    title: '3D Perception Stack for Autonomous Vehicles',
    description:
      'Designed and implemented a perception stack for autonomous driving vehicles using LiDAR-based 3D point clouds. The system detects vehicles, estimates their 3D bounding boxes, positions, and motion vectors with high precision and low latency.',
    isFeatured: true,
    coverImage: '/images/projects/perception-stack/cover.png',
    tags: ['Computer Vision', '3D Processing', 'Autonomous Systems', 'Python'],
    technologies: ['Python', 'NumPy', 'Open3D', 'Point Cloud Processing'],
    role: 'Computer Vision Engineer',
    duration: 'August 2023 - December 2023',
    overview:
      'Developed a full perception pipeline for autonomous driving, processing LiDAR point clouds captured at intersections to identify and track vehicles. The stack includes segmentation, clustering, and motion estimation modules implemented in Python with Open3D.',
    challenge:
      'Processing large-scale 3D point clouds efficiently while maintaining high detection accuracy and real-time inference speed. Robustly distinguishing vehicles from noise and other static objects was a major technical challenge.',
    solution:
      'Implemented a perception stack leveraging spatial filtering, clustering, and motion vector estimation techniques using Open3D and NumPy. Optimized data structures and algorithms to achieve low-latency processing for real-time vehicle perception.',
    results:
      'The perception stack achieved 85% detection accuracy with an average latency of 0.1 seconds, demonstrating its feasibility for real-time autonomous traffic monitoring applications.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/Perception_Stack',
    images: [
      'https://github.com/MaksimPikovskiy/Perception_Stack/blob/83c9db5202097ca4c5d662bb55adfd114ffd3300/Intersection%20v2.gif?raw=true',
      'https://github.com/MaksimPikovskiy/Perception_Stack/blob/83c9db5202097ca4c5d662bb55adfd114ffd3300/Full%20Point%20Cloud%20Animation.gif?raw=true',
    ],
  },
  {
    id: 'sdaq',
    title: 'Stackable Data Acquisition System (SDAQ)',
    description:
      'Developed a stackable data acquisition and visualization system for RIT Baja’s off-road vehicle based on Raspberry Pi and custom sensor Arduino-based boards. Designed and implemented the Python-based application architecture, data collection algorithms, and graphical user interface for real-time sensor monitoring and analysis.',
    isFeatured: true,
    coverImage: '/images/projects/sdaq/cover.jpg',
    tags: ['Embedded Systems', 'Python', 'UI/UX', 'Data Collection'],
    technologies: ['Python', 'Tkinter', 'RPIO', 'Raspberry Pi'],
    role: 'Software Engineer',
    duration: 'September 2021 - May 2023',
    overview:
      'As part of the RIT Baja Racing team, designed and implemented a modular, Raspberry Pi–based data acquisition system for collecting and displaying real-time sensor data. The software was built using an MVC pattern, allowing stackable integration of multiple on-car sensor boards.',
    challenge:
      'The team needed a reliable, extensible system capable of collecting and displaying live sensor data from multiple interconnected boards in a high-vibration, off-road environment. Maintaining stable data streams and real-time visualization was a key technical challenge.',
    solution:
      'Developed a Python application using Tkinter for the graphical interface and RPIO for hardware communication. Implemented modular data collection algorithms and a clean MVC architecture to separate interface, logic, and data layers. The GUI allowed users to view, log, and analyze sensor readings in real time.',
    results:
      'Successfully deployed on RIT Baja’s off-road vehicle. Enabled accurate, synchronized collection from multiple sensors and provided an intuitive real-time dashboard for monitoring system performance during testing and competitions.',
    liveUrl: '',
    sourceCode: 'https://github.com/AdamSeidman/SDAQ',
    images: [],
  },
  {
    id: 'jott-translator',
    title: 'Jott Translator',
    description:
      'A team-based Java project to create a translator for the made-up programming language "Jott", converting Jott files into Java, Python, and C.',
    isFeatured: false,
    coverImage: '/images/projects/jott-translator/cover.png',
    tags: ['Java', 'Programming Languages', 'Compiler Design'],
    technologies: ['Java', 'C', 'Python'],
    role: 'Team Member',
    duration: 'August 2022 - December 2022',
    overview:
      'Designed and implemented a translator for the made-up Jott programming language to convert files into Java, Python, and C automatically.',
    challenge:
      'Needed to ensure correct parsing and conversion while handling multiple output languages with proper syntax and semantics.',
    solution:
      'Implemented parser, syntax checking, and language conversion modules in Java, allowing translation into multiple languages with accurate handling of Jott code.',
    results:
      'Successful translator that accurately converts Jott code to runnable Java, Python, and C, used for academic demonstrations and team exercises.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/Jott-Translator',
    images: [],
  },
  {
    id: 'language-classifier',
    title: 'Language Classifier',
    description:
      'A Python program that classifies lines of text as Dutch or English using AdaBoost or Decision Tree algorithms.',
    isFeatured: false,
    coverImage: '/images/projects/language-classifier/cover.png',
    tags: ['Python', 'Machine Learning', 'NLP'],
    technologies: ['Python', 'AdaBoost', 'Decision Tree'],
    role: 'Developer',
    duration: 'March 2022 - April 2022',
    overview:
      'Trains a model on labeled examples of Dutch and English sentences to classify new lines of text accurately.',
    challenge:
      'Needed to build a flexible system supporting two different algorithms (AdaBoost and Decision Tree) and handle training and prediction pipelines cleanly.',
    solution:
      'Implemented a Python program with separate training and prediction commands, configurable model depth and ensemble size, generating serialized model files for reuse.',
    results:
      'Successfully classifies Dutch and English sentences with configurable algorithms, supporting both Decision Tree and AdaBoost models.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/language-classifier',
    images: [],
  },
  {
    id: 'cnf-converter',
    title: 'CNF Converter',
    description:
      'A Java program that converts CNF files into a Knowledge Base and tests whether the Knowledge Base is satisfiable.',
    isFeatured: false,
    coverImage: '/images/projects/cnf-converter/cover.png',
    tags: ['Java', 'Logic', 'Satisfiability'],
    technologies: ['Java'],
    role: 'Developer',
    duration: 'March 2022 - March 2022',
    overview:
      'Designed a program to parse CNF (Conjunctive Normal Form) files, build an internal Knowledge Base, and determine satisfiability.',
    challenge:
      'Handling CNF parsing and logical inference efficiently in Java, ensuring correctness and reliability.',
    solution:
      'Implemented CNF parser, knowledge base constructor, and satisfiability checker with clear modular design.',
    results: 'Allows users to test CNF knowledge bases for satisfiability accurately and quickly.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/cnf-converter',
    images: [],
  },
  {
    id: 'rosedb',
    title: 'RoseDB',
    description:
      'Designed and implemented a custom database-backed recipe and pantry management system using Python and SQL at Rochester Institute of Technology.',
    isFeatured: false,
    coverImage: '/images/projects/rosedb/cover.png',
    tags: ['Python', 'SQL', 'Database Management', 'ER Modeling'],
    technologies: ['Python', 'PostgreSQL', 'psycopg2'],
    role: 'Team Member',
    duration: 'January 2022 - May 2022',
    overview:
      'RoseDB is a database management application that allows users to store and organize recipes, manage home pantry inventory, and track ingredient usage. The system supports user accounts, recipe authoring, pantry stock tracking, ingredient requirements, and historical record of past meals prepared. An entity-relationship model was created to formalize the schema, and the application was developed with clear mappings between conceptual design and SQL implementation.',
    challenge:
      'We needed to design a normalized relational structure that could accurately represent many-to-many relationships, such as recipes requiring multiple ingredients and users having multiple pantries, while maintaining data integrity and efficient query performance. Additionally, the system had to support tracking metadata such as ingredient quantities, expiration dates, authorship history, and favorite recipes.',
    solution:
      'We designed a fully normalized ER model (shown below) defining the core system entities: Users, Recipes, Ingredients, and Pantries. Relationship tables were implemented to support interactions such as favorites, authored recipes, stock levels, and ingredient requirements. The application logic was developed in Python using psycopg2 to interface with PostgreSQL, implementing CRUD operations, query execution, and data validation. Key features included dynamic recipe lookup based on available ingredients and history tracking for meals prepared.',
    results:
      'Delivered a functional database application with a complete schema, terminal query interface, dataset loading scripts, and usage documentation. The system supports robust relational querying, and maintains referential integrity across core entities.',
    liveUrl: '',
    sourceCode: '',
    images: ['/images/projects/rosedb/er-diagram.jpg', '/images/projects/rosedb/poster.jpg'],
  },
  {
    id: 'rit-covid-dashboard',
    title: 'Data Acquisition for RIT COVID-19 Dashboard',
    description:
      'Web scraping algorithm that collects positive COVID-19 cases from RIT dashboard, generates graphs, and sends results via Telegram Bot.',
    isFeatured: false,
    coverImage: '/images/projects/rit-covid-dashboard/cover.png',
    tags: ['Python', 'Web Scraping', 'Automation', 'Data Visualization'],
    technologies: [
      'Python',
      'Selenium',
      'Webdriver Manager',
      'Beautiful Soup 4',
      'Pandas',
      'Numpy',
      'Matplotlib',
      'pyTelegramBotAPI',
      'Pillow',
    ],
    role: 'Developer',
    duration: 'January 2022 - February 2022',
    overview:
      'Collected positive COVID-19 case data from RIT dashboard, generated graphs over the semester, and sent updates to Telegram group.',
    challenge:
      'Required automating web scraping, data processing, and communication via Telegram in a reliable, repeatable workflow.',
    solution:
      'Used Selenium and BeautifulSoup to scrape data, Pandas and Numpy for processing, Matplotlib for graphs, and pyTelegramBotAPI to send results via Telegram bot.',
    results:
      'Successfully delivered automated updates with accurate positive case graphs throughout the spring semester.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/data-acquisition-rit-covid-dashboard',
    images: ['/images/projects/rit-covid-dashboard/covid_cases_graph_telegram.png'],
  },
  {
    id: 'optimal-path-orienteering',
    title: 'Optimal Path Orienteering',
    description:
      'Program that finds an optimal path using A-star Search Algorithm with a provided terrain map, elevation file, and points to visit.',
    isFeatured: false,
    coverImage: '/images/projects/optimal-path-orienteering/cover.png',
    tags: ['Java', 'Algorithms', 'Pathfinding', 'A* Search'],
    technologies: ['Java'],
    role: 'Developer',
    duration: 'January 2022 - January 2022',
    overview:
      'Designed a program to compute optimal paths across a terrain map with multiple points of interest using the A-star search algorithm.',
    challenge:
      'Needed to efficiently compute shortest paths while considering terrain elevation and multiple destination points.',
    solution:
      'Implemented A-star search algorithm in Java and processed map and elevation data to generate the optimal path.',
    results:
      'Successfully calculates the optimal route based on input data and terrain, suitable for orienteering tasks and demonstrations.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/optimal-path-orienteering',
    images: [
      '/images/projects/optimal-path-orienteering/image1.png',
      '/images/projects/optimal-path-orienteering/image2.png',
      '/images/projects/optimal-path-orienteering/image3.png',
    ],
  },
  {
    id: 'web-checkers',
    title: 'Web Checkers',
    description:
      'A web-based implementation of American Checkers with real-time multiplayer gameplay, AI opponents, and spectating functionality, built using Java and the Spark web framework.',
    isFeatured: false,
    coverImage: '/images/projects/web-checkers/cover.png',
    tags: ['Java', 'Web Development', 'Game Development'],
    technologies: ['Java', 'Maven', 'Spark'],
    role: 'Team Member',
    duration: 'August 2021 - December 2021',
    overview:
      'The Web Checkers application allows players to sign in, challenge other online players, and play live checkers matches using drag-and-drop movement. Players can also challenge an AI bot for practice or choose to spectate ongoing matches. The system enforces official American Checkers rules, including simple moves, jump moves, multi-jumps, capturing, and king promotion.',
    challenge:
      'We needed to support real-time multiplayer gameplay while maintaining consistent game state across multiple clients. Additionally, implementing correct American Checkers rules and move validation introduced significant state-management complexity.',
    solution:
      'We designed a server-side state management system to track players, matches, and board states. Game logic was implemented to validate moves, enforce turn order, track piece states, and handle win/resign conditions. The UI enabled drag-and-drop piece movement, while Spark handled routing and session-based user management.',
    results:
      'Delivered a fully functional web checkers platform supporting multiplayer matches, AI play, and game spectating. The final MVP allowed users to sign in, start and resign matches, and play full games with full rule enforcement. Additional enhancements provided an AI practice mode and a spectator mode for observing ongoing matches.',
    liveUrl: '',
    sourceCode: 'https://github.com/MaksimPikovskiy/web-checkers',
    images: [
      '/images/projects/web-checkers/architecture.png',
      '/images/projects/web-checkers/domain-model.png',
    ],
  },
  {
    id: 'rich-image-tool',
    title: 'Rich Image Tool',
    description:
      'A Java-based application that compresses and reconstructs images using QuadTree spatial partitioning.',
    isFeatured: false,
    coverImage: '/images/projects/rich-image-tool/cover.png',
    tags: ['Java', 'Image Compression', 'Data Structures'],
    technologies: ['Java', 'JavaFX'],
    role: 'Developer',
    duration: 'August 2020 - December 2020',
    overview:
      'Built a tool that compresses images by recursively subdividing them into quadrants based on color variance. The application visualizes both the QuadTree structure and the reconstructed image.',
    challenge:
      'Efficiently determining when to subdivide or merge regions required careful pixel sampling and variance calculations to maintain image fidelity.',
    solution:
      'Implemented a QuadTree data structure that adaptively splits image regions only when necessary, reducing redundancy and file size while preserving key visual details.',
    results:
      'Achieved significant image compression with minimal perceptual quality loss, demonstrating how hierarchical spatial partitioning can be used for visual data optimization.',
    liveUrl: '',
    sourceCode: '',
    images: [],
  },
]
