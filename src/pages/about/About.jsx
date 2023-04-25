import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({
  let_me,
  meme,
  greeting,
  motto,
  btn_text,
  t_name,
  t_location,
  avail,
  name,
  email,
  location,
  availability,
  brand
}) => {
  return (
    <section className="about">
      <PageHeader title={meme} description={let_me} />
      <AboutMe greeting={greeting} motto={motto} btn_text={btn_text} t_name={t_name} t_location={t_location} avail={avail} name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
  );
};

export default About;
