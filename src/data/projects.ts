import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'mhc-datathon-2025',
    title: 'Bus Route & Neighborhood Risk Analysis - MHC+MTA Datathon 2025',
    description:
      'As part of MHC+MTA Datathon 2025, our team developed a data-driven model to identify high-risk bus routes and neighborhoods using MTA Open Data (ACE/ABLE violations, bus speeds, and ridership). The project combined statistical analysis and visualization to surface accident-prone areas and power a live website for interactive risk scoring. Selected as a Top-20 Finalist and received an Honorable Mention.',
    isFeatured: true,
    coverImage: '/images/projects/mhc-datathon-2025/mhc-datathon-presentation.jpg',
    tags: ['Data Analysis', 'Visualization', 'Web Development', 'React'],
    technologies: ['TypeScript', 'React.js', 'Python', 'Pandas', 'GeoPandas', 'Leaflet', 'Recharts'],
    role: 'Data Engineer & Frontend Developer',
    duration: 'Sep 2025 - Sep 2025',
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
    id: 'perception-stack',
    title: '3D Perception Stack for Autonomous Vehicles',
    description:
      'Designed and implemented a perception stack for autonomous driving vehicles using LiDAR-based 3D point clouds. The system detects vehicles, estimates their 3D bounding boxes, positions, and motion vectors with high precision and low latency.',
    isFeatured: true,
    coverImage: '/images/projects/perception-stack/cover.png',
    tags: ['Computer Vision', '3D Processing', 'Autonomous Systems', 'Python'],
    technologies: ['Python', 'NumPy', 'Open3D', 'Point Cloud Processing'],
    role: 'Computer Vision Engineer',
    duration: 'Aug 2023 - Dec 2023',
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
    duration: 'Sep 2021 - May 2023',
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
]
