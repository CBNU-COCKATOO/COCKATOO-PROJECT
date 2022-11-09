import React, { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TotalId,TotalPw } from "../atoms";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import '../index.css'

const Container = styled.div`
    display: flex;
    margin-left:15vw;
    flex-direction: column;
    font-family: 'SUIT';
`;
const Page = styled.div`
    margin-top: 10vh;
    width:100%;
    .line{
        margin-left:17vw;
        margin-top:5vh;
        width:33vw;
        height:0.5vh;
        background-color: #7939ff;
        display: inline-block;

    }`;
const TodayRanking = styled.div`
    display: flex;
`;
const TRtitle = styled.div`
    width:20%;
    margin-top: 5vh;
    font-family: 'SUIT';
    .todayRanking{
        font-size:1.1vw;
    }
    .today{
        font-size:2vw;
        font-weight: 600;
        padding-top:1vh;
    }
    button{
        cursor: pointer;
        margin-top:4vh;
        width:7vw;
        color: #7939ff;
        font-weight: 600;
        background-color: #F6F1FF;
        border:none;
        border-radius: 1vw;
        font-size: 0.7vw;
        padding-top:1.2vh;
        padding-bottom:1.2vh;
        font-family: 'SUIT';
    }
    .todayLetter{
        margin-top:1vh;
        margin-left:0.1vw;
        font-family: 'SUIT';
        color: #747474;
        font-size:0.8vw;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: -0.03em;
    }
    .todayLine{
        margin-left:0.1vw;
        margin-top:29vh;
        width:7.5%;
        height:0.5vh;
        background-color: #7939ff;
    }
`;
const TRSlider =styled.div`
    width:82%;
    .slick-slider .slick-list
    {
        border:none;
        
        border-radius:0;
    }
`;
const Ranking = styled.div`
    border-left:1px solid #747474;
    width:30vw;
    .rankerimg{
      margin-top:1vh;
      z-index: 1;
      width:100%;
      height:40vh;
      object-fit: contain;
    }
    .rankercody{
        width:100%;
    }
    .rnakercodys{
        max-width:90%;
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
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    color:white;
    background-color:#333333;
    width:3vw;
    text-align: center;
    padding-top:0.8vh;
    padding-bottom: 0.8vh;

`;
const RankingProfile = styled.div`
    margin-top:1vh;
    .rankName{
        font-size:1vw;
        font-weight: 600;
        display: inline;
        font-family: 'SUIT';
    }
    .rankFollower{
        font-size:0.7vw;
        color:#7939FF;
        display: inline;
        margin-left: 12.7vw;
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
    }
`;
const RnakingImg =styled.div`
    width:100%;
`;
const RankingCmkg =styled.div`
    font-family: 'SUIT';
    font-size:0.7vw;
`;
const RankingArrow = styled.div`
    text-align: right;
    margin-top:3vh;
    margin-right: 10vw;
    img{
        width:3vw;
    }
`;
const Following = styled.div`
    display: flex;
    margin-top:10vh;

`;
const FollowingTitle = styled.div`
    width:20%;
    display: flex;
    font-size:1.2vw;
    font-family: 'SUIT';
    font-weight: 600;
    align-items: center;
`;
const FollowingProfile = styled.div`
    width:80%;
    .followingProfiles{
        width:10vw;
        height:10vw;
        border-radius: 50%;
        z-index: 1;
        filter: brightness(50%);
    }
    .profiles{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
    }
    .slick-slider .slick-list
    {
        border:none;
        border-radius:0;
    }
`;
const Name = styled.div`
    position:relative;
    left:4.3vw;
    bottom:11vh;
    color:white;
    z-index: 2; 
`;
const Page2 = styled.div`
    display: flex;
    width:80%;
    margin-top:10vh;
`;
const First = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;
    margin-top:10vh;

