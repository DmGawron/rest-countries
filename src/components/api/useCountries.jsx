import { useEffect, useState } from "react";
export default function useCountries() {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(function () {
		const setData = async function () {
			try {
				setIsLoading(true);
				const res = await fetch("../../data.json");
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
