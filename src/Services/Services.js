/* eslint-disable import/no-anonymous-default-export */
export default {
	getNews: async (type = "") => {
		var response;
		if (type === "") {
			response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=in&apiKey=d61159f079c8450b872cf6006833d0c4`
			);
		} else {
			response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=d61159f079c8450b872cf6006833d0c4`
			);
		}
		return response.json().then((data) => data);
	},
};
