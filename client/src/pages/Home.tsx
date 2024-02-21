import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import jobs from "../data.json";
import "../styles/Home.css";

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [fullTimeOnly, setFullTimeOnly] = useState<boolean>(false);

  const filterItems = (input: string, location: string, fullTime: boolean) => {
    return jobs.filter((item) => {
      // if any object matches the input, return those objects that match
      const matchesSearch = Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(input.toLowerCase())
      );
      // if location is "All", return all jobs postings that match ONLY the search input
      // Else return the job postings that match the location AND the search input
      const matchesLocation =
        location === "All" ? jobs : item.location === location;
      // same logic applies to full time only filter
      const isFullTimeOnly = fullTime ? item.contract === "Full Time" : jobs;

      return matchesSearch && matchesLocation && isFullTimeOnly;
    });
  };

  const filteredItems = filterItems(
    searchInput,
    selectedLocation,
    fullTimeOnly
  );

  useEffect(() => {
    // Load saved search input from local storage
    const savedSearchInput = sessionStorage.getItem("searchInput");

    if (savedSearchInput) setSearchInput(savedSearchInput);
  }, []);

  useEffect(() => {
    // Save search input to local storage
    sessionStorage.setItem("searchInput", searchInput);
  }, [searchInput]);

  return (
    <div
      className="home-container"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="searchbar-container">
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          fullTimeOnly={fullTimeOnly}
          setFullTimeOnly={setFullTimeOnly}
        />
      </div>
      {filteredItems.length > 0 ? (
        <div className="jobs-container">
          {filteredItems.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div>
          <p
            style={{
              color: "var(--light-text-color)",
              fontFamily: "Kumbh Sans",
              marginTop: "100px",
            }}
          >
            No
            {searchInput === ""
              ? ` Full Time positions in ${selectedLocation} currently`
              : ` results for "${searchInput}"`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
