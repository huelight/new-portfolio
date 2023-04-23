import { useEffect, useState } from "react";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import PROJECT_DATA from "./project-data";

const Portfolio = () => {
  const [category, setCategory] = useState("web");
  const filteredProjects = PROJECT_DATA.filter((project) => project.heading === category)[0];

  useEffect(() => {

  }, [])

  const ProjectList = () => {
    return (
      <>
        {
          filteredProjects.data.map((project, idx) => (
            <Project
              key={idx}
              id={project.id}
              title={project.title}
              technologies={project.technologies}
              image={project.image}
              color={project.bgcolor}
              github={project.github}
              deployed={project.deployed}
              description={project.description}
            />
          ))
        }
      </>
    )
  }

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="categories">
        <button
          className={category === "web" ? "active" : ""}
          onClick={() => setCategory("web")}
        >
          Web
        </button>
        <button
          className={category === "graphics" ? "active" : ""}
          onClick={() => setCategory("graphics")}
        >
          Graphics
        </button>
        <button
          className={category === "ui/ux" ? "active" : ""}
          onClick={() => setCategory("ui/ux")}
        >
          UI/UX
        </button>
      </div>

      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
