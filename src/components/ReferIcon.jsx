import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReferIcon = (props) => {
  const handleClick = () => {
    toast.error("Xin lỗi chức năng chưa cập nhật!");
  };
  return (
    <div className="level">
      {props?.data.map((item) => (
        <div className="level-item" key={item.id}>
          <Tippy content={item.title}>
            <button className="zm-btn zm-tooltip-btn" onClick={handleClick}>
              <i className={`icon ${item.icon}`}></i>
            </button>
          </Tippy>
        </div>
      ))}
    </div>
  );
};

export default ReferIcon;
