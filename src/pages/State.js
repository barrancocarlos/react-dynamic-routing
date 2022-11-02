import Cities from "./data.json";
import { Link } from "react-router-dom";

const State = () => {
  let stateName = window.location.pathname.split("/").pop();

  return (
    <div>
      <main>
        <section class="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">{stateName}</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {Cities.map((city) => {
            if (city.stateslug === stateName) {
              return (
                <div className="col" key={city.id}>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h2>{city.city}</h2>
                      <p className="card-text">{city.service}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link
                            to={`/directory/${city.stateslug}/${city.cityslug}`}
                          >
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View City
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default State;
