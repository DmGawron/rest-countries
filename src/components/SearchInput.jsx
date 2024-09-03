import "./SearchInput.css";

export default function SearchInput({ searchCountryQuery, onSearchCountry }) {
	return (
		<div className="input-container">
			<i className="fa-solid fa-magnifying-glass"></i>
			<input
				type="text"
				placeholder="Search for a country..."
				value={searchCountryQuery}
				onChange={(e) => onSearchCountry(e.target.value)}
			/>
		</div>
	);
}
