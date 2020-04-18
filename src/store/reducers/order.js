import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
      break;
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
      break;
    case actionTypes.FETCH_ORDER_START:
      return {
        ...state,
        loading: true,
      };
      break;
    case actionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.order,
        loading: false,
      };
      break;
    case actionTypes.FETCH_ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };

      break;

    default:
      return state;
      break;
  }
};

export default reducer;
