import ProgressContainer from "./Component/Progress/ProgressContainer/ProgressContainer";

const MultiProgressContainer = () => {
  const progressData = [
    { percentage: 75, title: "Project Completion" },
    { percentage: 50, title: "Task Progress" },
    { percentage: 90, title: "Sales Target" },
    { percentage: 30, title: "Learning Goal" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {progressData.map((item, index) => (
        <ProgressContainer
          key={index}
          percentage={item.percentage}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default MultiProgressContainer;
