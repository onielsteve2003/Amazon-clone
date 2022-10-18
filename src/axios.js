import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-c9183.cloudfunctions.net/api'
    // "http://localhost:5001/clone-c9183/us-central1/api",
});

export default instance;


