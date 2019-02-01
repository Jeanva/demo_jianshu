// import * as constants  from './constants';
import { fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    "topicList":[],
    "articleList":[],
    "recommendList":[],
    "writerList":[],
    "articlePage":1,
    "showScroll":false
});
const change_home_data=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        writerList:fromJS(action.writerList)
    })
}
const add_article_list = (state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
    })
}
export default (state= defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return change_home_data(state,action)

        case constants.ADD_ARTICLE_LIST:
            console.log(action.list);
            return add_article_list(state,action);
        
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set("showScroll",action.show);

        default : return state;
    }
}