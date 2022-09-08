import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { handleGetAllSong } from "./redux/songListSlide";
import { GlobalStyle, Header, Player, SideBar, Router } from "./common";
function App() {
  const dispatch = useDispatch();
  const [dataSongs, setDataSongs] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://songmusic-api.herokuapp.com/api/songs`
      );
      return res;
    }
    getData()
      .then((res) => setDataSongs(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    dispatch(handleGetAllSong(dataSongs));
  }, [dataSongs, dispatch]);
  return (
    <GlobalStyle>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="canvas zm-layout"
        style={{
          backgroundImage:
            "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/tet-co-truyen.jpg)",
        }}
      >
        <Header />
        <aside>
          <SideBar />
        </aside>
        <div className="container">
          <Router />
        </div>
        <Player />
      </div>
    </GlobalStyle>
  );
}

export default App;
