import { Card, Container, Image } from "react-bootstrap";
import "../styles/JobCard.css";
import { Link } from "react-router-dom";
import { Job } from "../models/job.model";

interface Props {
  job: Job;
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
      <Image src={props.job.logo} style={{ marginTop: "-36px" }} />
      <Card.Body style={{ lineHeight: "35px" }}>
        <Container className="details">
          <Card.Text
            style={{
              color: "var(--light-text-color)",
              fontFamily: "Kumbh Sans",
            }}
          >
            {props.job.postedAt}
          </Card.Text>
          <div
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: "var(--light-text-color)",
              borderRadius: "25px",
            }}
          ></div>
          <Card.Text
            style={{
              color: "var(--light-text-color)",
              fontFamily: "Kumbh Sans",
            }}
          >
            {props.job.contract}
          </Card.Text>
        </Container>
        <Card.Title
          style={{
            color: "var(--text-color)",
            fontFamily: "Kumbh Sans",
            fontWeight: "bold",
          }}
        >
          <Link to={`/details/${props.job.company}`} className="link">
            {props.job.position}
          </Link>
        </Card.Title>
        <Card.Text
          style={{ color: "var(--light-text-color)", fontFamily: "Kumbh Sans" }}
        >
          {props.job.company}
        </Card.Text>
        <Card.Text
          style={{
            color: "#5964e0",
            fontFamily: "Kumbh Sans",
            marginTop: "25px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {props.job.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
