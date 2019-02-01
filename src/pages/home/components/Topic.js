import React from 'react';
import { connect } from 'react-redux';
import {TopicWrapprer,TopicItem } from '../style';

class Topic extends React.PureComponent{
    render(){
        const { list } = this.props;
        return (<TopicWrapprer>
            {
                list.map((item)=>(
                    <TopicItem key={item.get('id')}>
                        <img 
                        className="topic_pic"
                        src={item.get('imgUrl')} />
                        {item.get('title')}
                    </TopicItem>
                    )
                )
            }
            
        </TopicWrapprer>)
    }
}

const mapState = (state)=>({
    list:state.get('home').get('topicList')
});
export default connect(mapState,null)(Topic);