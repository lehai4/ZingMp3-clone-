import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalStyle, Header, Player, SideBar, Router } from "./common";
import { Songs } from "./components/Context/Context";
import dataSongs from "./components/data/songs.json";
function App() {
  const [song, setSong] = useState(dataSongs[0]);
  return (
    <Songs.Provider value={{ dataSongs, song, setSong }}>
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
          <Player />
        </div>
      </GlobalStyle>
    </Songs.Provider>
  );
}

export default App;
