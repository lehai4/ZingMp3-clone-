import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const ReferIcon = (props) => {
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
                  <button className="zm-btn zm-tooltip-btn button">
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
