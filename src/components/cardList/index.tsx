import { useEffect, useState } from "react";
import { Card } from "../card";
import "./cardList.css";
import { CountryType } from "../../interfaces/country.interface";

export const CardList = (): JSX.Element => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);

        if (filteredCountries.length === 0) {
          setFilteredCountries(data);
        }
      });
  }, []);

  const handleFilterClick = (e: React.MouseEvent<HTMLElement>) => {
    const continent = e.target.innerText;

    const filtereds = countries.filter((country: CountryType) => {
      if (country.continents.includes(continent)) {
        return country;
      }
    });

    if (filtereds.length !== 0) {
      setFilteredCountries(filtereds);
    } else {
      setFilteredCountries(countries);
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    const filteredByInput = countries.filter((country: CountryType) => {
      if (
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return country;
      }
    });

    setFilteredCountries(filteredByInput);
  };

  return (
    <section className="card-list container-fluid">
      <section className="card-list__filters d-flex align-items-center justify-content-between  gap-3 mb-4">
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Search a country... "
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="card-list__buttons d-flex">
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            All
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            Asia
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            Oceania
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            Europe
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            North America
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            South America
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleFilterClick(e)}>
            Africa
          </button>
        </div>
      </section>
      <div className="row">
        {filteredCountries.map((country, index) => {
          return (
            <article className="col col-md-2" key={index}>
              <Card country={country} />
            </article>
          );
        })}
      </div>
    </section>
  );
};
