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
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="main">
        <div className="jobs-container">
          {filteredItems.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
