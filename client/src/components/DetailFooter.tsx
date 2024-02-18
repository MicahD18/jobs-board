import { Job } from "../models/job.model";

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
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Kumbh Sans",
        }}
      >
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
