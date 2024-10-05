// app/country/[capital]/page.tsx
import countries from '@/app/countries';

export default function CapitalDetails({ params }: { params: { capital: string } }) {
  // Ensure params.captial is defined
  if (!params?.capital) {
    return <h2>Capital not provided!</h2>;
  }

  const country = Object.values(countries).find(c => c.capital.toLowerCase() === params.capital.toLowerCase());

  if (!country) {
    return <h2>Country not found for this capital!</h2>;
  }

  return (
    <div>
      <h1>Country: {country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
