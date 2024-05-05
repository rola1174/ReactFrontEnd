import React, { useState } from "react";
import "./review_proposals.css";

export const ReviewProposals = () => {
  const [proposals, setProposals] = useState([]);

  // Sample data 
  const initialProposals = [
    { id: 1, name: "John Doe", experience: "5 years", status: "Pending" },
    { id: 2, name: "Jane Smith", experience: "3 years", status: "Pending" },
    { id: 3, name: "Bob Johnson", experience: "7 years", status: "Pending" }
  ];

  useState(() => {
    // Simulating fetching proposals from the backend
    setProposals(initialProposals);
  }, []);

  const handleAccept = (id) => {
    const updatedProposals = proposals.map((proposal) => {
      if (proposal.id === id) {
        return { ...proposal, status: "Accepted" };
      }
      return proposal;
    });
    setProposals(updatedProposals);
  };

  const handleReject = (id) => {
    const updatedProposals = proposals.map((proposal) => {
      if (proposal.id === id) {
        return { ...proposal, status: "Rejected" };
      }
      return proposal;
    });
    setProposals(updatedProposals);
  };

  return (
    <div className="review-proposals">
      <h2 className="title">Review Proposals</h2>
      {proposals.map((proposal) => (
        <div className="proposal" key={proposal.id}>
          <h3>{proposal.name}</h3>
          <p>Experience: {proposal.experience}</p>
          <p>Status: {proposal.status}</p>
          <div className="buttons">
            <button onClick={() => handleAccept(proposal.id)}>Accept</button>
            <button onClick={() => handleReject(proposal.id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};