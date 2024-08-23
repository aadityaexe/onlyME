/* eslint-disable react/prop-types */
import CircularProgress from "../CircularProgress/CircularProgress";

const ProgressContainer = ({ percentage, title }) => {
  return (
    <div className="flex flex-col justify-center items-center p-6shadow-lg rounded-lg w-60 h-640">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">{title}</h3>
      <CircularProgress percentage={percentage} />
    </div>
  );
};

export default ProgressContainer;
