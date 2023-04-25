import whoIam from "../images/application-picture.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import englishResume from "../resume/Daniel-Aiyelu-en.pdf";
import germanResume from "../resume/Daniel-Aiyelu-de.pdf";

const AboutMe = ({
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
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { i18n } = useTranslation();
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  
  const handleDownload = () => {
  const isGerman = i18n.language === 'de';
  const resume = isGerman ? germanResume : englishResume;
  setDownloading(true);
  const link = document.createElement("a");
  link.href = resume;
  link.download = `Daniel-Aiyelu-${isGerman ? 'de' : 'en'}.pdf`;
  link.onload = () => {
    link.remove();
    setDownloading(false);
  };
  document.body.appendChild(link);
  link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={whoIam} alt={name} />

        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>{greeting}</h4>
            <h5>{motto}</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>{t_name}</span>
                  <p>{name}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>{t_location}</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>{avail}</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : `${btn_text}`}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
