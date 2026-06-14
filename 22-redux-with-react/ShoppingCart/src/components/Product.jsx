const Product = () => {
  return (
    <>
      <p className="card-text">
        Item : Laptop | Price : 30,000 |{" "}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            -
          </button>
          <p className="btn btn-primary">count</p>
          <button type="button" className="btn btn-primary">
            +
          </button>
        </div>
      </p>
    </>
  );
};
export default Product;
