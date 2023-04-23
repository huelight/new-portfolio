const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/huelight" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Daniel Aiyelu' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/daniel-aiyelu-49045b8a/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Daniel Aiyelu' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/dreal_joshua" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Daniel Aiyelu' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/DragonlordCore" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Daniel Aiyelu' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
