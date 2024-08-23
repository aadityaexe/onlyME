import CircularProgress from "../CircularProgress/CircularProgress";

const ProgressContainer = ({ percentage, title }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2 text-[#160404]">{title}</h3>
      <CircularProgress percentage={percentage} />
    </div>
  );
};

const MultiProgressContainer = ({ progressData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {progressData.map((data, index) => (
        <ProgressContainer
          key={index}
          percentage={data.percentage}
          title={data.title}
        />
      ))}
    </div>
  );
};

export default MultiProgressContainer;
