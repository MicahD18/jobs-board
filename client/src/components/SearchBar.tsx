import { Container } from "react-bootstrap";
import "../styles/Searchbar.css";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import jobs from "../data.json";
import { Job } from "../models/job.model";
import useWindowDimensions from "../hooks/useWindowDimensions";
import FilterModal from "./FilterModal";
import FullTimeFilter from "./FullTimeFilter";
import LocationFilter from "./LocationFilter";

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
  const [show, setShow] = useState(false); // for filter modal
  const { width } = useWindowDimensions();

  const handleShow = () => setShow(true); // for filter modal

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    localStorage.setItem("selectedLocation", e.target.value);
  };

  const handleFullTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullTimeOnly(e.target.checked);
    const fullTime = String(e.target.checked);

    localStorage.setItem("fullTime", fullTime);
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
    // Load saved selected location from local storage
    const savedSelectedLocation = localStorage.getItem("selectedLocation");
    const savedFullTime = localStorage.getItem("fullTime");
    const fullTime = Boolean(savedFullTime);

    if (savedSelectedLocation) setSelectedLocation(savedSelectedLocation);
    if (fullTime) setFullTimeOnly(fullTime);
  }, [setFullTimeOnly, setSelectedLocation]);

  useEffect(() => {
    handleLocationFilter();
  }, [handleLocationFilter]);

  return (
    <div>
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
            placeholder="Filter by title, companies, expertise"
            style={{
              backgroundColor: "var(--card-color)",
              color: "var(--light-text-color)",
              fontFamily: "Kumbh Sans",
            }}
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>

        {width > 791 ? (
          <div id="filter-container">
            {/* FILTER BY LOCATION */}
            <LocationFilter
              locations={locations}
              handleLocationChange={handleLocationChange}
              selectedLocation={selectedLocation}
            />
            {/* FILTER BY FULL TIME ONLY */}
            <FullTimeFilter
              handleFullTimeChange={handleFullTimeChange}
              fullTimeOnly={fullTimeOnly}
            />
          </div>
        ) : (
          <button id="filter-btn" onClick={handleShow}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                fill="var(--filter-icon)"
                fillRule="nonzero"
              />
            </svg>
          </button>
        )}
      </Container>

      {width < 791 ? (
        <FilterModal
          show={show}
          setShow={setShow}
          locations={locations}
          handleLocationChange={handleLocationChange}
          selectedLocation={selectedLocation}
          handleFullTimeChange={handleFullTimeChange}
          fullTimeOnly={fullTimeOnly}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
