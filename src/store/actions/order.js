import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchasBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchasBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchasBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchasBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrderSuccess = (order) => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    order: order,
  };
};

export const fetchOrderFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDER_FAIL,
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_START,
  };
};

export const fetchOrders = (token) => {
  return (dispatch) => {
    axios
      .get("/orders.json?auth=" + token)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrderFail(err));
      });
  };
};
