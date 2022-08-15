import { Fragment } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { fakeIconHeaderRight, fakeIconHeaderLeft } from "../common";
const Header = (props) => {
  const user = undefined;

  return (
    <Fragment>
      <header className="header zm-header">
        <div className="header__main">
          <div className="header__main__left">
            {fakeIconHeaderLeft.map((item) => (
              <button className="zm-btn arrow-btn" key={item.id}>
                <i className={`icon ${item.name}`}></i>
              </button>
            ))}
            <div className="header__main__left__search">
              <button className="zm-btn btn-search">
                <i className="icon bx bx-search"></i>
              </button>
              <div className="header__main__left__search__input">
                <input
                  type="text"
                  placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                />
              </div>
            </div>
          </div>
          <div className="header__main__right">
            {fakeIconHeaderRight.map((item, i) => (
              <div className="setting-item" key={i}>
                <Tippy content={item.title}>
                  <i className={`icon ${item.icon} `}></i>
                </Tippy>
              </div>
            ))}
            <div className="login-container">
              <figure className="login-container__img">
                {user === undefined ? (
                  <img
                    src="https://avatar.talk.zdn.vn/default"
                    alt="không có ảnh"
                  />
                ) : (
                  <img src={user.src} alt={user.alt}></img>
                )}
              </figure>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
