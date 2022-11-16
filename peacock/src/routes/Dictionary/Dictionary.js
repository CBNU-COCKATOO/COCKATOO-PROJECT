import styled from "styled-components"
import { useEffect, useState } from "react";
import {getDictionary, getUserCodyCloth, storeDictionary, deleteDictionary} from "../../Recoil/Api.js"
import { useRecoilValue } from "recoil";
import {TotalId} from "../../Recoil/Atoms.js"
import { useMutation } from 'react-query';

const Html = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height:70vh;
    width:100%;
    gap : 4vw;
    font-family:"SUIT";
`;
const Board = styled.div`
    display: flex;
    width:950px;
    flex-wrap:wrap;
    margin-top:1vh;
`;
const Example = styled.div`
    width : 20%;
    margin-right:2vw;
    margin-top:1vh;
    img{
        width:100%;
    }
`;
const Dot = styled.div`
    width:40px;
    height:40px;
    border:0.5px dotted darkgray;
    img{
        width:40px;
        height:40px;
    }
`;

const MyCloth = styled.div`
    width:15%;
    margin-top:1vh;
    input{
        margin-top:1vh;
        margin-bottom:1vh;
        height:4vh;
        width: 11.8vw;
        border-radius:10px;
        border:none;
        background-color:#F4F4F4;
        display: block;
        text-align: center;
        &:focus{
        outline-color:#7939FF;
    }
    }
`;

const ClothList = styled.div`
    display: flex;
    height:60vh;
    width:80%;
    padding-top:2vh;
    gap:3vh;
    border-radius:10px;
    flex-direction: column;
    overflow-y: scroll;
    background-color:#F4F4F4;
    img{
        height:24vh;
        width:8vw;
        object-fit:scale-down;
    }
    ::-webkit-scrollbar{
        background-color: #B0B0B0;
        width: 6px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #7939FF;
        border-radius: 10px;
        height:1px;
    }
`;
const Button = styled.button`
    margin-bottom:0.5vh;
    color:white;
    background-color: #7939FF;
    border:none;
    border-radius: 5px;
    display: block;
    width:11.9vw;
    height:3.8vh;
    cursor:pointer;
    font-weight:500;

