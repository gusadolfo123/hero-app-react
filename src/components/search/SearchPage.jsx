import React, { useState } from "react";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../ui/heroes/HeroCard";

export const SearchPage = () => {
  const [heroesFilter, setHeroes] = useState([]);
  const [formValues, handlerInputChange, reset] = useForm({
    search: "",
  });

  const { search } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length >= 3) {
      const data = heroes.filter((hero) =>
        //   hero.superhero.trim().toLowerCase().startsWith(search.toLowerCase())
        hero.superhero.toLowerCase().includes(search.toLowerCase())
      );
      setHeroes(data);
      reset();
    }
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
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
