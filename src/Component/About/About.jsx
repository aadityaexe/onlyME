import s10 from "./About-assets/s10.png";
const About = () => {
  return (
    <section className="bg-gray-100 py-12 ml-5 mr-5 rounded-xl" id="About">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={s10}
              alt="About Us"
              className="rounded-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-gray-600 text-lg mb-4">
              We are a dedicated team of professionals with a passion for
              creating exceptional digital experiences. Our goal is to deliver
              high-quality products that meet the needs of our clients and help
              them achieve their business objectives.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Our expertise spans across various domains, and we pride ourselves
              on our ability to adapt and innovate. Join us on this journey as
              we continue to push the boundaries of what's possible.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md transform hover:scale-105 transition duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
