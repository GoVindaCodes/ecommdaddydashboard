import requests from "./httpService";
const CustomerServices = {
  getAllCustomers: async () => {
    return requests.get("/api/customer");
  },
  registerCustomer: async (token, body) => {
    return requests.post(`/api/customer/register/${token}`, body);
  },
  loginCustomer: async (body) => {
    return requests.post("/api/customer/login", body);
  },
  signUpWithProvider: async (token, body) => {
    return requests.post(`/api/customer/signup/${token}`, body);
  },
  forgetPassword: async (body) => {
    return requests.put("/api/customer/forget-password", body);
  },
  resetPassword: async (body) => {
    return requests.put("/api/customer/reset-password", body);
  },
  changePassword: async (body) => {
    return requests.post("/api/customer/change-password", body);
  },
  addAllCustomers: async (body) => {
    return requests.post("/api/customer/add/all", body);
  },
  getCustomerById: async (id) => {
    return requests.get(`/api/customer/${id}`);
  },
  updateCustomer: async (id, body) => {
    console.log("data : ", body)
    return requests.put(`/api/customer/${id}`, body);
  },
  sendEmail: async (emailData) => {
    console.log("emails :", emailData)
    requests.post("/api/customer/send-email", emailData);
  },
  deleteCustomer: async (id) => {
    return requests.delete(`/api/customer/${id}`);
  },
};

export default CustomerServices;
