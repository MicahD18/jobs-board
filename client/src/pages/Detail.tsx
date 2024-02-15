import { useParams } from "react-router-dom";
import jobs from "../data.json";

const Detail: React.FC = () => {
  const params = useParams();
  const index = Number(params.index);

  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <p>{jobs[index].company}</p>
    </div>
  );
};

export default Detail;
