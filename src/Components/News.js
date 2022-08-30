import React from "react";
import moment from "moment";
const News = (props) => {
	return props.url ? (
		<a className="news-card" href={props.url}>
			<div>
				<img
					src={props.urlToImage || "no-photo.png"}
					alt={props.author}
					className="news-card-img"
				/>
				<div className="news-content">
					<h3>{props.title}</h3>
				</div>

				<div className="news-bottom">
					<div className="news-source">{props.source.name}</div>
					<div className="news-time">
						{moment(props.publishedAt).format(
							"MMM Do YYYY, h:mm a"
						)}
					</div>
				</div>
			</div>
		</a>
	) : null;
};

export default News;
