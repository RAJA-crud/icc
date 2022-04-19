import "./ChessBanner.css";
const ChessBanner = () => {
  return (
    <div className="chessBanner">
      <div className="container">
        <div className="row-1">
          <div className="span">
            <span>Category title</span>
          </div>
          <div className="card-1">
            <h2>
              Aenean massa. Cum sociis natoque <br /> penatibus et magnis{" "}
            </h2>
            <div className="content-card">
              <p className="p-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit.
                Aenean commodo ligula eget dolor. Aenean <br /> massa.{" "}
              </p>
              <p className="p-2">
                Cras dapibus.<a href=""> Vivamus elementum</a> semper nisi.
                <br /> Aenean vulputate eleifend tellus. Aenean leo ligula,
                <br />
                porttitor eu, consequat vitae, eleifend ac, enim.
                <br /> Aliquam lorem ante, dapibus in-
              </p>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="membership-card">
            <div className="M-card">
              <h3>Membership</h3>
              <span>
                Rating reset, Gift carfs <br /> and more
              </span>
            </div>
          </div>
          <div className="videos-card">
            <div className="M-card">
              <h3>Membership</h3>
              <span>
                Rating reset, Gift carfs <br /> and more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChessBanner;
