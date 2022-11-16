import { useEffect, useState } from 'react';
import { useParams,Link, resolvePath } from 'react-router-dom';
import styled from "styled-components"
import '../Style/slick.css';
import "../Style/slick-theme.css";
import Slider from "react-slick";
import { getRanking, setFollowingCloset } from '../Recoil/Api';
import { useMutation } from "react-query";
import { useRecoilValue } from 'recoil';
import { TotalId } from '../Recoil/Atoms';

const StyleCollect = styled.div`
    margin-top: 8vh;
    display: flex;
    margin-left:17vw;
    gap:1vw;
`;
const Style = styled.div`
    font-size:0.8vw;
    font-weight: bold;
    padding-top: 1vh;
    padding-bottom: 1vh;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
    color:#454545;
    border:1px solid #454545;
    font-family: 'SUIT';
    border-radius: 1vw;
    padding: 0.5vw 0.7vw 0.5vw 0.7vw;
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

const Page2 = styled.div`
    display: flex;
    width:68%;
    margin-top:5vh;
`;
const First = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;

`;
const Second = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;
`;
const Third = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;
`;
const Pid = styled.div`
    width:100%;
    .pids{
        padding: 0 1.5vw 0 1.5vw;

    }
`;
const PidImage = styled.div`
    width:100%;
    img{
        max-width:70%;
    }
`;
const PidProfile = styled.div`
    margin-top:1vh;
    display: flex;
    .pidName{
        font-size:1vw;
        width:43%;
        font-weight: 600;
        display: inline;
        font-family: 'SUIT';
    }
    .pidFollower{
        position: relative;
        top:0.5vh;
        font-size:0.7vw;
        color:#7939FF;
        display: inline;
        font-weight: 500;
        font-family: 'SUIT';
    }
    .followingBtn{
        cursor: pointer;
        margin-left:0.5vw;
        font-family: 'SUIT';
        color:#7939FF;
        background-color: #F5F0FF;
        border:1px solid #7939FF;
        border-radius: 0.5vw;
        padding:0.5vh 0.5vw 0.5vh 0.5vw;
        &:hover{
            color:white;
            background-color:#7939FF;
        }
    }`;
const PidCmKg = styled.div``;
const Pids = styled.div`
    width:30vw;
    .pidimg{
      z-index: 1;
      width:100%;
      height:38vh;
      object-fit: cover;
    }
    .pidCody{
        width:72%;
        .slick-slider .slick-list
    {
        border:none;
        
        border-radius:0;
    }
        margin-bottom: 5vh;
        
    }
    .rnakercodys{
        max-width:90%;
        height:5.5vw;
        object-fit:fill;
    }
    .rankings{
        padding: 0 1.5vw 0 1.5vw;
    }
    .todayLine{
        width:7.5%;
        height:0.5vh;
        margin-bottom: 1vh;
        margin-top: 1vh;
        background-color: #7939ff;
    }
`;
const RankingSt =styled.div`
    position: relative;
    margin-bottom:-2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color:#333333;
    width:3vw;
    text-align: center;
    padding-top:0.8vh;
    padding-bottom: 0.8vh;

`;

