// addedd new for the backend for now sir
import requests from './httpService';

const CouponServices = {
  addCoupon: async (body) => {
    return requests.post('/api/coupon/add', body);
  },

  addAllCoupon: async (body) => {
    return requests.post('/api/coupon/add/all', body);
  },

  getAllCoupons: async () => {
    return requests.get('/api/coupon');
  },

  getCouponById: async (id) => {
    return requests.get(`/api/coupon/${id}`);
  },

  updateCoupon: async (id, body) => {
    return requests.put(`/api/coupon/${id}`, body);
  },

  updateManyCoupons: async (body) => {
    const { ids, status } = body;
    return requests.patch('/api/coupon/update/many', { ids, status });
  },

  updateStatus: async (id, body) => {
    return requests.put(`/api/coupon/status/${id}`, body);
  },

  deleteCoupon: async (id) => {
    return requests.delete(`/api/coupon/${id}`);
  },

  deleteManyCoupons: async (body) => {
    return requests.patch('/api/coupon/delete/many', body);
  }
};

export default CouponServices;
