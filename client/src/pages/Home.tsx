import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import jobs from "../data.json";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <SearchBar />
      <div className="main">
        <div className="jobs-container">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
