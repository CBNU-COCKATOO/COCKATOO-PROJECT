import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate} from "react-router-dom"

const Container = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom:5vh;
    height: 50vh;
    width:50%;
    margin-top:13vh;
`

const ID = styled.div`
    margin-top: 10%;
`
const PW = styled.div`
    margin-top:3vh;
    margin-bottom: 4vh;;
`
const Login = styled.div`
    margin-top:1vh;
`
const Input = styled.input`
    width:18vw;
    height:2.8vw;
    border: 1px solid black;
`  
const Button = styled.button`
    background-color: black;
    color:white;
    width:18vw;
    height:4vh;
    font-size:0.7vw;
`;

const Find = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    gap:3vw;
    a{
        text-decoration: none;
        font-size: 0.6vw;
        color:black;
    }
`;

function LogIn(){   
    const [id,setId] = useState();
    const [pw,setPw] = useState();
    let navigate = useNavigate();
    function handleClick() {
        if(id===pw&&id!==undefined&&pw!==undefined)
        navigate("/");
      }
 
    const onChangeId = (e) =>{
        setId(e.target.value);
    }
    const onChangePw = (e) =>{
        setPw(e.target.value);
    }
    return(
            <Container>
                <ID><Input onChange={onChangeId} placeholder="ID"></Input></ID>
                <PW><Input type="password"onChange={onChangePw}placeholder="PW"></Input></PW>
                <Login><Button onClick={handleClick}>로그인</Button></Login>
                <Login><Button onClick={()=>{navigate("/signUp")}}>회원가입</Button></Login>
                <Find style={{display:"flex"}}>
                    <Link to="./idFind"><h3>아이디 찾기</h3></Link>
                    <Link to="./pwFind"><h3>비밀번호 찾기</h3></Link>
                </Find>
            </Container>
        )
}
export default LogIn;