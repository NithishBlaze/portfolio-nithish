import './Contact.css'

function Contact() {
  return (
    <div className="contactSection" >
      <div className="contact-contentWrapper">
        <h2>Contact Me</h2>

        <h3>Are you interested in working with me? Let's connect!</h3>
        <p className="zoomIn">
          <a
            href="//www.linkedin.com/in/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="//www.instagram.com/nithish_blaze/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:nithish.trystuffs@gmail.com"
            title="Email"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <span className="sr-only">Email</span>
          </a>
        </p>
      </div>
    </div>

  );
}

export default Contact;
