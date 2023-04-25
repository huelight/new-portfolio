import { useEffect, useState } from "react";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import PROJECT_DATA from "./project-data";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

const Portfolio = () => {
  const [category, setCategory] = useState("web");
  const [categoriesMap, setCategoriesMap] = useState({});
  

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
      console.log(categoriesMap)
    }
    getCategoriesMap();
  }, []);


  const ProjectList = () => {
    return (
      <>
        {
          categoriesMap[category]?.map((project, idx) => (
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
          onClick={() => setCategory("Ui_UX")}
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
