import { Container } from "react-bootstrap";
import "../styles/Searchbar.css";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import jobs from "../data.json";
import { Job } from "../models/job.model";

interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  fullTimeOnly: boolean;
  setFullTimeOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchProps> = ({
  searchInput,
  setSearchInput,
  selectedLocation,
  setSelectedLocation,
  fullTimeOnly,
  setFullTimeOnly,
}) => {
  const [locations, setLocations] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleFullTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullTimeOnly(e.target.checked);
  };

  const handleLocationFilter = useCallback(() => {
    const newLocations: string[] = [];

    jobs.forEach((job: Job) => {
      if (job.location && !newLocations.includes(job.location)) {
        newLocations.push(job.location);
      }
    });
    setLocations(newLocations);
  }, []);

  useEffect(() => {
    handleLocationFilter();
  }, [handleLocationFilter]);

  return (
    <Container
      className="search-container"
      style={{
        backgroundColor: "var(--card-color)",
        color: "var(--text-color)",
      }}
    >
      {/* SEARCH */}
      <div className="search" style={{ width: "275px" }}>
        <svg width="30" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          style={{
            backgroundColor: "var(--card-color)",
            color: "var(--light-text-color)",
            fontFamily: "Kumbh Sans",
          }}
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      {/* FILTER BY LOCATION */}
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

      {/* FILTER BY FULL TIME ONLY */}
      <div>
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100px",
          }}
        >
          <Form.Check // prettier-ignore
            type="checkbox"
            onChange={handleFullTimeChange}
            checked={fullTimeOnly}
            className="checkbox"
          />
          <p
            style={{
              marginLeft: "0px",
              fontFamily: "Kumbh Sans",
              fontSize: "14px",
            }}
          >
            Full Time
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default SearchBar;