`;

function Dictionary(){
    const [many, setMany] = useState([
        "white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "white","white","white","white","white","white","rgb(45,45,45)","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white",
        "white","white","white","white","white","white","rgb(45,45,45)","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","rgb(45,45,45)","white",
        "white","white","white","white","white","rgb(45,45,45)","white","white","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","rgb(45,45,45)","rgb(45,45,45)","white","white","white",
        "white","rgb(45,45,45)","white","white","white","white","white","rgb(45,45,45)","white","white","rgb(45,45,45)","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white",
        "white","white","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","rgb(45,45,45)","white","white","rgb(45,45,45)","white","white","white","white","white","white","white",
        "white","white","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white","white","white",
        "white","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)",
        "white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white",
        "white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white",
        "rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white",
        "rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","rgb(45,45,45)","white",
        "white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)",
        "rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)",
        "white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","white",
        "white","white","white","white","white","white","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)",
        "rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","white", "white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","rgb(45,45,45)","white","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "white","white","white","white","white","white","white","white","white"   
    ]);

    const [manyImage, setManyImage] = useState([
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},
        {"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"},{"d_image":"none"}
    ]);

    const correctColor = [
        "white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "white","white","white","white","white","white","rgb(45,45,45)","rgb(81,81,81)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","white","white",
        "white","white","white","white","white","white","rgb(45,45,45)","rgb(81,81,81)","rgb(45,45,45)","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(248,208,30)","rgb(204,162,22)","rgb(45,45,45)","white",
        "white","white","white","white","white","rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","rgb(45,45,45)","rgb(45,45,45)","rgb(248,208,30)","rgb(204,162,22)","rgb(204,162,22)",
        "rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","white","rgb(45,45,45)","rgb(204,162,22)","rgb(161,131,59)","rgb(45,45,45)","white","white","rgb(45,45,45)","rgb(45,45,45)","rgb(81,81,81)","rgb(81,81,81)","rgb(81,81,81)","rgb(248,208,30)","rgb(204,162,22)","rgb(204,162,22)",
        "rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)","rgb(204,162,22)","rgb(45,45,45)","white","white","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(81,81,81)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)",
        "rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(204,162,22)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)",
        "rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(161,131,59)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)",
        "white","white","white","white","white","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(204,162,22)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(161,131,59)","rgb(45,45,45)","rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white",
        "white","white","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(204,162,22)","white","rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","white","rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white",
        "rgb(45,45,45)","rgb(248,208,30)","rgb(161,131,59)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","rgb(81,81,81)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","white","rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","white",
        "rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(235,97,86)","rgb(235,97,86)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(45,45,45)","white","white","white","white","white","rgb(45,45,45)","rgb(204,162,22)",
        "rgb(81,81,81)","rgb(204,162,22)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(235,97,86)","rgb(235,97,86)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(194,111,39)","rgb(81,81,81)","rgb(194,111,39)","rgb(45,45,45)","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)",
        "rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(194,111,39)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","rgb(204,162,22)","rgb(204,162,22)","rgb(81,81,81)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(248,208,30)","rgb(248,208,30)","rgb(194,111,39)","rgb(81,81,81)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)",
        "rgb(204,162,22)","rgb(204,162,22)","rgb(248,208,30)","rgb(81,81,81)","rgb(81,81,81)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(204,162,22)",
        "rgb(204,162,22)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(81,81,81)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","rgb(45,45,45)","rgb(45,45,45)",
        "rgb(45,45,45)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(248,208,30)","rgb(45,45,45)","white", "white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","rgb(45,45,45)","rgb(248,208,30)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "rgb(45,45,45)","rgb(45,45,45)","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",
        "white","white","white","white","white","white","white","white","white"
    ];
    
    const [fetchInfo,setFetchInfo] = useState([]);
    const [indexViews,setIndexView] = useState(1);
    const [wherePaint,setWherePaint] = useState(0);
    const [indexs,setIndexs] = useState(0);
    const [clicked , setClicked] = useState(0);
    const [cody, setCody] = useState([]);
    const [update, setUpdate] = useState(0);
    const id = useRecoilValue(TotalId);

    useEffect(() => {
        getUserCodyCloth(id)
        .then(response => response.json())
        .then(response => {
            setCody(response);
        })
    },[])
    
    useEffect(() => {
        getDictionary(id)
        .then(response => response.json())
        .then(response => {
            setFetchInfo(response);
            }
        )
    },[])
    
    useEffect(() => {
        const sampleArray = [...many];
        const sampleImageArray = [...manyImage];

        fetchInfo.map((item) => {
            sampleArray[item.d_index-1] = correctColor[item.d_index-1];
            console.log(item)
            sampleImageArray[item.d_index-1] = {"d_image":item.d_image};
        })
        
        setMany(sampleArray);
        setManyImage(sampleImageArray);
    },[fetchInfo])
    

    const register = () => {
        if (wherePaint !== 0) {
            const first = (many.slice(0,wherePaint-1))
            const final = (many.slice(wherePaint))
            const firstImage = (manyImage.slice(0,wherePaint-1))
            const finalImage = (manyImage.slice(wherePaint))
            const newMany = [...first,correctColor[wherePaint-1],...final];
            const newManyImage = [...firstImage,{...cody[clicked]},...finalImage];
            console.log(cody[clicked]);
            setMany(newMany);
            setManyImage(newManyImage);
            registerCloth.mutate({
                "data" :{"d_index":wherePaint,...cody[clicked]},
                "u_id" : id
            })
        }
    }

    const visiable = () => {
        setIndexView(!indexViews);
    }

    const paint = (e) => {
        setWherePaint(e.target.value)
    }

    const enter = (e) => {
        if (e.key === 'Enter') {
            register(); 
          }
    }

    const onClickImage = (index) => {
        setClicked(index)
    }
    
    const store = () => {
        
    }

    const registerCloth = useMutation(storeDictionary, {
        onSuccess: (data) => {
            if (data.message === "성공적으로 Index 정보를 저장했습니다.") {
                alert("저장성공");
            }
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const onClickDeleteDictionary = () => {
        deleteDictionary({
            "u_id" : id,
            "d_index" : wherePaint
        }).then(response => setUpdate(+update+1))
    }

    return(
        <>
        <Html>
            <Example>
              <img src = "https://user-images.githubusercontent.com/44117975/201599671-81683500-a1d5-4892-b37a-46fc48b4d4b9.png" at="example"/>
            </Example>
            <Board>
                {indexViews ? many.map((item,index) => {
                    if(indexs)return (<Dot style={{backgroundColor:item}}>{index+1}</Dot>)
                    else return (<Dot style={{backgroundColor:item}}></Dot>)
                }):
                manyImage.map((item, index) => {
                    if (item.d_image === "none") {
                        if(indexs)return (<Dot style = {{backgroundColor:"back"}}>{index+1}</Dot>)
                        else return (<Dot style = {{backgroundColor:"back"}}></Dot>)
                    }
                    return (<Dot><img src = {item.d_image} alt="dic"/></Dot>)
                })
                }
            </Board>
            <MyCloth>
               <ClothList>
                    {cody.map((item, index) => {
                        if (index === clicked) {
                            return ( 
                            <div style={{height:"30vh"}}>
                             <img style = {{border:"5px solid #7939FF"}} onClick = {() => onClickImage(index)} src = {item.d_image}/>
                            </div>) 
                        }
                        else return (
                            <div style={{height:"30vh"}}>
                                <img style = {{border:"5px solid #F4F4F4"}} onClick = {() => onClickImage(index)} src = {item.d_image}/>
                            </div>
                        )
                    })}
               </ClothList>
               <input placeholder="등록할 인덱스를 입력해주세요" onKeyPress = {enter} onChange={paint}/>
               <Button onClick = {register}>등록하기</Button>
               <Button onClick = {() => setIndexs(!indexs)}>인덱스 보기</Button>
               <Button onClick = {visiable}>그림 보기</Button>
               <Button onClick = {onClickDeleteDictionary}>삭제하기</Button>
            </MyCloth>
        </Html>
        </>
    )
}
export default Dictionary;