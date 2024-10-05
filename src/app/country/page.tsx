// /app/country/[name]/page.tsx
import countries from '@/app/countries';

export default function CountryDetails({ params }: { params: { name: string } }) {
  const country = countries[params.name.toLowerCase()];

  if (!country) {
    return <h2>Country not found!</h2>;
  }

  return (
    <div>
      <h1>Country: {country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
