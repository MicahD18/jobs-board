import { Card } from "react-bootstrap";
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
      <Card.Body>
        <Card.Text style={{ color: "var(--light-text-color)" }}>
          {props.job.postedAt}
        </Card.Text>
        <Card.Title style={{ color: "var(--text-color)" }}>
          <Link to={`/details/${props.index}`} className="link">
            {props.job.position}
          </Link>
        </Card.Title>
        <Card.Text style={{ color: "var(--light-text-color)" }}>
          {props.job.company}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
