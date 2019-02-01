import React from 'react';
import { RecommendWrapper ,RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends React.Component{
    render(){
        const { list } = this.props;
        return (<RecommendWrapper>
            {
                list.map((item)=>(
                // <RecommendItem key={item.get('id')} imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png">
                //     {item.get('title')}
                // </RecommendItem>
                <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} alt={item.get('title')}/>
            ))
            }
        </RecommendWrapper>)
    }
}
const mapState = (state)=>({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);