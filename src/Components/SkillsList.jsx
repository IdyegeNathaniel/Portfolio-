import { skills } from "../data/Skills";

const SkillsList = () => {
  return (
    <div name="skills" className="bg-slate-900 w-full h-screen text-gray-200">
      <div className="max-w-[1000px] h-full w-full mx-auto justify-center p-4">
        <div className="text-center ">
          <h2 className="inline py-[5px] text-4xl font-bold border-b-4 border-[#398676]">
            Skills
          </h2>
          <p className="text-xl py-3 mt-2 text-gray-400">
            // These are the technologies i have worked with
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-white py-8">
          {skills.map((skill, index) => (
            <div
              className="shadow-md shadow-[#040c16] rounded-xl hover:scale-110 duration-500"
              key={index}
            >
              <img
                src={skill.image}
                className="w-20 mx-auto"
                alt="skill-icon"
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
