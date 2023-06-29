import { useSelector, useDispatch } from "react-redux";
import { deleteCountryFromWhistlist } from "../../app/reducers/countriesSlice";
import { CountryType } from "../../interfaces/country.interface";
import "./whistlist.css";
import { EmptyState } from "../../components/emptyState";

export const WhistList = (): JSX.Element => {
  const { whistlist } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const handleDeleteClick = (country: CountryType) => {
    dispatch(deleteCountryFromWhistlist(country));
  };

  return (
    <section className="whistlist container-fluid">
      {whistlist.length < 1 ? (
        <EmptyState />
      ) : (
        <header className="whistlist__header">
          <p className="whistlist__title">
            We found {whistlist.length} countries in your whistlist
          </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Flag</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {whistlist.map((country: CountryType) => {
                return (
                  <tr className="align-middle">
                    <td>
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        width="160"
                      />
                    </td>
                    <td>{country.name.common}</td>
                    <td>
                      {country.flags.alt
                        ? country.flags.alt
                        : "I'm baby kombucha gastropub iceland disrupt listicle beard fixie normcore vape chia raw denim next level."}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteClick(country)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      )}
    </section>
  );
};
