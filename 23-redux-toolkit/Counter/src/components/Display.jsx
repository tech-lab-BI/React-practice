import {useSelector} from 'react-redux'

const Display = () => {
  const counter = useSelector((store) => store.val);

  return <p className="card-text">Counter current value : {counter}</p>;
};
export default Display;
