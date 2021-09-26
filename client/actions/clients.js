import { addOrder } from '../api/clients'

export const SHOW_ERROR = 'SHOW_ERROR'
export const UPDATE_ORDER_ACTIVE_STATUS = 'UPDATE_ORDER_ACTIVE_STATUS'

export function updateOrderActiveStatus () {
  const orderStatus = { orderActive: true }
  return {
    type: UPDATE_ORDER_ACTIVE_STATUS,
    orderStatus
  }
}

export function addNewOrder (id) {
  return (dispatch) => {
    addOrder(id)
      .then(() => {
        dispatch(updateOrderActiveStatus())
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
