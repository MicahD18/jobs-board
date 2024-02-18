import { Container } from "react-bootstrap";
import "../styles/Searchbar.css";
import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchProps> = ({ searchInput, setSearchInput }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

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
      <div className="search" style={{ width: "160px" }}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fill-rule="nonzero"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by location..."
          style={{
            backgroundColor: "var(--card-color)",
            color: "var(--light-text-color)",
            fontFamily: "Kumbh Sans",
          }}
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      {/* FILTER BY FULL TIME ONLY */}
      <div>
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "red",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Form.Check // prettier-ignore
            type="checkbox"
          />
          <p style={{ marginLeft: "15px" }}>Full Time Only</p>
        </Form>
      </div>
    </Container>
  );
};

export default SearchBar;
