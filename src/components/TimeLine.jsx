import Title from "../../ui/Title";
import TimelineItem from "./TimelineItem";

const TimelineData = [
  {
    companyImg: "/image.png",
    jobTitle: "Software Engineer",
    company: "Quantmhill It Services & Consultancy",
    jobType: "Full Time",
    duration: "August 2023 - working ",
    stuffIDid: [
      "Developed a dynamic and interactive portfolio using Next.js, GSAP, Swiper, and Material UI, integrating smooth animations to enhance user experience.",
      "Implemented pixel-perfect UI components using Tailwind CSS and Bootstrap, optimizing for responsiveness across various screen sizes.",
      "Led the frontend development of Toevan, a service-based platform, ensuring seamless API integration and user-friendly navigation.",
      "Engineered an optimized authentication flow with Role-Based Access Control (RBAC) for a secure satta platform (raju666.com) using React.js and Next.js.",
      "Refactored and modularized reusable UI components, reducing redundant code by 20% and improving maintainability across multiple projects.",
      "Enhanced site performance and SEO for siripay.co and letstrip.world using Next.js optimizations such as lazy loading, ISR, and image optimization.",
      "Collaborated with backend teams to integrate REST APIs efficiently, debugging and resolving integration issues to ensure a smooth user experience.",
      "Utilized Framer Motion and GSAP to create engaging animations, boosting website interactivity and modern UI appeal.",
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Intern",
    company: "Quantmhill It Services & Consultancy",
    jobType: "Internship",
    duration: "A 2023 - Aug. 2023",
    stuffIDid: [
      "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="min-h-screen flex justify-center items-center">
      <div  className="mt-10 md:mt-[110px]">
        <Title text={"Work Experience"} />

        <div className="flex mt-6 pl-3 relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[14px] top-2 w-1 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>

          {/* Timeline Content */}
          <div className="flex flex-col gap-10 ml-6">
            {TimelineData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-4">
                {/* Timeline Item */}
                <TimelineItem
                  companyImg={item.companyImg}
                  jobTitle={item.jobTitle}
                  company={item.company}
                  jobType={item.jobType}
                  duration={item.duration}
                  stuffIDid={item.stuffIDid}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
