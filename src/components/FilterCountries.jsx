import "./FilterCountries.css";

export default function FilterCountries({
	countriesRegion,
	onFilterCountries,
}) {
	// const [continent, setContinent] = useState("All");

	// function handleSetContinent(e) {
	// 	setContinent(e);
	// 	onFilterCountries(continent);
	// }
	// console.log(continent);

	return (
		<select
			name="continents"
			className="choose-continent"
			value={countriesRegion}
			// value={continent}
			// onChange={(e) => handleSetContinent(e.target.value)}
			onChange={(e) => onFilterCountries(e.target.value)}
		>
			<option value="filter" hidden>
				Filter by Region
			</option>
			<option value="All">All</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
}
