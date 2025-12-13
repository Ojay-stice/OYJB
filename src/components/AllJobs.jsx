import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import JobCard from "./JobCard";

function AllJobs({ showAll = false }) {
  const [jobs, setjob] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobs", {
          method: "GET",
          headers: { "Content-Type": "Application/json" },
        });
        if (!response.ok) {
          throw new Error("an error fetching data jobs");
        }
        const data = await response.json();
        // console.log(data)
        setjob(data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("hello world");
    console.log(jobs);

    fetchJobs();
  }, []);
  return (
    <>
      <section>
        <div className="flex flex-col gap-5 px-10 py-5 ">
          {showAll
            ? jobs.slice(0, 5).map((job) => <JobCard job={job} key={job._id} />)
            : jobs.map((job) => <JobCard job={job} key={job._id} />)}
        </div>
        //{" "}
      </section>
    </>
  );
}

export default AllJobs;
