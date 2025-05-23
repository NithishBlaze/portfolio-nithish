export default function Loader({ visible }) {
  return (
    <div className={`loader-root ${visible ? '' : 'hidden'}`}>
      <div className={`loader-overlay`}>
        <div className="loader-container">
          <div className="animation-wrapper">
            <div className="triangle fade-up one"></div>
            <div className="triangle fade-up two"></div>
            <div className="triangle fade-up three"></div>
            <div className="triangle fade-up four"></div>
            <div className="triangle fade-up five"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
