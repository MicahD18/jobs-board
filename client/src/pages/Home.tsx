import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import jobs from "../data.json";
import "../styles/Home.css";

const Home = () => {
  const [jobsData, setJobsData] = useState(jobs);
  const [searchInput, setSearchInput] = useState("");

  const filterItems = (input: string) => {
    return jobsData.filter((item) => {
      return Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(input.toLowerCase())
      );
    });
  };

  const filteredItems = filterItems(searchInput);

  useEffect(() => {
    // Load saved search input from local storage
    const savedSearchInput = localStorage.getItem("searchInput");
    if (savedSearchInput) {
      setSearchInput(savedSearchInput);
    }
  }, []);

  useEffect(() => {
    // Save search input to local storage
    localStorage.setItem("searchInput", searchInput);
  }, [searchInput]);

  return (
    <div
      className="home-container"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="searchbar-container">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>

      <div className="jobs-container">
        {filteredItems.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
