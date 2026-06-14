import { VscEyeClosed } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const count = useSelector((store) => store.count);
  const privacy = useSelector((store) => store.privacy);
  const cartDispatch = useDispatch();

  const handleIncrement = () => {
    cartDispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    {
      count !== 0 && cartDispatch({ type: "DECREMENT" });
    }
  };
  const handlePrivacy = () => {
    cartDispatch({type: "PRIVACY"})
  }
  return (
    <>
      <div className="card-text">
        Item : Laptop | Price : 30,000 |{" "}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDecrement}
          >
            -
          </button>
          <button className="btn btn-primary" onClick={handlePrivacy}>{privacy?<span>{count}</span>:<VscEyeClosed />}</button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
