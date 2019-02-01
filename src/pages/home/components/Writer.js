import React from 'react';
import { WriterItem , WriterWrapper } from '../style';
import { connect } from 'react-redux';

class Writer extends React.Component{
    render(){
        const { list } = this.props;
        return (<WriterWrapper>
            {
                list.map((item)=>(
                <WriterItem>
                    {item.get('name')}
                </WriterItem>
                )
            )
            }
        </WriterWrapper>)
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer);