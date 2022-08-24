import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom"

const Container = styled.div`
    display: flex;
    height: 81vh;
    
`;
const LEFT = styled.div`
    width:30%;
    text-align: center;
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
    justify-content: center;
    align-items: center;
`;
const NavMenu =styled.div`
    width:80%;
    border:1px solid black;
    margin-left: 2.5vw;
    height:6vh;
    margin-top:0.1vh;
    &:hover{
        background-color:darkgray;
    }
`;
const Profile = styled.div`
    width:80%;
    height:38vh;
    border:1px solid black;
    margin-left: 2.5vw;
    border-bottom: 0;
`
const ProfileImage = styled.div`
    height:33vh;
`;
const ProfileInfo = styled.div`
    height:5vh;
    border-top:1px solid black;
    display: flex;
    align-items: center;
`   
const ProfileInfoName = styled.div`
    width:25%;
`;
const ProfileInfoFollower = styled.div`
    width:25%;
`;
const ProfileHeight = styled.div`
    width:50%;
`;

const Detail = styled.div`
    width:80%;
    border:1px solid black;
    border-radius: 1vh;
    height:90%;
    margin-top:2vh;
    padding-bottom: 3vh;
`
;
function MyPageLayout(){   
    let navigate = useNavigate();
    return(
    <Container>
        <LEFT>
            <Nav>
                <Profile>
                    <ProfileImage>
                        <img style={{width:"70%",height:"100%" ,borderRadius:"50%"}}src="https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png" alt="profileImg"/>
                    </ProfileImage>
                    <ProfileInfo>
                        <ProfileInfoName><h4>김서기</h4></ProfileInfoName>
                        <ProfileHeight><h4>177cm <t/> 67kg</h4></ProfileHeight>
                        <ProfileInfoFollower><h4>팔로워 10000</h4></ProfileInfoFollower>
                    </ProfileInfo>
                </Profile>
                <NavMenu onClick={()=>navigate("/myPage/myPageInfoFix")}>
                    <h3>회원 정보 변경</h3>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageStyleFix")}>
                    <h3>체형/스타일 변경</h3>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageCloset")}>
                    <h3>내 옷장 분석</h3>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageFollower")}>
                    <h3>팔로우 관리</h3>
                </NavMenu>
                <NavMenu onClick={()=>navigate("/myPage/myPageSetting")}>
                    <h3>설정</h3>
                </NavMenu>
                <NavMenu onClick={()=>alert("탈퇴하지 마세요..ㅠㅠ")}>
                    <h3>회원 탈퇴</h3>
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