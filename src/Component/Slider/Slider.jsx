import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidera = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const slides = [
    "Aditya",
    "Another Text",
    "More Text",
    "Even More Text",
    "Last Text",
    "Additional Text",
  ];

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Text Slider</h2>
      <Slider {...settings} className="w-full max-w-4xl">
        {slides.map((text, index) => (
          <div
            key={index}
            className="p-4 flex items-center justify-center bg-gray-200 rounded-lg shadow-lg"
          >
            <p className="text-lg font-semibold">{text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidera;
