import React from 'react';
import { WriterItem , WriterWrapper } from '../style';
import { connect } from 'react-redux';

class Writer extends React.PureComponent{
    render(){
        const { list } = this.props;
        return (<WriterWrapper>
            {
                list.map((item)=>(
                <WriterItem>
                    <img src={item.get('imgUrl')}/>
                    <div>
                        {item.get('name')}
                    
                        <div className="desc">写了{}字</div>
                    </div>
                    <div className="follow">+关注</div>
                </WriterItem>
                )
            )
            }
            {/* <WriterItem>{list}</WriterItem>             */}
        </WriterWrapper>)
    }
}
const mapState= (state) =>({
    list:state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer);