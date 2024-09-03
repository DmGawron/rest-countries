import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import FilterCountries from "./components/FilterCountries";
import CountriesList from "./components/CountriesList";
import useCountries from "./components/api/useCountries";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
	const [countriesRegion, setCountriesRegion] = useState("All");
	const [searchCountryQuery, setSearchCountryQuery] = useState("");
	const { countries, isLoading, error } = useCountries();
	const [searchedCountries, setSearchedCountries] = useState([]);

	const handleFilters = useCallback(() => {
		let filtererCountries = countries;
		let filtered = null;

		filtered = filtererCountries.filter((country) =>
			countriesRegion === "All" ? country : country.region === countriesRegion
		);

		if (searchCountryQuery !== "") {
			filtered = filtered.filter((country) =>
				country.name.common.toLowerCase().includes(searchCountryQuery)
			);
		}

		setSearchedCountries(filtered);
	}, [countries, countriesRegion, searchCountryQuery]);

	useEffect(
		function () {
			handleFilters();
		},
		[handleFilters]
	);

	function handleSearchCountry(query) {
		setSearchCountryQuery(query);
	}

	function handleFilterCoutries(continent) {
		setCountriesRegion(continent);
	}

	return (
		<section>
			<Header />
			<main>
				<div className="search-countries">
					<SearchInput
						searchCountryQuery={searchCountryQuery}
						onSearchCountry={handleSearchCountry}
					/>
					<FilterCountries
						countriesRegion={countriesRegion}
						onFilterCountries={handleFilterCoutries}
					/>
				</div>

				{error && <Error />}

				{isLoading ? (
					<Loader />
				) : (
					<CountriesList searchedCountries={searchedCountries} />
				)}
			</main>
		</section>
	);
}

export default App;
