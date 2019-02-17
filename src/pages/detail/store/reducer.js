import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title:'',
    content:""
});

const change_detail_data=(state,action)=>{
    return state.merge({
        title:fromJS(action.title),
        content:fromJS(action.content)
    })
}

export default (state= defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return change_detail_data(state,action)

        default: return state;
    }
}