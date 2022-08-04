import Tippy from "@tippyjs/react";
import { toast } from "react-toastify";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
const ReferIcon = (props) => {
  const handleClick = (e) => {
    toast.error("Xin lỗi chức năng chưa cập nhật!");
  };
  return (
    <>
      {props.status === true ? (
        <>
          <div className="level">
            {props?.data.map((item) => (
              <div className="level-item" key={item.id}>
                <Tippy content={item.title}>
                  <button className="zm-btn zm-tooltip-btn is-hover-circle button">
                    <i className={`icon ${item.icon}`}></i>
                  </button>
                </Tippy>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="level">
            {props?.data.map((item) => (
              <div className="level-item" key={item.id}>
                <Tippy content={item.title}>
                  <button
                    className="zm-btn zm-tooltip-btn button"
                    onClick={() => handleClick(item)}
                  >
                    <i className={`icon ${item.icon}`}></i>
                  </button>
                </Tippy>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ReferIcon;
