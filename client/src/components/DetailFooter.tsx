import { Job } from "../models/job.model";
import "../styles/DetailFooter.css";

interface DetailProps {
  job: Job | null;
}

const DetailFooter: React.FC<DetailProps> = ({ job }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "85px",
        backgroundColor: "var(--card-color)",
        position: "fixed",
        bottom: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div id="detail-footer">
        <div>
          <p style={{ fontWeight: "bold" }}>{job?.position}</p>
          <p style={{ color: "var(--light-text-color)", marginTop: "5px" }}>
            {job?.company}
          </p>
        </div>
        <button className="dark-button">Apply Now</button>
      </div>
    </div>
  );
};

export default DetailFooter;
