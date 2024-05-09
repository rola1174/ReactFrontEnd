

import axios from "axios";

const RejectProposals = (proposalId) => {
  axios
    .post(`https://localhost:7163/api/employer/rejectProposal/${proposalId}`)
    .then((response) => {
    })
    .catch((error) => {
    });
};

export default RejectProposals;