import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<h1>Where in the world?</h1>
			<button className="mode-btn">
				<i className="fa-regular fa-moon"></i> Dark Mode
			</button>
		</header>
	);
}
