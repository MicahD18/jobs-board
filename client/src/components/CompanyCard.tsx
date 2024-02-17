import { Image } from "react-bootstrap";
import "../styles/CompanyCard.css";

interface CardProps {
  company: string | undefined;
  logo: string | undefined;
}

const CompanyCard: React.FC<CardProps> = (props) => {
  return (
    <div className="card-container">
      <div id="company-card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Image className="image" src={props.logo} />
          <div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {props.company}
            </p>
            <p style={{ fontSize: "12px", color: "var(--light-text-color)" }}>
              {props.company}.com
            </p>
          </div>
        </div>
        <button className="light-button">Company Site</button>
      </div>
    </div>
  );
};

export default CompanyCard;
