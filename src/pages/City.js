const State = () => {
  let cityName = window.location.pathname.split("/").pop();

  return (
    <div>
      <main>
        <section class="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">{cityName}</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
            </div>
          </div>
        </section>
      </main>     
    </div>
  );
};

export default State;
