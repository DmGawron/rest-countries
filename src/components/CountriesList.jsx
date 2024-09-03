import "./CountriesList.css";

export default function CountriesList({ searchedCountries }) {
	return (
		<ul className="countries-list">
			{searchedCountries.map((country, i) => (
				<li className="country" key={i}>
					<img src={country.flags.svg} alt={country.name.common} />
					<div className="country-details">
						<h4>{country.name.common}</h4>
						<p>
							<span>Population:</span> {country.population}
						</p>
						<p>
							<span>Region:</span> {country.region}
						</p>
						<p>
							<span>Capital:</span> {country.capital}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
