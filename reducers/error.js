import * as Actions from '../actions/constants';



const errorHappen = (state={},action) => {
    switch(action.type){
        case Actions.ERROR_HAPPEN:
            return Object.assign({},state,{errorText:action.errormsg})
        default:
            return state
    }
}

export default errorHappen