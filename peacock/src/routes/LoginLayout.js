import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom"

const Container2 = styled.div`
    background-color: black;
    height:5vh;
`;

const Ad =styled.div`
    width: 50%;
    height: 100%;
    border-right:2px solid black;
    padding-top:15vh;
    padding-bottom:7vh;
    img{
        object-fit: scale-down;
    }
`;
function LogInLayout(){   
      return(
        <div>
        <div style={{display:"flex"}}>
            <Ad>
                <img src="https://user-images.githubusercontent.com/44117975/185579508-f37c1f91-bfd3-4d73-a77a-d38c431d2601.png" style={{width:"100%",height:"100%"}} alt="ad"></img>
            </Ad>
            <Outlet/>
        </div>
        <Container2/>
        </div>
        
    )
}
export default LogInLayout;