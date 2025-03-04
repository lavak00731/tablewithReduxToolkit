import { useEffect } from 'react';
import { Layout } from './Layout';
import './App.css';
import { Footer } from "./components/Footer";
import { Table } from './components/Table';
import getProducts from './services/getProducts';
import { useSelector, useDispatch } from 'react-redux';
import RootState from './interfaces/RootState';
import { getTotal, getNewProducts } from './features/productsSlice'
import { FilterContainer } from './components/FilterContainer';
import { ProdQuantity } from './components/ProdQuantity';

const App = () => {
  const skip = useSelector((store: RootState) => store.products.skip);
  const productsPerPage = useSelector((store: RootState) => store.products.productsPerPage);
  const dispatch = useDispatch(); 

  useEffect(() => {
    getProducts(productsPerPage, skip).then((data) =>{ 
      dispatch(getNewProducts(data.products));
      dispatch(getTotal(data.total));
    });

    return () => {
      
    }
  }, [productsPerPage, skip])
  
  
  return (
    <Layout>
      <main>
        <h1>Products</h1>
        <div className="filter-container">
          <FilterContainer />
          <ProdQuantity />
        </div>        
        <Table />
        <div className="filter-container">
          <FilterContainer />
          <ProdQuantity />
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default App
