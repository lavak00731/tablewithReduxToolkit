import { useSelector } from "react-redux";
import RootState from './../interfaces/RootState';
import ProductType from "../interfaces/ProductType";

export const Table = () => {
  const prods:ProductType[] = useSelector((store: RootState) => store.products.products);
  if(!prods) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Thumbnail</th>
            </tr>            
        </thead>
        <tbody>
            {
              prods.length > 0 ? prods.map(({id, title, description, category, price, thumbnail}) => {
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td><img src={thumbnail} alt=""/></td>
                  </tr>
                );
              }) : null
            }
        </tbody>
    </table>
  )
}
