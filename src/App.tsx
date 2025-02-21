import { useState, useEffect } from 'react';
import { Layout } from './Layout';
import './App.css';
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Table } from './components/Table';
import getProducts from './services/getProducts';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [products, setProducts] = useState([]);
 
    console.log(products)

  useEffect(() => {
    getProducts(limit, page).then(data => setProducts(data));

    return () => {
      
    }
  }, [page, limit])
  
  
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
