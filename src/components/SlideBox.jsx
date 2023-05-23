import NextBtn from '../../public/images/icon-next.svg'
import PrevBtn from '../../public/images/icon-previous.svg'


const SlideBox = ({ customClass, largeImages, imageIndex, setImageIndex }) => {
  const prev = () => {
    setImageIndex((prevValue) => {
      if (imageIndex != 0) {
        return prevValue - 1;
      } else {
        return largeImages.length - 1;
      }
    });
  };

  const next = () => {
    setImageIndex((prevValue) => {
      if (imageIndex != largeImages.length - 1) {
        return prevValue + 1;
      } else {
        return 0;
      }
    });
  };
  return (
    <div className={`${customClass}`}>
      <button onClick={prev} className="prev-btn slide-btn">
        <img src={PrevBtn}/>
      </button>
      <img src={largeImages[imageIndex]} className="lrg-img w-100" />
      <button onClick={next} className="next-btn slide-btn">
        <img src={NextBtn}/>
      </button>
    </div>
  );
};

export default SlideBox;

