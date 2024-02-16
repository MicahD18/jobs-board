import { Card, Container } from "react-bootstrap";
import "../styles/JobCard.css";
import { Link } from "react-router-dom";

interface Props {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  job: any;
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
            color: "var(--light-text-color)",
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
