import { Card, Image } from "react-bootstrap";
import "../styles/JobCard.css";
import { Job } from "../models/job.model";
import JobInfo from "../components/JobInfo";

interface Props {
  job: Job | null;
}

const JobCard: React.FC<Props> = (props) => {
  return (
    <Card
      className="card"
      style={{
        backgroundColor: "var(--card-color)",
        color: "var(--text-color)",
      }}
    >
      <Image src={props.job?.logo} style={{ marginTop: "-36px" }} />
      <Card.Body style={{ lineHeight: "35px" }}>
        <JobInfo
          postedAt={props.job?.postedAt}
          contract={props.job?.contract}
          company={props.job?.company}
          position={props.job?.position}
          location={undefined}
        />
        <Card.Text
          style={{
            color: "#5964e0",
            fontFamily: "Kumbh Sans",
            marginTop: "25px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {props.job?.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
