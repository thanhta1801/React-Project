import videoHomePage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      {/* pải có muted thì mới chạy đc video */}
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="homepage-title">There's a better way to ask</div>
        <div className="homepage-text">
          You don't want to make a boring from. And your audience won't answer
          one. Create a typefrom instead-and make everyone happy.
        </div>
        <div>
          <button className="btn-content">Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
