import { useParams } from "react-router-dom";
import jobs from "../data.json";
import { useCallback, useEffect, useState } from "react";
import { Job } from "../models/job.model";

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
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <p>{job?.company}</p>
    </div>
  );
};

export default Detail;
