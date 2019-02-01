import React from 'react';
import { HomeWrapper ,LeftWrapper ,RightWrapper} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect} from 'react-redux';

class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeWrapper>
                    <LeftWrapper>
                        <img src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            className="banner-img"
                        />
                        <Topic />
                        <List />
                    </LeftWrapper>
                    <RightWrapper>
                        <Recommend />
                        {/* <Writer /> */}
                    </RightWrapper>
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList:result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            }
            this.props.changeHomeData(action);
            console.log(result);
        });
    }
}

const mapDispatch=(dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
})

export default connect(null,mapDispatch)(Home);