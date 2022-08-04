import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import axios from "axios";
const Explore = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1048`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);
  // const image = [
  //   {
  //     original:
  //       "https://photo-zmp3.zmdcdn.me/banner/2/3/e/c/23ec7d8f7f30f5971febc3d474f24747.jpg",
  //   },
  //   {
  //     original:
  //       "https://photo-zmp3.zmdcdn.me/banner/2/a/8/d/2a8d0186475844d3576ee4bd27d30c13.jpg",
  //   },
  //   {
  //     original:
  //       "https://photo-zmp3.zmdcdn.me/banner/1/2/c/9/12c98072d52ce4ff035019f3ff080e7c.jpg",
  //   },
  // ];
  return (
    <div className="zm-main">
      <div className="wrapper-explore wrapper">
        <div className="gallery">
          {/* <ImageGallery items={image} autoPlay={true} /> */}
          {images ? <ImageGallery items={images} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Explore;
