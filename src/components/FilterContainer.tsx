import { useSelector } from "react-redux";
import RootState from './../interfaces/RootState';

export const FilterContainer = () => {
  const prods = useSelector((store: RootState) => store.products.products);
  const page = useSelector((store: RootState) => store.products.skip);


  return (
    <div className="btn-wrapper">
        <button type="button">First Page</button>
        <button type="button">Previous Page</button>
        <button type="button">Next Page</button>
        <button type="button">Last Page</button>
    </div>
  )
}
