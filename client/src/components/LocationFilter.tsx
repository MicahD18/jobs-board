import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface FilterProps {
  locations: string[];
  handleLocationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedLocation: string;
}

const LocationFilter: React.FC<FilterProps> = ({
  locations,
  handleLocationChange,
  selectedLocation,
}) => {
  return (
    <div className="search" style={{ width: "200px" }}>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "15px" }}
      >
        <path
          d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
          fill="#5964E0"
          fillRule="nonzero"
        />
      </svg>
      <Form.Select
        className="form-select"
        aria-label="Default select example"
        style={{ border: "none", fontFamily: "Kumbh Sans" }}
        onChange={handleLocationChange}
        value={selectedLocation || ""}
      >
        <option>All</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default LocationFilter;
