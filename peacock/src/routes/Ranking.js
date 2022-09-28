import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from "styled-components"
import "../slick.css";
import "../slick-theme.css";
import Slider from "react-slick";

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
        {rank:9,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW-V-jF5Frv4AdL6SY00wcwuuITIbrU3NXw&usqp=CAU",
        name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
        cody:[
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
        ]},
        {rank:10,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",
        name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
        cody:[
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
        ]},
    {rank:11,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg2tsWkRK9NU0udYZ37jaG7CjW-yjY2NQDQ&usqp=CAU",
        name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
        cody:[
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
        ]},
    {rank:12,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXuiRBqKA0qVwkVzjTZ-cLPA1n5P_pVhRug&usqp=CAU",
        name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
        cody:[
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},

            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
        ]},
    {rank:13,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW-V-jF5Frv4AdL6SY00wcwuuITIbrU3NXw&usqp=CAU",
        name:"지연",follwer:"9,099",cm:172,kg:63,style:"스트릿",
        cody:[
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
            {codyImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SeUXZFjFeIaOWrk5v5s2B4cOYQXLbzew5868LNCzn3WVffHyntGTMhdjxnXbjq1ewy4&usqp=CAU"},
        ]},
]
function Ranking(){
   const handleScroll=()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if(scrollTop+clientHeight>=scrollHeight)
        setPidNum(pidNum+6);

   }
   useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    }
   })
   
    const [pidNum,setPidNum]=useState(6)
    const [styles,setStyles]=useState(0);
    let settings={
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };
  
    
    return(
        <>
        <StyleCollect>
            {styles==0?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles(0)}}>캐주얼</Style>:<Style onClick={()=>{setStyles(0)}}>캐주얼</Style>}
            {styles==1?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles(1)}}>스트릿</Style>: <Style onClick={()=>{setStyles(1)}}>스트릿</Style>}
            {styles==2?<Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles(2)}}>미니멀</Style>: <Style onClick={()=>{setStyles(2)}}>미니멀</Style>}
           {styles==3? <Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles(3)}}>스타일1</Style>:<Style onClick={()=>{setStyles(3)}}>스타일1</Style>}
           {styles==4? <Style style={{backgroundColor:" #7939FF",color:"white"}} onClick={()=>{setStyles(4)}}>스타일2</Style>:<Style onClick={()=>{setStyles(4)}}>스타일2</Style>}
        </StyleCollect>
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
        <Page2>
                <First>
                    <Pid>
                    {rankUser.filter((item)=>{
                        if(item.rank%3==1&&item.rank<=pidNum)return true;
                        return false;
                    }).map((item,index)=>{
                        return(
                        <Pids key={index}>
                            <div className="pids">
                            <RankingSt>{item.rank}st</RankingSt>
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
                            <Slider {...settings}>
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
                {rankUser.filter((item)=>{
                        if(item.rank%3==2&&item.rank<=pidNum)return true;
                        return false;
                    }).map((item,index)=>{                       
                         return(
                        <Pids key={index}>
                            <div className="pids">
                            <RankingSt>{item.rank}st</RankingSt>
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
                            <Slider {...settings}>
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
                {rankUser.filter((item)=>{
                        if(item.rank%3==0&&item.rank<=pidNum)return true;
                        return false;
                    }).map((item,index)=>{                 
                        return(
                        <Pids key={index}>
                            <div className="pids">
                            <RankingSt>{item.rank}st</RankingSt>
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
                            <Slider {...settings}>
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
            </div>
        </>
    )
};
export default Ranking;