import { useSelector } from "react-redux";
import RootState from './../interfaces/RootState';
export const Table = () => {
  const prods = useSelector((store: RootState) => store.products.products);
  console.log(prods)
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
              prods ? prods.map(({id, title, description, category, price, thumbnail}) => {
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
