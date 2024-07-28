// all the API calls will be here

const API_URL = "https://6624eb0804457d4aaf9d50b2.mockapi.io";

const API_URL_TWO = "https://6624eb0804457d4aaf9d";

// Products
// Create a product - POST
export const createProductAPI = async (pdData) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(pdData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await response.json();
};

// Read all the Products
export const readProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (response.status !== 200) {
      throw new Error("Something Went Wrong");
    }

    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete a specific Product
export const deleteProductAPI = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

// Edit a specific product
export const editProductAPI = async (pdData, id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(pdData),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return await response.json();
};
