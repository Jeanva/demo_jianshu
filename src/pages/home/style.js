import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    height:300px;
    background:pink;
    over-flow:hidden;
`;

export const LeftWrapper = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const RightWrapper =  styled.div`
    float:right;
    width:240px;
`;
export const TopicWrapprer = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-left:18px;
    margin-bottom:10px;
    padding:0 10px 0 0;
    .topic_pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title {
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc {
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;
export const RecommendWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;
export const RecommendItem = styled.div`
    border:1px solid #dcdcdc;
    border-radius:2px;
    font-size:14px;
    color:#999;
    padding:20px 0;
    display:block;
    width:100%;
    background-image:url(${(props)=>props.imgUrl});
    background-size:contain;
`;
export const WriterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    
`;
export const WriterItem = styled.div`
    display:flex;
    flex-direction:row;
`;