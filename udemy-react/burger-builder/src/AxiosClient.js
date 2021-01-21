import axios from "axios";


const instance = axios.create({
    baseURL: "https://udemy-react-94dcc-default-rtdb.firebaseio.com/"
});

export default instance;