function Ranking(){
   const handleScroll=()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop+clientHeight>=scrollHeight) {
        setPidNum(pidNum+6);
    }
   }
   useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    }
   })
    const [rankUser,setRankUser] = useState();
    const [pidNum,setPidNum]=useState(6)
    const [styles,setStyles]=useState("캐쥬얼");
    const [update,setUpdate] = useState(0);
    let settings={
        dots: false,  // 점은 안 보이게
        infinite: false, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };
    const id = useRecoilValue(TotalId);

    useEffect(() => {
            getRanking()
            .then(response => response.json())
            .then(response => {
                response.map((item)=>{
                    item.cody_image = [item.cody_image];
                })
                for(let i = 0; i<response.length-1; i++) {
                    if (response[i].u_id == response[i+1].u_id) {
                        response[i+1].cody_image = [...response[i].cody_image,...response[i+1].cody_image];
                        response.splice(i,1);
                        i--;
                    }
                } 
                response.sort(function comperator(a,b){
                    if (a.u_follower < b.u_follower) {
                        return 1;
                    }
                    if (a.u_follower > b.u_follower) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                })
                response.sort((a,b) => {
                    if (a.u_mainst > b.u_mainst) {
                        return 1;
                    }
                    if (a.u_mainst < b.u_mainst) {
                        return -1;
                    }
                })
                let index = 1;
                for(let i = 0; i < response.length; i++) {
                    response[i] = {...response[i],"rank":index};
                    if (i == response.length - 1 )break;
                    if (response[i].u_mainst != response[i+1].u_mainst) {
                        index = 0;
                    }
                    index++;
                }
                setRankUser(response)
            })
        }
        
    ,[update])
    
    const fetchFollow = useMutation(setFollowingCloset,{
        onSuccess: data => {
            if (data.message === "성공적으로 팔로우했습니다.") {
                alert("팔로우 성공");
                setUpdate(update+1);
            } else {
                alert("언팔로우 성공")
                setUpdate(update+1);
            }
        },
        onError: () =>{
            alert("에러발생")
        }
    });

    const onClickFollowingButton = (u_id) => {
        fetchFollow.mutate({
            "follower_id" : id,
            "followee_id" : u_id
        })
    }

    return(
        <>
        <StyleCollect>
            {styles=="캐쥬얼"?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles("캐쥬얼")}}>캐쥬얼</Style>:<Style onClick={()=>{setStyles("캐쥬얼")}}>캐쥬얼</Style>}
            {styles=="스트릿"?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles("스트릿")}}>스트릿</Style>: <Style onClick={()=>{setStyles("스트릿")}}>스트릿</Style>}
            {styles=="미니멀"?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles("미니멀")}}>미니멀</Style>: <Style onClick={()=>{setStyles("미니멀")}}>미니멀</Style>}
           {styles=="스타일1"? <Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles("스타일1")}}>스타일1</Style>:<Style onClick={()=>{setStyles("스타일1")}}>스타일1</Style>}
           {styles=="스타일2"? <Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles("스타일2")}}>스타일2</Style>:<Style onClick={()=>{setStyles("스타일2")}}>스타일2</Style>}
        </StyleCollect>
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
        <Page2>
            <First>
                <Pid>
                {rankUser ? rankUser.filter((item) => {
                   if (item.u_mainst == styles && item.rank % 3 == 1) { 
                    return true;
                   } else {
                    return false;
                   }
                }).map((item,index)=>{
                    return(
                    <Pids key={index}>
                        <div className="pids">
                        <RankingSt>{item.rank}st</RankingSt>
                        <PidImage>
                            <img className="pidimg" src={item.u_image} alt="ranking"/>
                        </PidImage>
                        <PidProfile>
                            <div className="pidName">{item.u_name}</div>
                            <div className="pidFollower">{item.u_follower}명이 팔로잉중</div>
                            <button  onClick = {()=>onClickFollowingButton(item.u_id)} type="button" className="followingBtn">팔로잉</button>
                        </PidProfile>
                        <PidCmKg>
                            <div>{item.u_height}cm {item.u_weight}kg {item.u_mainst}</div>
                        </PidCmKg>
                        <div className="todayLine"/>
                        <div className="pidCody">
                        <Slider {...settings}>
                        {item.cody_image[0] && item.cody_image.map((item,index)=>{
                        return(
                        <img key={index} className="rnakercodys" src={item} alt="rankerCody"/>
                        )
                        })}
                        </Slider>
                        </div>
                        </div>
                    </Pids>
                    )
                    }):""}
                </Pid>
            </First>
            <Second>
            <Pid>
            {rankUser ? rankUser.filter((item) => {
                   if (item.u_mainst == styles && item.rank % 3 == 2) { 
                    return true;
                   } else {
                    return false;
                   }
                }).map((item,index)=>{
                    return(
                        <Pids key={index}>
                            <div className="pids">
                            <RankingSt>{item.rank}st</RankingSt>
                            <PidImage>
                                <img className="pidimg" src={item.u_image} alt="ranking"/>
                            </PidImage>
                            <PidProfile>
                                <div className="pidName">{item.u_name}</div>
                                <div className="pidFollower">{item.u_follower}명이 팔로잉중</div>
                                <button onClick = {()=>onClickFollowingButton(item.u_id)} type="button" className="followingBtn">팔로잉</button>
                            </PidProfile>
                            <PidCmKg>
                                <div>{item.u_height}cm {item.u_weight}kg {item.u_mainst}</div>
                            </PidCmKg>
                            <div className="todayLine"/>
                            <div className="pidCody">
                            <Slider {...settings}>
                            {item.cody_image[0] && item.cody_image.map((item,index)=>{
                            return(
                            <img key={index} className="rnakercodys" src={item} alt="rankerCody"/>
                            )
                            })}
                            </Slider>
                            </div>
                            </div>
                        </Pids>
                    )}):""}
                </Pid>     
            </Second>
            <Third>
            <Pid>
            {rankUser ? rankUser.filter((item) => {
                   if (item.u_mainst == styles && item.rank % 3 == 0) { 
                    return true;
                   } else {
                    return false;
                   }
                }).map((item,index)=>{
                    return(
                        <Pids key={index}>
                            <div className="pids">
                            <RankingSt>{item.rank}st</RankingSt>
                            <PidImage>
                                <img className="pidimg" src={item.u_image} alt="ranking"/>
                            </PidImage>
                            <PidProfile>
                                <div className="pidName">{item.u_name}</div>
                                <div className="pidFollower">{item.u_follower}명이 팔로잉중</div>
                                <button onClick = {()=>onClickFollowingButton(item.u_id)} type="button" className="followingBtn">팔로잉</button>
                            </PidProfile>
                            <PidCmKg>
                                <div>{item.u_height}cm {item.u_weight}kg {item.u_mainst}</div>
                            </PidCmKg>
                            <div className="todayLine"/>
                            <div className="pidCody">
                                <Slider {...settings}>
                                    {item.cody_image[0] && item.cody_image.map((item,index)=>{
                                    return(
                                    <img key={index} className="rnakercodys" src={item} alt="rankerCody"/>
                                    )
                                    })}
                                </Slider>
                            </div>
                            </div>
                        </Pids>
                    )
                }):""}
                </Pid>    
            </Third>
            </Page2>
            </div>
        </>
    )
};
export default Ranking;