function Contact() {
  return (
    <section id="contact" className="contactSection text-center">
      <div className="contentWrapper">
        <h2>Contact Me</h2>

        <h3>Are you interested in working with me? Let's connect!</h3>
        <p className="zoomIn">
          <a
            href="//www.linkedin.com/in/natashapl/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="//www.instagram.com/natashasworld/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:natashapl@natashasfolio.com"
            title="Email"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fas fa-envelope fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Email</span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
