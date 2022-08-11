import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  ReferPlayLists,
  playlist2,
  playlist3,
  SliderCarousel,
} from "../common";
const Explore = () => {
  return (
    <div className="zm-main">
      <div className="scroll">
        <div className="wrapper-explore wrapper">
          <div className="slider-carousel">
            <SliderCarousel />
          </div>
          <div className="wrapper-content">
            <h3 className="content-title">
              <div style={{ display: "flex", alignIitems: "center" }}>
                Gần Đây
              </div>
            </h3>
            <div className="content-playlist">
              {playlist2.map((item, i) => (
                <ReferPlayLists item={item} key={i} />
              ))}
            </div>
          </div>
          <div className="wrapper-content">
            <h3 className="content-title">
              <div style={{ display: "flex", alignIitems: "center" }}>
                Mới Phát Hành
              </div>
              <a href="/allPlayList" className="more">
                Tất cả
                <FontAwesomeIcon icon={faAngleRight} className="icon" />
              </a>
            </h3>
          </div>
          <div className="wrapper-content">
            <h3 className="content-title">
              <div style={{ display: "flex", alignIitems: "center" }}>
                Lựa chọn hôm nay
              </div>
            </h3>
            <div className="content-playlist">
              {playlist3.map((item, i) => (
                <ReferPlayLists item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
