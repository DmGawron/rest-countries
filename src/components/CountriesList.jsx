import "./CountriesList.css";

export default function CountriesList({ searchedCountries }) {
	return (
		<ul className="countries-list">
			{searchedCountries.map((country) => (
				<li className="country" key={country.name}>
					<img src={country.flag} alt={country.name} />
					<div className="country-details">
						<h4>{country.name}</h4>
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
