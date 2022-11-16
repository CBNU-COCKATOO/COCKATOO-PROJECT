import { useState, useEffect } from "react";
import {useNavigate,Outlet} from "react-router-dom"
import { TotalId } from "../Recoil/Atoms";
import { useRecoilValue } from "recoil";
import { getMyPage } from "../Recoil/Api";
import styled from "styled-components"
import '../index.css'

const Container = styled.div`
    display : flex;
    height : 81vh;
    
`;
const LEFT = styled.div`
    width : 20%;
    margin : 3vw;
    margin-top : 4vh;
    margin-left : 15vw;
    
`;
const Right = styled.div`
    width : 85%;
    justify-content : flex-start;
    align-items : center;
    text-align : center;
    display : flex;
    margin-right : 2vw;
`;
const Nav = styled.div`
    width : 100%; 
`;
const NavMenu =styled.div`
    cursor : pointer;
    width : 82%;
    margin-left : 2.5vw;
    height : 6vh;
    display : flex;
    align-items : center;
    margin-top : 0.1vh;
    background-color : #F4F4F4;
    div{
        margin : 0;
        margin-left : 1vw;
        font-family : 'SUIT';
        font-weight : 500;
        line-height : 18px;
        font-size : 0.7vw;
    }
    &:hover{
        background-color : white;
        color : #7939FF;
        font-weight : 600;
    }
`;
const Profile = styled.div`
    width : 100%;
    margin-left : 2.3vw;
    .todayLine{
        width : 12%;
        height : 0.3vh;
        margin-left : 0.2vw;
        margin-bottom : 1vh;
        margin-top : 1vh;
        background-color : #7939ff;
    }
`
const ProfileImage = styled.div`
    img{
        object-fit : cover;
    }
`;
const RankingProfile = styled.div`
    margin-top : 1vh;
    .rankName{
        font-size : 1vw;
        font-weight : 600;
        display : inline;
        font-family : 'SUIT';
    }
    .rankFollower{
        font-size : 0.7vw;
        color : #7939FF;
        display : inline;
        margin-left : 6vw;
        font-weight : 600;
        font-family : 'SUIT';
    }
   
`;

const RankingCmkg =styled.div`
    font-family : 'SUIT';
    font-size : 0.7vw;
    margin-top : 1vh;
`;


const Detail = styled.div`
    width : 80%;
    border-radius : 1vh;
    height : 90%;
    margin-top : 2vh;
    padding-bottom : 3vh;
`
;
function MyPageLayout(){   
    /*
    state
    user : 유저 정보 
    */
    const [user, setUser] = useState();

    /*
    variable
    id : 전역 상태 아이디 (로그인 시 set)
    navigae : 화면 전환을 위한 변수
    */
    const id = useRecoilValue(TotalId);
    const navigate = useNavigate();


    /*
    useEffect
    getMyPage : 마이페이지 유저 정보 로드 
    */
    useEffect(() => {
      if (!user) {
        getMyPage(id)
        .then(response => response.json())
        .then(response => {
            setUser(response)
        })
      }
    }, [])
    
    return(
    <Container>
        <LEFT>
            <Nav>
            {user && 
                <Profile>
                    <ProfileImage>
                    
                        <img style = {{
                            width : "82%",
                            maxHeight : "33vh"
                            }}
                            src = {user.u_image} 
                            alt="profileImg"
                        />
                    </ProfileImage>
                    <RankingProfile>
                        <div className="rankName">{user.u_name}</div>
                        <div className="rankFollower">{user.u_follower}명이 팔로잉</div>
                    </RankingProfile>
                    <RankingCmkg>
                        <div>{user.u_height}cm {user.u_weight}kg {user.u_mainst}</div>
                    </RankingCmkg>
                        <div className="todayLine"/>
                </Profile>
                }
                <NavMenu onClick = {() => navigate("/myPage/myPageInfoFix")}>
                    <div>회원 정보 변경</div>
                </NavMenu>
                <NavMenu onClick = {() => navigate("/myPage/myPageStyleFix")}>
                    <div>체형/스타일 변경</div>
                </NavMenu>
                <NavMenu onClick = {() => navigate("/myPage/myPageCloset")}>
                    <div>내 옷장 분석</div>
                </NavMenu>
                <NavMenu onClick = {() => navigate("/myPage/myPageFollower")}>
                    <div>팔로우 관리</div>
                </NavMenu>
                <NavMenu onClick = {() => alert("탈퇴하지 마세요..ㅠㅠ")}>
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