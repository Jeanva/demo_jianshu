import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,Logo ,Nav ,NavItem,NavSearch,
    Addition,Button, SearchWrapper,SearchInfo,SearchInfoTitle
    ,SearchInfoSwitch,SearchInfoItem
} from './style';

const getListArea = (show)=>{
    if(show){
        return(
            <SearchInfo>
                <SearchInfoTitle>
                热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    }
    else{
        return null;
    }
}

const Header = (props)=>{
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch 
                        className={props.focused?'focused':""} 
                        onFocus={props.handleInputFocus}
                        onBlur = {props.handleInputBlur}
                    />
                </CSSTransition>
                <i className={props.focused?'focused iconfont':"iconfont"} >&#xe623;</i>
                { getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'><i className="iconfont">&#xe678;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state)=>{
    return {
        focused : state.getIn(['header','focused'])
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(){
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);