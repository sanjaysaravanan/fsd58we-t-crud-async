import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const initialState = {
  productName: "",
  image: "",
  price: 99,
  quantity: 0,
};
const ProductAddForm = ({ addProduct, editProduct, editData }) => {
  // Single State to Manage all the products details
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({
      // load the previous of the state
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      editProduct(formState, editData.id);
    } else {
      // add product function here
      addProduct(formState);
    }

    // reset form to initial state
    setFormState(initialState);
  };

  useEffect(() => {
    if (editData) {
      setFormState(editData);
    }
  }, [editData]);

  return (
    <div style={{ padding: 8 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Name </label>
        <input
          name="productName"
          id="productName"
          value={formState.productName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="image"> Image </label>
        <input
          name="image"
          id="image"
          onChange={handleChange}
          value={formState.image}
          type="url"
          required
        />
        <br />
        <br />
        <label htmlFor="price">Price </label>
        <input
          name="price"
          id="price"
          type="number"
          onChange={handleChange}
          value={formState.price}
          required
        />
        <br />
        <br />
        <label htmlFor="quantity">Quantity </label>
        <input
          name="quantity"
          id="quantity"
          type="number"
          onChange={handleChange}
          value={formState.quantity}
          required
        />
        <br />
        <br />

        <button type="submit">{editData ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
};

ProductAddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
  editData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    id: PropTypes.string,
  }),
  editProduct: PropTypes.func,
};

export default ProductAddForm;
