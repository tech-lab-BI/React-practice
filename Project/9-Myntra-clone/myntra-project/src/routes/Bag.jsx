import { useDispatch, useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          {bagItems.length !== 0 ? (
            <BagSummary />
          ) : (
            <div
              className="alert alert-success"
              style={{ margin: "20px" }}
              role="alert"
            >
              No item present in CART ! go for shopping.....
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Bag;
