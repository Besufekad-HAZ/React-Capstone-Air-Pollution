import {
  Link, NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import Country from './Country';

import '../stylesheet/Continent.css';

const Continent = () => {
  const { country } = useParams();

  const { countries } = useSelector(({ countries }) => ({ countries }));

  const countriesArr = useMemo(
    () => countries.filter(
      (element) => element.region === (country === 'America' ? 'Americas' : country),
    ),
    [countries, country],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="continent">
      <nav className="continents-nav">
        <Link to="/">
          <i className="fa-solid fa-chevron-left" />
          Continents
        </Link>
        <h2>Countries</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <section className="countries">
        <header>
          <img
            alt={country}
            src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.toLowerCase()}/vector.svg`}
          />
          <h3 className="country_name">{country}</h3>
        </header>
        <h4>POPULATION</h4>
        <div className="countries_Container">
          {countriesArr.map((country) => (
            <NavLink
              key={country.cca2}
              to={`${country.cca2.toLowerCase()}/${country.latlng[0]}/${
                country.latlng[0]
              }/${country.name.common}`}
            >
              <article className="itemCountry">
                <img
                  alt={country.cca2}
                  src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.cca2.toLowerCase()}/vector.svg`}
                />
                <h3>{country.name.common.toUpperCase()}</h3>
                <p>{country.population}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </section>
      <Routes>
        <Route path=":info/:lat/:lon/:name" element={<Country />} />
      </Routes>
    </main>
  );
};

export default Continent;
