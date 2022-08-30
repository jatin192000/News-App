import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import News from "./News";
import Services from "../Services/Services";
const Home = () => {
	let location = useLocation().pathname.slice(1);
	const [news, setNews] = useState(null);
	useEffect(() => {
		console.log(location);
		Services.getNews(location).then((data) => {
			if (data.status === "ok") {
				setNews(data.articles);
			}
		});
	}, [location]);
	return (
		<div>
			<h1 className="App">
				{location
					? location[0].toUpperCase() + location.slice(1) + " News"
					: "Headlines"}
			</h1>
			{news ? (
				news.map((newss) => {
					return (
						<News
							key={newss.url}
							source={newss.source}
							author={newss.author}
							title={newss.title}
							description={newss.description}
							url={newss.url}
							urlToImage={newss.urlToImage}
							publishedAt={newss.publishedAt}
							content={newss.content}
						/>
					);
				})
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Home;
