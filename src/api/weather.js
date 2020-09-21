import axios from "axios";

const weather = axios.create({
	baseURL:
		"//dataservice.accuweather.com",
});


export default weather;