import { useEffect } from 'react';
import { Layout } from './Layout';
import './App.css';
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Table } from './components/Table';
import getProducts from './services/getProducts';
import { useSelector, useDispatch } from 'react-redux';
import RootState from './interfaces/RootState';
import { getNewProds } from './features/productsSlice'

const App = () => {
  const skip = useSelector((store: RootState) => store.products.skip);
  const productsPerPage = useSelector((store: RootState) => store.products.productsPerPage);
  const dispatch = useDispatch(); 
 


  useEffect(() => {
    getProducts(productsPerPage, skip).then(data => dispatch(getNewProds(data)));

    return () => {
      
    }
  }, [productsPerPage, skip])
  
  
  return (
    <Layout>
      <Nav/>
      <main>
        <h1>Hola</h1>
        <Table />
      </main>
      <Footer/>
    </Layout>
  )
}

export default App
