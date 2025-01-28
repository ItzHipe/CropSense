import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Team",
  lastName: "DraconiX",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "",
  avatar: "/images/DraconiX.jpg",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Updates</>,
  description: (
    <>
      We occasionally write about the updates we are making on this
      and other infos... if you want to get updated you can subscribe to this.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts 
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ItzHipe/try-try-but-i-cry",
  },

  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRsphDvVVKpxvxqqdwzWBjStlTPghQCgvzvPPPRXjHJNgjfRqGCjNqCpFVMJfPSPsCRtNlB",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s `,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crop Sense</>,
  subline: (
    <>
      Agricultural Software-Based Project to <InlineCode>Aid Farmers</InlineCode>, in Rural Settings
    </>
  ),
};

const about = {
  label: "About",
  title: "about",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        CropSense is a smart crop monitoring system that analyzes real-time weather, soil moisture, air quality, and other environmental factors to recommend the best crops for farming. By leveraging sensor data and intelligent analysis, it helps farmers make informed decisions to maximize yield and sustainability. CropSense simplifies agricultural planning, ensuring better productivity with data-driven insights.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Working",
    experiences: [
      {
        company: "How CropSense Works",
        
        achievements: [
          <>
            How CropSense Works

CropSense collects real-time environmental data using sensors that measure weather conditions, soil moisture, air quality, and rainfall. This data is processed through an intelligent analysis system that evaluates key agricultural parameters. Based on the analysis, CropSense provides farmers with accurate crop recommendations tailored to their specific location and conditions. The system ensures smarter farming decisions, optimizing yield and sustainability through data-driven insights.
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/WhatsApp Image 2025-01-28 at 16.14.38_4bdd0a56.jpg",
            alt: "Once UI Project ",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Features",
        achievements: [
          <>
            Real-Time Monitoring – Continuously tracks weather, soil moisture, air quality, and other essential parameters.
          </>,
          <>
            Smart Crop Recommendations – Suggests the best crops based on environmental conditions and historical data.
          </>,
          <>
          User-Friendly Dashboard – Provides easy-to-understand data visualization for farmers and agronomists.
          </>,
          <>
          Remote Accessibility – Access crop insights from anywhere via a web-based interface.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Why to choose CropSense",
    institutions: [
      {
        
        description: <>Data-Driven Farming – Make informed agricultural decisions backed by real-time analysis.
        Improved Yield & Productivity – Optimize crop selection for maximum growth potential.
        Weather Adaptive Farming – Get alerts for sudden weather changes to protect crops.
        Cost-Effective Solutions – Reduce unnecessary expenses on fertilizers and irrigation..</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        title: "Next.js",
        description: <>Building websites like this </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Panel",
  title: "Farm Analytics",
  description: ``,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Panel",
  title: "Farm Analytics",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
