import axios from 'axios';

export default axios.create({
  baseURL: "https://laravel.lukas-cornille.be/api",
  responseType: "json"
});
