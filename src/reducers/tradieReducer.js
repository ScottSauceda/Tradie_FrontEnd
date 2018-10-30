import { TRADE_ID, TRADE_NAME } from '../constants'

const initialState = {
    tradeId: '',
    tradieName: '',
    tradieArray: []
}

export default (state = initialState, action ) => {
    let updated = Object.assign({}, state)

    switch(action.type) {

            case TRADE_ID: 
                updated.tradieId = action.payload
                return updated

        case TRADE_NAME:
            let Tname = action.data
            console.log(Tname.data.payload)
            //updated.tradieName = Tname
            updated.tradieArray = Tname.data.payload
            return updated

        default: 
        return state

    }

}