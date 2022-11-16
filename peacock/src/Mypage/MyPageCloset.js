import styled from "styled-components"

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


function MyPageCloset(){
    return(
        <Container>
        <Logo>
           <h1>내 옷장 분석</h1>
        </Logo>
   </Container>    
    )
}
export default MyPageCloset;