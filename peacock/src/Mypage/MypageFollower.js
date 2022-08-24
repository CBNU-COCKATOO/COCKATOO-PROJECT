import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height:70vh;
`;

const Logo = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-left: 1.5vw;
    }
`;


function MyPageFollower(){
    return(
        <Container>
             <Logo>
                <h1 >팔로우 관리</h1>
             </Logo>
        </Container>    
        )
}
export default MyPageFollower;