import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          url="https://www.tiktok.com/@norimzz/video/6942553529353620741"
          channel="this channel is one of many"
          description="this video is an item to view"
          song="a lot of these dudes think thyre clever"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
