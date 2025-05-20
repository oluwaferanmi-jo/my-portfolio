import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const skills = [
  { name: "HTML5", percent: 100, icon: <SiHtml5 size={28} /> },
  { name: "CSS3", percent: 100, icon: <SiCss3 size={28} /> },
  { name: "JavaScript", percent: 95, icon: <SiJavascript size={28} /> },
  { name: "TypeScript", percent: 85, icon: <SiTypescript size={28} /> },
  { name: "React.js", percent: 90, icon: <SiReact size={28} /> },
  { name: "Next.js", percent: 80, icon: <SiNextdotjs size={28} /> },
  { name: "Tailwind CSS", percent: 95, icon: <SiTailwindcss size={28} /> },
  { name: "Framer Motion", percent: 75, icon: <SiFramer size={28} /> },
];

export default function SkillProgress() {
  return (
    <section className="bg-gray-900 py-2 px-4">
      <div className="max-w-7xl  grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8  gap-10 text-white mx-8 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-18 h-18 md:w-24 md-h-24 transition-transform duration-500 group-hover:scale-105">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  strokeWidth="3"
                  fill="none"
                  stroke="currentColor"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-orange-500 transition-all duration-700 ease-in-out"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${skill.percent}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
               
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                {skill.icon}
              </div>
            </div>
             <text
                  x="18"
                  y="20.35"
                  className="fill-white text-sm font-bold"
                  textAnchor="middle"
                >
                  {skill.percent}%
                </text>
            <p className="mt-4 text-center text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
