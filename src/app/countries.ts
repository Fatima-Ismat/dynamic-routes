// app/countries.ts
type Country = {
     name: string;
     population: number;
     capital: string;
   };
   
   const countries: { [key: string]: Country } = {
     canada: { name: 'Canada', population: 38000000, capital: 'Ottawa' },
     pakistan: { name: 'Pakistan', population: 225000000, capital: 'Islamabad' },
     japan: { name: 'Japan', population: 125000000, capital: 'Tokyo' },
     australia: { name: 'Australia', population: 25600000, capital: 'Canberra' },
     germany: { name: 'Germany', population: 83000000, capital: 'Berlin' },
   };
   
   export default countries;
   