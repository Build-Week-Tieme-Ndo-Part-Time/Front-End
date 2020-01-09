import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseUrl : 'https://build-tieme.herokuapp.com/api/',
		headers : {
			Authorization : token,
		},
	});
};
