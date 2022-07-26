import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ReferIcon, playlist, data1 } from "../common";

const MySelf = () => {
  const obj = { data: [...data1] };
  return (
    <div className="zm-my-music">
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
              <button className="zm-btn button">
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </button>
            </div>
            <a href="tmp" className="more">
              Tất cả
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </a>
          </h3>
          <div className="content-playlist">
            {playlist.map((item, i) => (
              <div
                className={`item-playlist item-playlist-${item.id}`}
                data-target={item.id}
                key={i}
              >
                <div className="zm-card-img">
                  <div className="card-hover">
                    <div className="card-hover__content">
                      <div className="hover_lr">
                        <ReferIcon {...obj} />
                      </div>
                      <div className="hover__between">
                        <button className="zm-btn button">
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="icon"
                            title={item.title}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="item-playlist__img">
                    <img src={item.imageUrl} alt="" />
                  </figure>
                </div>
                <div className="content">
                  <span className="title">{item.title}</span>
                  <span className="subtitle">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