`;
const Second = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;
`;
const Third = styled.div`
    width: 33.333%;
    border-right: 1px solid #747474;
    margin-top:10vh;
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
    .pidName{
        font-size:1vw;
        font-weight: 600;
        display: inline;
        font-family: 'SUIT';
    }
    .pidFollower{
        font-size:0.7vw;
        color:#7939FF;
        display: inline;
        margin-left: 11.9vw;
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
      object-fit: contain;
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
const More = styled.button`
    cursor: pointer;
    margin-top:5vh;
    width:15vw;
    height:4vh;
    margin-left:28vw;
    background-color: #7939FF;
    color:white;
    border:none;
    border-radius: 0.5vw;
`;


function Main(){
    const now = new Date()
    const year=now.getFullYear()
    let todayMonth = now.getMonth()+1
    if(todayMonth<10)todayMonth='0'+todayMonth
    let todayDate = now.getDate()
    let todayDate = now.getDate();
    if(todayDate<10) todayDate='0'+todayDate;
    const navigate = useNavigate()
    // const ids = useRecoilValue(TotalId);
    // const pws = useRecoilValue(TotalPw);
    const [pidNum,setPidNum]=useState(2)

    const settings = {
        dots: false,  // 점은 안 보이게
        infinite: false, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 3, // 4장씩 보이게 해주세요
        slidesToScroll: 1, //   1장씩 넘어가세요
    };
    const settings2 = {
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, // 4장씩 보이게 해주세요
        slidesToScroll: 1, //   1장씩 넘어가세요
    };
    const settings3 = {
        dots: false,  // 점은 안 보이게
        infinite: false, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 5.5, //   4장씩 보이게 해주세요
        slidesToScroll: 3, //   1장씩 넘어가세요
    };
    const rankUser = [
        {rank:1,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg2tsWkRK9NU0udYZ37jaG7CjW-yjY2NQDQ&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXuiRBqKA0qVwkVzjTZ-cLPA1n5P_pVhRug&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},

                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW-V-jF5Frv4AdL6SY00wcwuuITIbrU3NXw&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
            {rank:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:6,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg2tsWkRK9NU0udYZ37jaG7CjW-yjY2NQDQ&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:7,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXuiRBqKA0qVwkVzjTZ-cLPA1n5P_pVhRug&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},

                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
        {rank:8,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW-V-jF5Frv4AdL6SY00wcwuuITIbrU3NXw&usqp=CAU",
            name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
            cody:[
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
                {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            ]},
    ]
    return(
        <Container>
            <Page>
                <TodayRanking>
                    <TRtitle>
                        <div className="todayRanking">Today&apos;s ranking</div>
                        <div className="today">{year}.{todayMonth}.{todayDate}</div>
                        <button type="button" onClick={()=>navigate('/ranking')}>전체 랭킹 확인하기</button>
                        <div className="todayLine"/>
                        <div className="todayLetter">피콕이 매일 선정하는<br/>옷장 순위를 확인해보세요!</div>
                    </TRtitle>
                    <TRSlider>
                        <Slider {...settings}>
                            {rankUser.map((item,index)=>{
                                return(
                                    <Ranking key={index}>
                                        <div className="rankings">
                                        <RankingSt>{item.rank}st</RankingSt>
                                        <RnakingImg>
                                            <img className="rankerimg" src={item.img} alt="ranking"/>
                                        </RnakingImg>
                                         <RankingProfile>
                                            <div className="rankName">{item.name}</div>
                                            <div className="rankFollower">{item.follwer}</div>
                                            <button type="button" className="followingBtn">팔로잉</button>
                                        </RankingProfile>
                                        <RankingCmkg>
                                            <div>{item.cm}cm {item.kg}kg {item.style}</div>
                                        </RankingCmkg>
                                         <div className="todayLine"/>
                                        <div className="rankercody">
                                        <Slider {...settings2}>
                                            {item.cody.map((item,index)=>{
                                                return(
                                                    <img key={index}className="rnakercodys" src={item.codyImg} alt="rankerCody"/>
                                                )
                                            })}
                                        </Slider>
                                        </div>
                                        </div>
                                    </Ranking>
                                )
                            })}
                        </Slider>
                    </TRSlider>
                </TodayRanking>
                <RankingArrow>
                    <img src="https://user-images.githubusercontent.com/44117975/192132659-31418788-578a-453a-b117-051eb1e473f7.png" alt="arrow"/>
                </RankingArrow>
                <Following>
                    <FollowingTitle>
                        <div>USER님이<br/>팔로우하는<br/>23개의 옷장 </div>
                    </FollowingTitle>
                    <FollowingProfile>
                        <Slider {...settings3}>
                        {rankUser.map((item,index)=>{
                            return(
                                     <div key={index}style={{display:"flex",textAlign:"center"}}>
                                        <img src={item.img} alt="profilesImg" className="followingProfiles"/>
                                        <Name>{item.name}</Name>
                                      </div>
                            )
                        })}
                        </Slider>
                    </FollowingProfile>
                </Following>
                <div className="line"/>
               <div className="line" style={{width:"18vw",backgroundColor:"gray",height:"0.2vh",marginLeft:0,marginBottom:"0.1vh"} }/>
                
            </Page>
            <Page2>
                <First>
                    <Pid>
                    {rankUser.slice(0,pidNum).map((item,index)=>{
                        return(
                        <Pids key={index}>
                            <div className="pids">
                            <PidImage>
                             <img className="pidimg" src={item.img} alt="ranking"/>
                            </PidImage>
                            <PidProfile>
                                <div className="pidName">{item.name}</div>
                                <div className="pidFollower">{item.follwer}</div>
                                <button type="button" className="followingBtn">팔로잉</button>
                            </PidProfile>
                            <PidCmKg>
                             <div>{item.cm}cm {item.kg}kg {item.style}</div>
                            </PidCmKg>
                            <div className="todayLine"/>
                            <div className="pidCody">
                            <Slider {...settings2}>
                            {item.cody.map((item,index)=>{
                            return(
                            <img key={index} className="rnakercodys" src={item.codyImg} alt="rankerCody"/>
                            )
                            })}
                            </Slider>
                            </div>
                            </div>
                        </Pids>
                        )
                        })}
                    </Pid>
                </First>
                <Second>
                <Pid>
                    {rankUser.slice(0,pidNum).map((item,index)=>{
                        return(
                        <Pids key={index}>
                            <div className="pids">
                            <PidImage>
                             <img className="pidimg" src={item.img} alt="ranking"/>
                            </PidImage>
                            <PidProfile>
                                <div className="pidName">{item.name}</div>
                                <div className="pidFollower">{item.follwer}</div>
                                <button type="button"className="followingBtn">팔로잉</button>
                            </PidProfile>
                            <PidCmKg>
                             <div>{item.cm}cm {item.kg}kg {item.style}</div>
                            </PidCmKg>
                            <div className="todayLine"/>
                            <div className="pidCody">
                            <Slider {...settings2}>
                            {item.cody.map((item,index)=>{
                            return(
                            <img key={index}className="rnakercodys" src={item.codyImg} alt="rankerCody"/>
                            )
                            })}
                            </Slider>
                            </div>
                            </div>
                        </Pids>
                        )
                        })}
                    </Pid>     
                </Second>
                <Third>
                <Pid>
                    {rankUser.slice(0,pidNum).map((item,index)=>{
                        return(
                        <Pids key={index}>
                            <div className="pids">
                            <PidImage>
                             <img className="pidimg" src={item.img} alt="ranking"/>
                            </PidImage>
                            <PidProfile>
                                <div className="pidName">{item.name}</div>
                                <div className="pidFollower">{item.follwer}</div>
                                <button type="button" className="followingBtn">팔로잉</button>
                            </PidProfile>
                            <PidCmKg>
                             <div>{item.cm}cm {item.kg}kg {item.style}</div>
                            </PidCmKg>
                            <div className="todayLine"/>
                            <div className="pidCody">
                            <Slider {...settings2}>
                            {item.cody.map((item,index)=>{
                            return(
                            <img key={index} className="rnakercodys" src={item.codyImg} alt="rankerCody"/>
                            )
                            })}
                            </Slider>
                            </div>
                            </div>
                        </Pids>
                        )
                        })}
                    </Pid>    
                </Third>
            </Page2>
            <More onClick={()=>setPidNum(pidNum+2)}>6개 더보기</More>
        </Container>     
           
    )
}
export default Main;