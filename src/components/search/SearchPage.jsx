import React, { useMemo, useState } from "react";
import { useLocation } from "react-router";
// import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../ui/heroes/HeroCard";
import querystring from "query-string";
import { getHeroesByName } from "../../selectors/getHeroByName";

export const SearchPage = ({ history }) => {
  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);
  const [formValues, handlerInputChange, reset] = useForm({
    search: q,
  });

  const { search } = formValues;
  //   const [heroesFilter, setHeroes] = useState(getHeroesByName(search));
  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    // if (search.length >= 3) {
    //   const data = heroes.filter((hero) =>
    //     //   hero.superhero.trim().toLowerCase().startsWith(search.toLowerCase())
    //     hero.superhero.toLowerCase().includes(search.toLowerCase())
    //   );
    //   setHeroes(data);
    //   reset();
    // }
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              onChange={handlerInputChange}
              value={search}
              type="text"
              name="search"
              placeholder="Find your hero"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-info mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search Hero.</div>}

          {q !== "" && heroesFilter.length === 0 && (
            <div className="alert alert-danger">No Hero Found With {q}</div>
          )}

          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
