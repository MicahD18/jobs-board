import { Job } from "../models/job.model";
import JobInfo from "./JobInfo";
import "../styles/DetailCard.css";

interface DetailProps {
  job: Job | null;
}

const DetailCard: React.FC<DetailProps> = ({ job }) => {
  return (
    <div className="detail-card-container">
      <div id="info-container">
        <div id="job-info-container">
          <JobInfo
            postedAt={job?.postedAt}
            contract={job?.contract}
            position={job?.position}
            location={job?.location}
            company={undefined}
          />
        </div>
        <button className="dark-button">Apply Now</button>
      </div>

      <div>
        <p className="detail-text" style={{ marginTop: "25px" }}>
          {job?.description}
        </p>
        <h3 style={{ marginTop: "25px" }}>Requirements</h3>
        <p className="detail-text" style={{ marginTop: "25px" }}>
          {job?.requirements.content}
        </p>
        <ul style={{ padding: "25px" }}>
          {job?.requirements.items.map((item) => (
            <li key={item} className="detail-text">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailCard;
