import axios from 'axios';

const postCustomerProductRequest = (customerProductInfo) => axios.post(`http://localhost:50319/api/customerProduct/register`, customerProductInfo);

const getAllSurveysRequest = () => new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:64175/api/surveyanswer/allSurveys`)
      .then((res) => {
        let customerProducts = res.data;
        resolve(customerProducts);
      })
      .catch(err => reject(err));
  });

export default {
    getAllSurveysRequest,
}