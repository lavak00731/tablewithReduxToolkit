import { useDispatch, useSelector } from "react-redux";
import RootState from './../interfaces/RootState';
import { decrement, increment, updateByPayload} from "../features/productsSlice";

export const FilterContainer = () => {
  const total = useSelector((store: RootState) => store.products.total)
  const skip = useSelector((store: RootState) => store.products.skip);
  const limit = Math.round(total / 10);
  const dispatch = useDispatch()
  const handlePagination = (page:number) =>{
    dispatch(updateByPayload(page));
  }


  return (
    <div className="btn-wrapper">
        <button type="button" onClick={()=>handlePagination(0)}>First Page</button>
        <button type="button" onClick={()=>{
          if(skip>0){
            dispatch(decrement());
          }
        }}>Previous Page</button>
        <button type="button"  onClick={()=>{
          if(skip<total){
            dispatch(increment());
          }
        }}>Next Page</button>
        <button type="button" onClick={()=>handlePagination(limit)}>Last Page</button>
    </div>
  )
}
