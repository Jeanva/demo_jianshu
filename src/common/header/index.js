import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,Logo ,Nav ,NavItem,NavSearch,
    Addition,Button, SearchWrapper,SearchInfo,SearchInfoTitle
    ,SearchInfoSwitch,SearchInfoItem
} from './style';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent{
    
    getListArea() {
        const {focused, list, page,mouseIn, totalPage, handleMouseEnter ,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){ //当newList 存在的时候执行循环
            // 当前显示页内的元素
            for(let i =(page - 1)* 10;i < page * 10;i++){  // i为当前显示元素下标
                // console.log(newList[i]);
                pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused ||mouseIn){
            return(
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon) }>
                        <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe637;</i>
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {/* {list.map((item,index)=>{
                            return <SearchInfoItem key={index}>{item}</SearchInfoItem>
                        })} */}
                        { pageList }
                    </div>
                </SearchInfo>
            )
        }
        else{
            return null;
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list} =this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={focused?'focused':""} 
                            onFocus={()=>handleInputFocus(list)}
                            onBlur = {handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={focused?'focused iconfont zoom':"iconfont zoom"} >&#xe623;</i>
                    { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><i className="iconfont">&#xe678;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        focused : state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            // const action = actionCreators.searchFocus();
            (list.size === 0 ) && dispatch(actionCreators.getList());//获取列表中的数据
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0 ;
            }
            console.log("originAngle--->",originAngle);
            spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)';
            console.log(spin.style.transform)
            
            if(page< totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
            console.log(page,totalPage);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);