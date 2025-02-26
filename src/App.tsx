import { useEffect } from 'react';
import { Layout } from './Layout';
import './App.css';
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Table } from './components/Table';
import getProducts from './services/getProducts';
import { useSelector, useDispatch } from 'react-redux';
import RootState from './interfaces/RootState';
import { getAllData, getNewProducts } from './features/productsSlice'
import { FilterContainer } from './components/FilterContainer';

const App = () => {
  const skip = useSelector((store: RootState) => store.products.skip);
  const productsPerPage = useSelector((store: RootState) => store.products.productsPerPage);
  const dispatch = useDispatch(); 
 


  useEffect(() => {
    getProducts(productsPerPage, skip).then((data) =>{console.log(data); 
      dispatch(getNewProducts(data.products));
      dispatch(getAllData(data));
    });

    return () => {
      
    }
  }, [productsPerPage, skip])
  
  
  return (
    <Layout>
      <Nav/>
      <main>
        <h1>Products</h1>
        <Table />
        <FilterContainer />
      </main>
      <Footer/>
    </Layout>
  )
}

export default App
