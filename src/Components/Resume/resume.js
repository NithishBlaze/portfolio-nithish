import "./resume.css";
import '././Resume.pdf'

function PdfViewer() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="wrapper">
      <div className="pdf-container">
        {isMobile ? (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <p>Your device doesn't support inline PDF preview.</p>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
              Click here to view or download the resume
            </a>
          </div>
        ) : (
          <iframe
            src="/Resume.pdf#view=FitH"
            width="100%"
            height="100%"
            className="pdf-iframe"
            title="Resume"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default PdfViewer;
