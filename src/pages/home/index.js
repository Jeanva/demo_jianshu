import React from 'react';
import { HomeWrapper ,LeftWrapper ,RightWrapper ,BackTop} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect} from 'react-redux';
import * as constants from './store/constants';
import { actionCreators } from './store';

class Home extends React.PureComponent{
    handleScrollTop(){
        window.scroll(0,0);
    }
    render(){
        return(
            <div>
                <HomeWrapper>
                    <LeftWrapper>
                        <img 
                            src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            className="banner-img"
                        />
                        <Topic />
                        <List />
                    </LeftWrapper>
                    <RightWrapper>
                        <Recommend />
                        <Writer />
                    </RightWrapper>
                    { this.props.showScroll?
                    <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                    :""}
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillMount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow); 
    }
    bindEvents(){   
        // 添加监听事件，对scroll进行监听
        window.addEventListener("scroll",this.props.changeScrollTopShow);
    }
}
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
    changeHomeData(){
        // axios.get('/api/home.json').then((res)=>{
        //     const result = res.data.data;
        //     const action = {
        //         type:constants.CHANGE_HOME_DATA,
        //         topicList:result.topicList,
        //         articleList:result.articleList,
        //         recommendList:result.recommendList
        //     }
        dispatch(actionCreators.getHomeInfo());
        // })
    },
    changeScrollTopShow(){
        if( document.documentElement.scrollTop > 100 ){
            dispatch(actionCreators.toggleTopShow(true))
        }
        else{
            dispatch(actionCreators.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop)
    }
})

export default connect(mapState,mapDispatch)(Home);