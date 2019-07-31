import axios from 'axios';

const getAllResourcesRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/studentresources/allResources')
    .then((res) => {
      const resources = res.data;
      resolve(resources);
    })
    .catch(err => reject(err));
});

const postResourceRequest = addNewResource => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/studentresources/register', addNewResource)
    .then((res) => {
      const resources = res.data;
      resolve(resources);
    })
    .catch(err => reject(err));
});

const deleteSingleResource = resourceId => axios.delete(`http://localhost:64175/api/studentresources/deleteresource/${resourceId}`);

export default {
  getAllResourcesRequest,
  postResourceRequest,
  deleteSingleResource,
};
