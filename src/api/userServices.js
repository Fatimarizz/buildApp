import axios from 'axios';
import { BASE_URL } from '../constants/AppConstants';


export { contactService,createCheckout };

async function contactService(data) {
  try {
    const response = await axios.post(`${BASE_URL}user/contact-us`, data);
    return response;
  } catch (err) {
    return err;
  }
}

async function createCheckout(data) {

  try {
    const response = await axios.post(
      `${BASE_URL}user/create-checkout-session`,
      { template: data }
    );
    return response;
  } catch (err) {
    return err;
  }
}
