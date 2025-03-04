import { useSelector } from "react-redux";
import RootState from './../interfaces/RootState';
export const ProdQuantity = () => {
    const total = useSelector((store: RootState) => store.products.total);
    const skip = useSelector((store: RootState) => store.products.skip);
    const prods = useSelector((store: RootState) => store.products.products);
  return (
    <p className="quantity-amount" aria-live="polite"><strong>Products</strong> {prods.length + (skip*10)} of {total}</p>
  )
}
