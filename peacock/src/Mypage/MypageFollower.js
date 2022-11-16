import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TotalId } from "../Recoil/Atoms";
import Slider from "react-slick";
import '../Style/slick.css';
import "../Style/slick-theme.css";
import '../index.css'
import { getRanking, getFollowingCloset, setFollowingCloset } from '../Recoil/Api';
import { useMutation } from "react-query";

const Container = styled.div`
    text-align: center;
    flex-direction: column;
    height:70vh;
    padding-top:3vh;
    border-radius:1vw;
`;

const FollowingProfile = styled.div`
    display: flex;
    gap: 1vw;
    margin-top:1vh;
    flex-wrap:wrap;
    margin-left:2vw;
    .followingProfiles{
        width:12vw;
        height:12vw;
        border-radius: 50%;
        z-index: 1;
        filter: brightness(50%);
        cursor: pointer;
    }
    .profiles{
        justify-content: center;
        align-items: center;
        text-align:center;
    }
`;

const Name = styled.div`
    position:relative;
    color:#F6F1FF;
    top:11vh;
    right:7.5vw;
    font-size:1.1vw;
    z-index: 2; 
`;

function MyPageFollower(){
    const [follow, setFollow] = useState([]);
    const id = useRecoilValue(TotalId);
    const navigate = useNavigate();

    useEffect(()=>{
        getFollowingCloset(id)
        .then(response => response.json())
        .then(response => {
            setFollow(response)
        })
    },[follow])

    const onClickTodayRanking = (u_id) => {
        navigate(`/closet/${u_id}`)
    }
    return(
        <Container>
            <FollowingProfile>
                {follow.length > 0 && follow.map((item,index)=>{
                            return(
                                     <div onClick = {() => onClickTodayRanking(item.u_id)} key={index}style={{display:"flex",textAlign:"center"}}>
                                        <img src={item.u_image} alt="profilesImg" className="followingProfiles"/>
                                        <Name>{item.u_name}</Name>
                                      </div>
                            )
                })}
            </FollowingProfile>
        </Container>    
        )
}
export default MyPageFollower;