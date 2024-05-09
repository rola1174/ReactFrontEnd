
import axios from "axios";

const AcceptProposals = (proposalId, removeJob) => {
  axios
    .post(`https://localhost:7163/api/employer/acceptProposal/${proposalId}`)
    .then((response) => {
      
      removeJob();
    })
    .catch((error) => {
    });
};

export default AcceptProposals;