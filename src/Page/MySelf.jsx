import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ReferPlayLists } from "../common";
import { playlist } from "../common";
const navBar = [
  { id: 0, title: "Bài hát", path: "/songs" },
  { id: 1, title: "podcast", path: "/podcast" },
  { id: 2, title: "album", path: "/album" },
  { id: 3, title: "mv", path: "/mv" },
];
const MySelf = () => {
  const headerRef = useRef(null);
  const [active, setActive] = useState(0);
  const handleActive = (e, id) => {
    setActive(id);
    e.preventDefault();
  };

  const handleAddPlaylist = () => {
    toast.error("Xin lỗi chức năng chưa cập nhật!");
  };

  useEffect(() => {
    let navHeader = headerRef.current;
    let backgroundHeader = document.querySelector(".zm-header");
    navHeader.addEventListener("scroll", (e) => {
      if (e.target.scrollTop >= 20) {
        backgroundHeader.classList.add("is-sticky");
      } else {
        backgroundHeader.classList.remove("is-sticky");
      }
    });
  }, []);
  return (
    <div className="scroll">
      <div className="scroll-bar" style={{ marginTop: "0" }} ref={headerRef}>
        <div className="zm-main">
          <div className="wrapper">
            <div className="wrapper-header">
              <div className="text">Thư viện</div>
              <button className="zm-btn button">
                <FontAwesomeIcon icon={faPlay} className="icon" />
              </button>
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <div style={{ display: "flex", alignIitems: "center" }}>
                  Play list
                  <button className="zm-btn button" onClick={handleAddPlaylist}>
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                  </button>
                </div>
                <a href="/allPlayList" className="more">
                  Tất cả
                  <FontAwesomeIcon icon={faAngleRight} className="icon" />
                </a>
              </h3>
              <div className="content-playlist">
                {playlist.map((item, i) => (
                  <ReferPlayLists item={item} key={i} />
                ))}
              </div>
            </div>
            <div className="wrapper-bottom">
              <nav className="zm-navbar">
                <ul className="zm-navbar__menu">
                  {navBar.map((nav) => (
                    <li className="zm-navbar__item" key={nav.id}>
                      <div
                        className={clsx(
                          `navbar-link`,
                          `${active === nav.id ? "active" : ""}`
                        )}
                        onClick={() => handleActive(nav.id)}
                      >
                        <a href={nav.path}>{nav.title}</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
