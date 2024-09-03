import { useEffect, useState } from "react";
// import data from "../../data.json";
export default function useCountries() {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(function () {
		const setData = async function () {
			try {
				setIsLoading(true);
				const res = await fetch("https://restcountries.com/v3.1/all");
				// const res = await fetch("./data.json");
				const data = await res.json();
				setCountries(data);
				console.log(data);
				setError(false);
			} catch (err) {
				setError(true);
				console.log(err);
			} finally {
				// setError(false);
				setIsLoading(false);
			}
		};
		setData();
	}, []);

	return { countries, isLoading, error };
}
