import { useParams } from "react-router-dom";
import jobs from "../data.json";
import { useCallback, useEffect, useState } from "react";
import { Job } from "../models/job.model";
import CompanyCard from "../components/CompanyCard";

import "../styles/Detail.css";
import DetailCard from "../components/DetailCard";
import DetailFooter from "../components/DetailFooter";

const Detail: React.FC = () => {
  const params = useParams();
  const company = String(params.company);

  const [job, setJob] = useState<Job | null>(null);

  const handleJobFilter = useCallback(() => {
    jobs.map((item: Job) => {
      if (item.company === company) {
        setJob(item);
        return;
      }
    });
  }, [company]);

  useEffect(() => {
    handleJobFilter();
  }, [handleJobFilter]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="company-container">
        <CompanyCard company={job?.company} logo={job?.logo} />
      </div>
      <div className="detail-container">
        <DetailCard job={job} />
      </div>
      <DetailFooter job={job} />
    </div>
  );
};

export default Detail;
