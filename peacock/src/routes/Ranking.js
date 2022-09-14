import { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from "styled-components"
import "../slick.css";
import "../slick-theme.css";
import Slider from "react-slick";

const StyleCollect = styled.div`
    display: flex;

`;
const Style = styled.div`
    width:20%;
    font-size:0.8vw;
    font-weight: bold;
    padding-top: 1vh;
    padding-bottom: 1vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #dee2e6;
    a{
        text-decoration: none;
        color:black;
        padding-right:1vw;
        padding-left:1vw;
    }
    &:hover{
        background-color: white;
    }
`
const Container = styled.div`
    display: flex;
    background-color: white;
`;
const Ranker = styled.div`
    width:33.3333%;
    height:46vh;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
        color:black;
    }
`;
const RankerProfile = styled.div`
    margin-top: 1vh;
    background-color: white;
    height:38vh;
    width:105%;
    border: 1px solid black;
    border-radius: 3vw;
    &:hover{
        background-color: #f8f9fa;
    }
`;
const RankerProfileImgInfo = styled.div`
    display: flex;
    padding-left:1vw;
    padding-top:1vh;

`;
const RankerProfileCodi = styled.div`
    .slick-slider .slick-list{
        border:none;
    }
    .slick-prev:before
    {
        content: '';

    }
    .slick-next:before
    {
        content: '';

    }
`;
const RankerProfileImg = styled.div`
    width:40%;
    img{
        object-fit: fill;
        width:100%;
        border-radius: 20%;
        max-height: 100%;
        min-height: 100%;
    }
    height:22vh;

`;
const RankerProfileInfo = styled.div`
    padding-left:1.5vw;
    
    h3{
        font-weight: bold;
        margin : 1.5vh;
        margin-top:1vh;
        padding-left: 0;
        padding-right: 0;
        border:0.07vw solid black;
        text-align: center;
        border-radius: 1vh;
        width:6vw;
        font-size:1vw;
              
    }
    h4{
        margin:0;
        text-align: center;
        font-weight: bold;
    }
`;
const NowStyle = styled.div`
    text-align: center;
    background-color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    h3{
        margin:0;
        margin-top:2vh;
        width:10vw;
        height:4vh;
        padding-top:1.3vh;
        border-radius: 3vh;
        background-color: white;
        display:inline;
        padding-left:1vw;
        padding-right:1vw;
        border:1px solid black;
    }
`;
const Container2 = styled.div`

background-color: white;
`;
const OtherRank = styled.div`    
`
const OtherRanking = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Rank = styled.div`
    width:86%;
    border:1px solid black;
    border-radius: 3vw;
    height: 20vh;
    margin-bottom: 3vh;
    background-color: white;
    display: flex;
`
const RankImg = styled.div`
    width:10%;
    padding-top:1vh;
    padding-bottom:1vh;
`;
const RankProfile =styled.div`
    width:10%;
    height:100%;
    h3{
        font-weight: bold;
        margin : 1.5vh;
        margin-top:1vh;
        padding-left: 0;
        padding-right: 0;
        border:0.07vw solid black;
        text-align: center;
        border-radius: 1vh;
        width:6vw;
        font-size:0.8vw;  
        
    
    } 
    h4{
        margin:0;
        font-weight: bold;
        margin-right:1vw;
    }
`;
const RankCodi = styled.div`
    width:62%;
    margin-left:4vw;
    margin-top:1vh;
    .slick-slider .slick-list{
        border:none;
    }
`;
const Number = styled.div`
    width: 10%;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    h4{
        font-size:1.6vw;
    }
`;
const userinfo = [
    {
        nicname:"서기",
        userId:"nakhyeon",
        follower:1231031,
        height:"177cm",
        weight:"67kg",
        style:"스트릿",
        img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
           
       ],
    },
    {
        nicname:"지연",
        userId:"jiyeon",
        follower:99999,
        height:"172cm",
        weight:"63kg",
        style:"캐주얼",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fc963162d87.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"세나",
        height:"164cm",
        follower:22,
        weight:"62kg",
        style:"미니멀",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fb5f7980d7f.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"재현",
        height:"164cm",
        follower:232,
        weight:"62kg",
        style:"스타일1",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
        codi:[  
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"재형",
        height:"164cm",
        follower:1222,
        weight:"62kg",
        style:"스타일2",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fda6dd7d3f1.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"강민",
        height:"164cm",
        follower:2221,
        weight:"62kg",
        style:"스트릿",
        img:"https://image.msscdn.net/images/goods_img/20220413/2486848/2486848_2_320.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"샘성",
        height:"164cm",
        follower:2782,
        weight:"62kg",
        style:"캐주얼",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fdbdab31743.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"샘성",
        height:"164cm",
        follower:2782,
        weight:"62kg",
        style:"캐주얼",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fdbdab31743.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"샘성",
        height:"164cm",
        follower:2782,
        weight:"62kg",
        style:"캐주얼",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fdbdab31743.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    },
    {
        nicname:"은서",
        height:"164cm",
        follower:22548,
        weight:"62kg",
        style:"미니멀",
        img:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62fdc40f9e382.jpg",
        codi:[  
           
            "https://i.ibb.co/kKMCQQP/image.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
           "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
       ],
    }
];
function Ranking(){
    const [defalutStyle,setDefaultStyle]=useState("캐주얼");
    
    let settings={
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };
    const settings2={
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 6, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };
    return(
        <>
        <StyleCollect>
            <Style onClick={()=>setDefaultStyle("캐주얼")}>캐주얼</Style>
            <Style onClick={()=>setDefaultStyle("스트릿")}>스트릿</Style>
            <Style onClick={()=>setDefaultStyle("미니멀")}>미니멀</Style>
            <Style onClick={()=>setDefaultStyle("스타일1")}>스타일1</Style>
            <Style onClick={()=>setDefaultStyle("스타일2")}>스타일2</Style>
        </StyleCollect>
        <NowStyle>
            <h3>{defalutStyle}</h3>
        </NowStyle>
        <Container>
            {userinfo.filter((item)=>item.style===defalutStyle)
            .sort(function comperator(a,b){
                            if(a.follower>b.follower)return -1;
                            else if(a.follower<b.follower)return 1;
                            else return 0;
                        }).slice(0,3).map((item=>{
                const url =`/closet/${item.userId}`;
                return(
                    <>
                
                <Ranker>
                <Link to={url}>
                    <RankerProfile>
                        <RankerProfileImgInfo>
                            <RankerProfileImg>
                                <img src={item.img} alt="rankerimg"/>
                            </RankerProfileImg>
                            <RankerProfileInfo>
                                <h3>{item.nicname}</h3>
                                <h3>{item.height}</h3>
                                <h3>{item.weight}</h3>
                                <h3>{item.style}</h3>
                                <h4>팔로워 {item.follower}</h4>
                            </RankerProfileInfo>
                        </RankerProfileImgInfo>
                        <RankerProfileCodi>
                            <Slider style={{marginTop:"1vh",width:"18vw",marginLeft:"0.6vw"}} {...settings}>
                            {item.codi.map((item)=>{
                                return (
                                    <div>
                                        <img src={item} alt="codi" style={{width:"80%",borderRadius:"0.4vw",objectFit:"fill",paddingLeft:"0.5vw",borderTopLeftRadius:"0.5vw"}}/>
                                    </div>
                                );
                            })}
                           </Slider>
                        </RankerProfileCodi>
                    </RankerProfile>
                    </Link>
                </Ranker>
                
                </>
                )
                
            }))}
            
        </Container>
        <Container2>
        <OtherRank>
        {userinfo.filter((item)=>item.style===defalutStyle).sort(function comperator(a,b){
                        if(a.follower>b.follower)return -1;
                        else if(a.follower<b.follower)return 1;
                        else return 0;
                    }).slice(3).map(((item,index)=>{
            return(
                   <OtherRanking>
                     <Rank>
                        <Number><h4>{index+4}th</h4></Number>
                        <RankImg>
                            <img src={item.img} alt="codi" style={{width:"80%",height:"100%",borderRadius:"0.4vw",paddingLeft:"0.5vw"}}/>
                        </RankImg>
                        <RankProfile>
                            <h3>{item.nicname}</h3>
                            <h3>{item.height}</h3>
                            <h3>{item.weight}</h3>
                            <h3>{item.style}</h3>
                            <h4>팔로워 {item.follower}</h4>
                        </RankProfile>
                        <RankCodi>
                            <Slider {...settings=settings2}>
                                {item.codi.map((item)=>{
                                    return (    
                                        <div> 
                                            <img src={item} alt="codi" style={{width:"70%",borderRadius:"0.4vw",objectFit:"fill",paddingLeft:"0.5vw"}}/>
                                        </div>
                                    );
                                })}
                            </Slider>

                            
                        </RankCodi>
                     </Rank>
                   </OtherRanking>
                     )
                    }))}
        </OtherRank>
     </Container2>
        </>
    )
};
export default Ranking;