// /app/country/[capital]/page.tsx
import countries from '@/app/countries';

export default function CapitalDetails({ params }: { params: { capital: string } }) {
  // Find the country based on the capital provided in the URL
  const country = Object.values(countries).find(
    (c) => c.capital.toLowerCase() === params.capital.toLowerCase()
  );

  // If the country with the given capital is not found, return an error message
  if (!country) {
    return <h2>Capital not found!</h2>;
  }

  // Display country details if found
  return (
    <div>
      <h1>Country: {country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
