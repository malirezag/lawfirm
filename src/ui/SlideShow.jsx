import Slider from "react-slick";
import useGetLawyers from "../features/lawyers/useGetLawyers";
import Lawyer from "./Lawyer";

function Arrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SlideShow() {
  const { lawyers } = useGetLawyers();

  var setting = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 1,
    autoplaySpeed: 4000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="">
      <p className="text-center mb-15 text-2xl sm:text-4xl text-grey-3 font-semibold mt-17 md:mt-0">
        وکلای برتر
      </p>
      <div className="sm:px-30  mb-20 mt-20 md:mt-0">
        <Slider {...setting} className="">
          {lawyers?.map((lawyer) => (
            <div key={lawyer.name}>
              <Lawyer lawyer={lawyer} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideShow;
