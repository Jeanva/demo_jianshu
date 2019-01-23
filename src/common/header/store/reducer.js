import * as constants  from './constants';
import { fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
});

export default (state= defaultState,action)=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
        // immutable 对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
            return state.set('focused',true)
            // {
            //     focused:true
            // };
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
            // {
            //     focused:false
            // }
        default : return state;
    }
}