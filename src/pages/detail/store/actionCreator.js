import axios from 'axios';
import { fromJS} from 'immutable';
import * as constants from './constants';

const changeDetailData = (title,content)=>({
    type:constants.CHANGE_DETAIL,
    title:title,
    content:content
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data;
            console.log(result);
            dispatch(changeDetailData(result.title,result.content));
        });
    }
}