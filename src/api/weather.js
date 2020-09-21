import axios from "axios";

const weather = axios.create({
	baseURL:
		"http://dataservice.accuweather.com",
});


export default weather;