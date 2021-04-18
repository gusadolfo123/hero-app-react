import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../../selectors/getHeroById";

import { heroImages } from "../../../helpers/heroImages";

export const HeroPage = ({ history }) => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const handleReturn = () => {
    if (history.length <= 2) history.push("/");
    else history.goBack();
  };

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img
          // src={`../assets/heroes/${id}.jpg`}
          src={heroImages(`./${id}.jpg`).default}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-md-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <hr />

        <h5>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className="btn btn-outline-warning">
          Return
        </button>
      </div>
    </div>
  );
};
