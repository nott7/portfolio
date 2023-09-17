const Skills = () => {
  return (
    <section className=" flex flex-col items-center py-6 mt-12 sm:mt-0" id="skills">
      <h1 className="text-3xl sm:text-5xl font-bold">Skills</h1>
      <p className="text-lg sm:text-2xl mt-2">My Technical Level</p>
      <div className="flex flex-col sm:flex-row gap-10 sm:mt-8">
        <div className="skills-container">
          <h2>Frontend Development</h2>
          <ul>
            <li>
              <i class="bx bxs-badge-check"></i>HTML
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>CSS
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>JavaScript
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>React
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>Tailwind
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>SCSS
            </li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Backend Development</h2>
          <ul>
            <li>
              <i class="bx bxs-badge-check"></i>Node.js
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>Express
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>MongoDB
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>Mongoose
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
