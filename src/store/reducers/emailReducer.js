// import * as actionTypes from '../actions/actionTypes';

import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  emailRecipient: 'father Tikhon',
  emailSendingInProgress: false,
  emailSuccessfullySend: false, // appData with language
  emailError: false, // appData with language
};

/*
1
данные берутся из формы
сага генерирует emailSendingInProgress: true

 */

const changeEmailRecipient = (state, action) => {
  return updateObject(state, {
    emailRecipient: action.emailRecipient,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_RECIPIENT_CHANGE:
      return changeEmailRecipient(state, action);
    default:
      return state;
  }
};

export default reducer;