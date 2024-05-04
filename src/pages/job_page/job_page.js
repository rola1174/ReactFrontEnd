// job_page.js
import React from "react";
import { JobCard } from "./job_card/job_card"; // Note: Corrected component name to start with uppercase
import { data } from '../../services/job';

export const JobPage = () => {
    const getID = (id) => {
        console.log(id);
    }

    return (
        <div className="d-flex flex-wrap justify-content-between">
            {data.map((pr) => (
                <JobCard
                key={pr.id}
                id={pr.id}
                title={pr.title}
                employer={pr.employer}
                jobType={pr.jobType}
                jobBudget={pr.jobBudget}
                creationDate={pr.creationDate}
                description={pr.description}
                proposalCount={pr.proposalCount}
                image={pr.image}
                getID={getID}
              />
            ))}
        </div>
    );
};
