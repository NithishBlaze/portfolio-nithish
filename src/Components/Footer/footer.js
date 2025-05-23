import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="social-buttons list-content">
                            <li><a id="facebook" href="https://www.facebook.com/NithishBlaze" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a id="twitter" href="https://twitter.com/nithish_blaze" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li><a id="instagram" href="https://instagram.com/nithish_blaze/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            <li><a id="spotify" href="https://play.spotify.com/user/31c5ijt2c5xfeig42rbfxicaocaq" target="_blank" rel="noopener noreferrer"><i className="fa fa-spotify"></i></a></li>
                            {/* <li><a id="codepen" href="http://codepen.io/bchiang7/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a></li> */}
                            <li><a id="github" href="https://github.com/NithishBlaze" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                            <li><a id="linkedin" href="https://www.linkedin.com/in/bchiang7" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        </ul>

                        <div className="page-scroll">
                            <a id="to-top" className="page-scroll" href="#" aria-label="Back to top">
                                <i className="fa fa-rocket" style={{ fontSize: '40px', color: '#fff' }}></i>
                            </a>
                            <p id="to-top-copy">Beam me up, Scotty!</p>
                        </div>

                        <div className="copyright">
                            <p><i className="fa fa-copyright"></i> Nithishkumar R 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
