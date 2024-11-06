import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahesh Chambhare",
  initials: "MC",
  url: "https://maheshchambhare.in",
  location: "Surat, India",
  locationLink: "https://www.google.com/maps/place/surat",
  description:
    "Frontend Developer with 3+ Years of Experience | Transforming Ideas into Engaging Web & Mobile Experiences 🚀",
  summary: `Hi, I’m Mahesh Chambhare! With over three years of hands-on experience, I specialize in crafting visually stunning and user-centric web and mobile applications that make an impact. My passion lies in bringing concepts to life with sleek interfaces and seamless functionality. I’m proficient in the latest frontend technologies and best practices, ensuring every project is modern, fast, and intuitive. Whether you need to elevate your brand's digital presence or build a new product from scratch, I’m here to make it happen.

Let’s build something exceptional together!`,
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Tailwind Css",
    "Node.js",
    "Postgres",
    "AWS",
    "Supabase",
    "Firebase",
    "Redux",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "chambharem1@gmail.com",
    tel: "+918767431997",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/maheshchambhare",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maheshchambhare/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/maheshchambhare",
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:chambharem1@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      whatsapp: {
        name: "Message",
        url: "https://wa.me/+918767431997",
        icon: Icons.whatsapp,
        navbar: true,
      },
      resume: {
        name: "Download Resume",
        url: "https://docs.google.com/document/d/1AQJ5BWECb3KxMMxtpC0p_0nilDRZsxP3/edit?usp=sharing&ouid=113918340036709473921&rtpof=true&sd=true",
        icon: Icons.googleDrive,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Oneboard",
      href: "https://oneboard.app/",
      badges: [],
      location: "Goa (Remote)",
      title: "Senior Frontend Developer",
      logoUrl: "/oneboard.webp",
      start: "Dec 2022",
      end: "Mar 2024",
      description: (
        <ul>
          <li>
            <b>● Led Intern Training and Project Development:</b> Mentored two
            interns in Next.js, React.js, and Tailwind CSS, guiding them through
            the complete development lifecycle of an onboarding website from
            scratch.
          </li>
          <li>
            <b>● Improved Website Performance:</b> Implemented lazy loading
            techniques and other optimizations, increasing the website
            performance score from 30 to 95 for desktop and 85 for mobile,
            resulting in a faster and more efficient user experience.
          </li>
          <li>
            <b>● Optimized Image Handling: </b>Suggested and implemented image
            optimization methods by converting images to WebP format and
            applying compression techniques, reducing image sizes from 2-3 MB to
            50-300 KB, further enhancing website performance.
          </li>
        </ul>
      ),
    },
    {
      company: "Wiztech Labs",
      badges: [],
      href: "https://wiztechlabs.com/",
      location: "Surat",
      title: "Frontend Developer",
      logoUrl: "/wiztech.webp",
      start: "Sep 2021",
      end: "Dec 2022",
      description: (
        <ul>
          <li>
            <b>● Developed and Published Mobile Apps: </b> Built high-quality
            mobile applications using React Native for iOS and Android, and
            managed their successful publication on the Apple App Store and
            Google Play Store.
          </li>
          <li>
            <b>● Created Responsive Websites</b> Designed and developed
            responsive websites, utilizing modern web technologies to meet
            diverse client needs and deliver exceptional user interfaces.
          </li>
          <li>
            <b>● Maintained Client Satisfaction: </b>Achieved a high level of
            client satisfaction by effectively communicating with clients,
            understanding their requirements, and providing solutions that
            exceeded their expectations. This contributed to repeat business and
            positive client referrals
          </li>
        </ul>
      ),
    },
    {
      company: "Unikwork",
      href: "https://unikwork.com/",
      badges: [],
      location: "Surat",
      title: "React Native Internship",
      logoUrl: "/unikwork.webp",
      start: "Jul 2021",
      end: "Aug 2021",
    },
  ],
  education: [
    {
      school: "Sant Gadge Baba Amravati University",
      href: "http://www.sgbau.ac.in/",
      degree: "Master of Computer Applications - MCA",
      logoUrl: "/mca.webp",
      start: "2018",
      end: "2020",
    },
    {
      school: "Shankarlal Khandelwal College Akola",
      href: "https://khandelwalcollege.edu.in/",
      degree: "Bachelor Of Computer Application - BCA",
      logoUrl: "/bca.webp",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "OneBoard",
      href: "https://oneboard.app/",
      dates: "Dec 2022 - Mar 2024",
      active: true,
      description:
        "Curated for couch potatoes, explorers, and weekend travellers, OneBoard’s list of authentic experiences is put together to help you discover parts of Goa that remain infamous. With our inter-connected experience ecosystem, you can create a highly personalised tour, attend a local workshop or find cool new things to do. Your search ends with OneBoard",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/oneboardproject.webp",
    },
    {
      title: "Appointify",
      href: "https://appointify.in/",
      dates: "Mar 2024 - June 2024",
      active: true,
      description:
        "Appointify is the ultimate solution for businesses to seamlessly manage appointments and tickets online. Say goodbye to scheduling headaches and hello to a more organized and efficient way of running your business.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Postgres",
        "prisma",
        "aws",
      ],
      links: [
        {
          type: "Website",
          href: "https://appointify.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/appointify.webp",
    },

    {
      title: "Indiaport",
      href: "https://play.google.com/store/apps/details?id=com.indianportapp&hl=en_IN&gl=US",
      dates: "Sep 2021 - Nov 2021",
      active: true,
      description: `IndiaPort, the very first export-import & logistic application solely for updates.
Being part of EximEducation, Indiaport is determined towards the growth of the nation.
IndiaPort believes in EximEducations’ motto; ‘Making India the World’s Factory’
One cannot just be a successful exporter if s/he doesn’t know the market and changes made by the government.`,
      technologies: ["React Native", "Firebase", "Redux"],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.indianportapp&hl=en_IN&gl=US",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/indiaport.webp",
    },
    {
      title: "Vimal Power",
      href: "https://play.google.com/store/apps/details?id=com.indianportapp&hl=en_IN&gl=US",
      dates: "Dec 2021 - Feb 2022",
      active: true,
      description: `VimalPower is a streamlined B2B sales app for the electronics industry, designed to simplify bulk ordering for businesses. With VimalPower, companies can easily browse products, place large orders, and manage transactions all in one place. This app optimizes the order process, making it faster and more efficient for businesses to stock up on essential electronics.`,
      technologies: ["React Native", "Firebase", "Redux"],

      image: "/vimalpower.webp",
    },
    {
      title: "Knowyoursnack",
      dates: "Aug 2024",
      active: true,
      description: `KnowYourSnack is your personal guide to understanding snack ingredients. Simply snap a photo of the ingredients list on any snack package, and our AI-powered app will identify harmful substances, provide detailed information, and help you make healthier choices.`,
      technologies: [
        "Next Js",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        "Gemini Ai",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.knowyoursnack.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],

      image: "/knowyoursnack.webp",
    },
    {
      title: "B2B Exporter",

      dates: "June 2023 - Present",
      active: true,
      description: `Project description. B2B website for exporters, With this website exporters can go digital and get their clients, Here i was responsible for building frontend side of this project,
How this website help exporters
1) Exporters now can go digital and market themselves
2) Design like ecom sites where exporters clients can see what products that they are exporting and also can order
3) Exporter can change color of theme from Dashboard , and it will reflect in frontend website
and more..`,
      technologies: ["React Js", "Typescript", "TailwindCSS"],

      image: "/b2bexporters.webp",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
