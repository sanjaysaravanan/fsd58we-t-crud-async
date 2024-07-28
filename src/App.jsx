import { useEffect, useState } from "react";

import "./App.css";
import ProductAddForm from "./components/ProductAddForm";
import Product from "./components/Product";
import {
  // createProductAPI,
  deleteProductAPI,
  editProductAPI,
  // readProductsAPI,
} from "./apis";
import { createProductAPI, readProductsAPI } from "./apis-axios";
import Loader from "./components/Loader";

function App() {
  // State Variable Array of Products
  const [products, setProducts] = useState([]);
  const [editData, setEditData] = useState(null);

  // state for loading indicator
  const [loading, setLoading] = useState(false);

  const addProduct = async (formDetails) => {
    const newProduct = await createProductAPI(formDetails);

    setProducts([...products, newProduct]);
  };

  const loadAllProducts = async () => {
    try {
      setLoading(true);
      const pds = await readProductsAPI();

      setProducts(pds);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (pdId) => {
    setLoading(true);
    // delete the product with pId from the list
    const deletedRes = await deleteProductAPI(pdId);
    setProducts(products.filter((p) => p.id !== deletedRes.id));
    setLoading(false);
  };

  const loadEditData = (pdData) => {
    setEditData(pdData);
  };

  const editProduct = async (formState, id) => {
    setLoading(true);
    // call the edit API then load the resulting product
    const resultPd = await editProductAPI(formState, id);

    const index = products.findIndex((pd) => pd.id === id);

    const tempProducts = [...products];

    // replace the old data with new edited data
    tempProducts[index] = resultPd;

    setProducts(tempProducts);

    setEditData(null);
    setLoading(false);
  };

  const toggleStar = (pdId) => {
    // whether this product is starred or not
    const tempPd = products.find((pd) => pd.id === pdId);

    // product is starred
    if (tempPd.isStarred) {
      editProduct(
        {
          ...tempPd,
          isStarred: false,
        },
        pdId
      );
    } else {
      editProduct(
        {
          ...tempPd,
          isStarred: true,
        },
        pdId
      );
    }
  };

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
      {loading && <Loader />}
    </>
  );
}

export default App;
