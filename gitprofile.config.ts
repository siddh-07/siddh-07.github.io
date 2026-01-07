// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'siddh-07', // Your GitHub username
  },
  /**
   * If you are deploying to https://siddh-07.github.io/, set base to '/'.
   * If you kept the default repo name (gitprofile), change this to '/gitprofile/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], 
      },
    },
    external: {
      header: 'Academic Projects',
      // I added your Academic Projects here so they show up even without a GitHub link
      projects: [
        {
          title: 'Systems Administration & Networking Lab',
          description:
            'Configured Active Directory (User Accounts, GPOs), file sharing on Windows Server. Deployed/troubleshot VMs (VMware) to simulate enterprise networks (TCP/IP, DNS).',
          imageUrl: '', // You can add an image URL here later if you have screenshots
          link: '', // Add a link if you upload documentation later
        },
        {
          title: 'Academic Capstone Project',
          description:
            'Supported a full-stack application using OS, networking, and security fundamentals. Managed service requests and incident resolution simulation with technical documentation.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Siddh Bhadani', description: 'IT Support Professional', imageURL: '' },
  social: {
    linkedin: 'bhadani-siddh-15953a249',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '306-539-6253',
    email: 'siddhbhadani26@gmail.com',
  },
  resume: {
    fileUrl: 'https://github.com/siddh-07/siddh-07.github.io/raw/main/Siddh_Bhadani_Resume.pdf', 
  },
  skills: [
    'IT Support',
    'Incident Management',
    'ServiceNow',
    'Jira',
    'Active Directory',
    'Windows Server',
    'Windows 10/11',
    'Linux (Ubuntu)',
    'Office 365 Admin',
    'TCP/IP & DNS',
    'VPN Troubleshooting',
    'VMware',
    'SQL',
    'Git',
    'MongoDB',
    'Hardware Troubleshooting',
    'JAVA',
    'Python',
    'HTML & CSS',
     'JavaScript'
  ],
  experiences: [
    {
      company: 'Subway',
      position: 'Team Supervisor',
      from: 'September 2022',
      to: 'Present',
      companyLink: '',
      description: 'Primary onsite point of contact for POS systems and network connectivity. Performed hardware resets, troubleshooting, and staff training on operational software and security procedures. Applied ITSM/ITIL concepts for incident documentation.',
    },
    {
      company: 'ScriptOptim Infotech',
      position: 'IT Support Intern',
      from: 'August 2021',
      to: 'February 2022',
      companyLink: '', 
      description: 'Provided Tier-1 support for hardware, software, and network issues. Resolved 15+ incidents weekly using ServiceNow/Jira. Assisted with Windows/Linux maintenance, Active Directory user provisioning, and GPO updates.',
    },
  ],
  certifications: [
    // You can uncomment this section later if you get certifications (like CompTIA A+, etc.)
    /*
    {
      name: 'Certification Name',
      body: 'Issuing Organization',
      year: 'March 2022',
      link: 'https://example.com',
    },
    */
  ],
  educations: [
    {
      institution: 'Saskatchewan Polytechnic',
      degree: 'Diploma in Computer Systems Technology',
      from: 'September 2022', 
      to: 'June 2024',
      description: 'Overall Weighted Average: 79.39%. Coursework: Systems Admin, OS (Windows/Linux), Data Comm & Networking, Computer Security, IT Project Mgmt.',
    },
    {
      institution: 'MNJ Patel High School',
      degree: 'High School',
      from: 'June 2019', 
      to: 'March 2021',
      description: 'Overall Weighted Average: 84%.',
    },
  ],
  publications: [], // Kept empty as none were listed
  blog: {
    source: '', // kept empty to hide blog section
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark', // I changed this to 'procyon' as it looks professional for IT, but you can change it back to 'lofi'

    // Hides the switch in the navbar
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
