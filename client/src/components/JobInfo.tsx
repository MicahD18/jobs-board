import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/JobInfo.css";

interface InfoProps {
  postedAt: string | undefined;
  contract: string | undefined;
  company: string | undefined;
  position?: string | undefined;
  location?: string | undefined;
}

const JobInfo: React.FC<InfoProps> = (props) => {
  const CompanyText = () => {
    return (
      <Card.Text
        style={{ color: "var(--light-text-color)", fontFamily: "Kumbh Sans" }}
      >
        {props.company}
      </Card.Text>
    );
  };

  const LocationText = () => {
    return (
      <Card.Text
        style={{
          color: "#5964e0",
          fontFamily: "Kumbh Sans",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {props.location}
      </Card.Text>
    );
  };

  return (
    <div>
      <Container className="details">
        <Card.Text
          style={{
            color: "var(--light-text-color)",
            fontFamily: "Kumbh Sans",
          }}
        >
          {props.postedAt}
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
          {props.contract}
        </Card.Text>
      </Container>
      <Card.Title
        style={{
          color: "var(--text-color)",
          fontFamily: "Kumbh Sans",
          fontWeight: "bold",
        }}
      >
        {props.company ? (
          <Link to={`/details/${props.company}`} className="link">
            {props.position}
          </Link>
        ) : (
          <Card.Text style={{ fontSize: "24px" }}>{props.position}</Card.Text>
        )}
      </Card.Title>
      {props.company ? <CompanyText /> : <LocationText />}
      {/* <Card.Text
        style={{ color: "var(--light-text-color)", fontFamily: "Kumbh Sans" }}
      >
        {props.company}
      </Card.Text> */}
    </div>
  );
};

export default JobInfo;
