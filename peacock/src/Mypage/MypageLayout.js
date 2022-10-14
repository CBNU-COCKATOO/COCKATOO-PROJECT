import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom"
import '../index.css';

const Container = styled.div`
    display: flex;
    height: 81vh;
    
`;
const LEFT = styled.div`
    width:20%;
    margin: 3vw;
    margin-top:4vh;
    margin-left: 15vw;
    
`;
const Right = styled.div`
    width:70%;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    display: flex;
    margin-right: 2vw;
`;
const Nav = styled.div`
    width:100%; 
`;
const NavMenu =styled.div`
    cursor: pointer;
    width:82%;
    margin-left: 2.5vw;
    height:6vh;
    display: flex;
    align-items: center;
    margin-top:0.1vh;
    background-color: #F4F4F4;
    div{
        margin:0;
        margin-left:1vw;
        font-family: 'SUIT';
        font-weight: 500;
        line-height: 18px;
        font-size:0.7vw;
    }
    &:hover{
        background-color:white;
        color: #7939FF;
        font-weight: 600;
    }
`;
const Profile = styled.div`
    width:100%;
    margin-left:2.3vw;
    .todayLine{
        width:12%;
        height:0.3vh;
        margin-left:0.2vw;
        margin-bottom: 1vh;
        margin-top: 1vh;
        background-color: #7939ff;
    }
`
const ProfileImage = styled.div`
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
        margin-left: 7vw;
        font-weight: 600;
        font-family: 'SUIT';
    }
   
`;

const RankingCmkg =styled.div`
    font-family: 'SUIT';
    font-size:0.7vw;
    margin-top:1vh;
`;


const Detail = styled.div`
    width:80%;
    border-radius: 1vh;
    height:90%;
    margin-top:2vh;
    padding-bottom: 3vh;
`
;
function MyPageLayout(){   
    const navigate = useNavigate()
    return(
    <Container>
        <LEFT>
            <Nav>
                <Profile>
                    <ProfileImage>
                        <img style={{width:"82%",maxHeight:"33vh"}}src="https://user-images.githubusercontent.com/44117975/195272814-9bf4c5c3-3a1e-40ad-bf8c-f304eb304981.png" alt="profileImg"/>
                    </ProfileImage>
                    <RankingProfile>
                        <div className="rankName">김서기</div>
                        <div className="rankFollower">9099명이 팔로잉</div>
                    </RankingProfile>
                    <RankingCmkg>
                        <div>177cm 56kg 스트릿</div>
                    </RankingCmkg>
                        <div className="todayLine"/>
                </Profile>
                <NavMenu onClick={()=>navigate("/myPage/myPageInfoFix")}>
                    <div>회원 정보 변경</div>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageStyleFix")}>
                    <div>체형/스타일 변경</div>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageCloset")}>
                    <div>내 옷장 분석</div>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageFollower")}>
                    <div>팔로우 관리</div>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageSetting")}>
                    <div>설정</div>
                </NavMenu>
                <NavMenu onClick={()=>alert("탈퇴하지 마세요..ㅠㅠ")}>
                    <div>회원 탈퇴</div>
                </NavMenu>
            </Nav>
        </LEFT>
        <Right>
            <Detail>
                <Outlet/>
            </Detail>
        </Right>
       
    </Container>
        )
}
export default MyPageLayout;