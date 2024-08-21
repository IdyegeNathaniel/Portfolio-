import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../data/Project";

const ProjectListings = () => {
  return (
    <div
      name="projectListings"
      className="bg-slate-900 w-full md:h-screen text-gray-200 pt-8"
    >
      <div className="max-w-[1000px] w-full h-full mx-auto py-8 ">
        <div className="text-center pb-6">
          {" "}
          <h2 className="text-center inline py-[5px] text-4xl font-bold border-b-4 border-[#398676]">
            Projects
          </h2>
          <p className="text-xl py-3 mt-2 text-gray-400 text-center">
            // These are some of my works
          </p>
        </div>

        <div className="w-full mx-auto grid sm:grid-cols-3 gap-8 p-4 text-white">
          {projects.map((project, index) => (
            <div
              className="p-4 rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              key={index}
            >
              <div className="">
                <h2 className="mb-4 font-bold text-2xl">{project.title}</h2>
                <p className="text-[15px] text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="border border-gray-400 my-2 text-gray-400"></div>

                <div className="flex justify-between mt-5">
                  <a href={project.github}>
                    <FaGithub size={20} />
                  </a>
                  <a href={project.link}>
                    <FaLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListings;
