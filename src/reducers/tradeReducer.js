import { ADD_USER_TRADE } from '../constants';

const initialState = {
    trade: {}
}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state);
    switch(action.type) {

        case ADD_USER_TRADE:
            console.log('add Trade data from reducer')
            console.log(action)
            let trade = action.data.data
            console.log(trade.data)
            updated.trade = trade;
            
            return updated;

        default:
            return state;

    }
}