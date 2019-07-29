import axios from 'axios';

const getAllResourcesRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/resources/allResources')
    .then((res) => {
      const resources = res.data;
      resolve(resources);
    })
    .catch(err => reject(err));
});

export default {
  getAllResourcesRequest,
};
