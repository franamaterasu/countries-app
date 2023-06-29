import { useSelector, useDispatch } from "react-redux";
import {
  addCountryToWhistlist,
  deleteCountryFromWhistlist,
} from "../../app/reducers/countriesSlice";
import { MdFavoriteBorder } from "react-icons/md";
import "./card.css";
import { CountryType } from "../../interfaces/country.interface";

type Props = {
  country: CountryType;
};

export const Card = ({ country }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { whistlist } = useSelector((state) => state.countries);

  const handleAddClick = (country: CountryType) => {
    dispatch(addCountryToWhistlist(country));
  };

  const handleDeleteClick = (country: CountryType) => {
    dispatch(deleteCountryFromWhistlist(country));
  };

  return (
    <div className="card mb-3">
      <img
        src={country.flags.png}
        className="card-img-top"
        alt={country.name.common}
      />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text">
          {country.flags.alt
            ? country.flags.alt
            : "I'm baby kombucha gastropub iceland disrupt listicle beard fixie normcore vape chia raw denim next level. Retro microdosing sus farm-to-table coloring book ugh ramps godard pok pok direct trade meh. Same normcore grailed small batch chartreuse. DIY actually knausgaard stumptown."}
        </p>
        {whistlist.some(
          (item: CountryType) => item.name.common === country.name.common
        ) ? (
          <button
            className="card__button btn btn-danger"
            onClick={() => handleDeleteClick(country)}>
            <MdFavoriteBorder className="card__button-icon" />
            Delete from whistlist
          </button>
        ) : (
          <button
            className="card__button btn btn-success"
            onClick={() => handleAddClick(country)}>
            <MdFavoriteBorder className="card__button-icon" />
            Add to whistlist
          </button>
        )}
      </div>
    </div>
  );
};
