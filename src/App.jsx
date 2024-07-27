import { useEffect, useState } from "react";

import "./App.css";
import ProductAddForm from "./components/ProductAddForm";
import Product from "./components/Product";
import { createProductAPI, deleteProductAPI, readProductsAPI } from "./apis";

function App() {
  // State Variable Array of Products
  const [products, setProducts] = useState([]);
  const [editData, setEditData] = useState(null);

  const addProduct = async (formDetails) => {
    const newProduct = await createProductAPI(formDetails);

    setProducts([...products, newProduct]);
  };

  const loadAllProducts = async () => {
    const pds = await readProductsAPI();

    setProducts(pds);
  };

  const deleteProduct = async (pdId) => {
    // delete the product with pId from the list
    const deletedRes = await deleteProductAPI(pdId);
    setProducts(products.filter((p) => p.id !== deletedRes.id));
  };

  const loadEditData = (pdData) => {
    setEditData(pdData);
  };

  const editProduct = (formState, id) => {
    setEditData(null);
  };

  const toggleStar = (pdId) => {};

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <>
      <h1>Asynchronous CRUD Implementation Coming Soon</h1>

      <ProductAddForm
        addProduct={addProduct}
        editProduct={editProduct}
        editData={editData}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((pd) => (
          // Spread the properties from pd to Product component
          <Product
            key={pd.id}
            {...pd}
            isStar={pd.isStarred}
            deleteProduct={deleteProduct}
            loadEditData={loadEditData}
            toggleStar={toggleStar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
