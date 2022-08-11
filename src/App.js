import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { GlobalStyle, Header, Player, SideBar, Router } from "./common";
function App() {
  const [dataSongs, setDataSongs] = useState([]);
  const [song, setSong] = useState(undefined);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://62eb40ae705264f263d58770.mockapi.io/api/v1/zingmp3/songs`
      );
      return res;
    }
    getData()
      .then((res) => setDataSongs(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setSong(dataSongs[0]);
  }, [dataSongs]);
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
      <div className="canvas zm-layout">
        <Header />
        <SideBar />
        <div className="container">
          <main className="main">
            <Router />
          </main>
        </div>
        <Player dataSongs={dataSongs} song={song} setSong={setSong} />
      </div>
    </GlobalStyle>
  );
}

export default App;
