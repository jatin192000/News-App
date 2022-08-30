import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Components/Home";
function App() {
	return (
		<Router className="main">
			<div className="nav">
				<div className="nav-menu">
					<Link to="/" className="nav-button">
						Headlines
					</Link>
					<Link to="/business" className="nav-button">
						Business
					</Link>
					<Link to="/entertainment" className="nav-button">
						Entertainment
					</Link>
					<Link to="/health" className="nav-button">
						Health
					</Link>
					<Link to="/science" className="nav-button">
						Science
					</Link>
					<Link to="/sports" className="nav-button">
						Sports
					</Link>
					<Link to="/technology" className="nav-button">
						Technology
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/business" element={<Home />} />
					<Route path="/entertainment" element={<Home />} />
					<Route path="/health" element={<Home />} />
					<Route path="/science" element={<Home />} />
					<Route path="/sports" element={<Home />} />
					<Route path="/technology" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
