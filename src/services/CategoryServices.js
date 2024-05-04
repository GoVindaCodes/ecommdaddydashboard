// new ones according to the backend from nodee js
import requests from "./httpService";

const CategoryServices = {
  getAllCategory: async () => {
    return requests.get("/api/category/all");
  },

  getAllcategory: async () => {
    return requests.get("/api/category");
  },

  getCategoryById: async (id) => {
    return requests.get(`/api/category/${id}`); // Updated route
  },

  addCategory: async (body) => {
    return requests.post("/api/category/add", body); // Updated route
  },

  addAllCategory: async (body) => {
    return requests.post("/api/category/add/all", body); // Updated route
  },

  updateCategory: async (id, body) => {
    return requests.put(`/api/category/${id}`, body); // Updated route
  },

  updateStatus: async (id, body) => {
    return requests.put(`/api/category/status/${id}`, body); // Updated route
  },

  // deleteCategory: async (id) => {
  //   console.log("ids : ", id)
  //   return requests.delete(`/api/category/${id}`); // Updated route
  // },
  deleteCategory: async (id) => {
    console.log("Request to delete category with ID:", id);

    try {
      const response = await requests.delete(`/api/category/${id}`);
      console.log("Response from backend:", response);

      return response;
    } catch (error) {
      console.error("Error from backend:", error);
    }
  },

  updateManyCategory: async (body) => {
    const { ids, status } = body;
    return requests.patch("/api/category/update/many", { ids, status }); // Updated route
  },

  deleteManyCategory: async (body) => {
    return requests.patch("/api/category/delete/many", body); // Updated route
  },
};

export default CategoryServices;
