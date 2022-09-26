import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate} from "react-router-dom"
import { LoginStatus, TotalId, TotalPw } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "../index.css"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:50vh;
    width:100%;
    margin-top:13vh;
`;
const Container1 = styled.div`
    background-color:#1E1E1E ;
    width:40%;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.07);
    padding-top:8vh;
    .log{
        font-size:2vw;
        margin:0;
        margin-left:2vw;
        color:white;
        font-family: 'SUIT';
        font-weight: 600;

    }
    .logserv{
        margin:0;
        margin-left:2vw;
        margin-top:1vh;
        color:darkgray;
        font-family: 'SUIT';
        font-weight: 100;
        font-size:0.8vw;
    }
    img{
        width:30%;
        margin-left:1.5vw;
        margin-top:20vh;

    }
`;
const Container2 = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom:5vh;
    width:60%;
    padding-top:8vh;
    input:focus{
        outline-color:  #7939FF;
    }
    box-shadow: 9px 9px 22px rgba(0, 0, 0, 0.08);
`
const ID = styled.div`
    .input:focus{
    border-color: yellow;
    }
`
const PW = styled.div`
    margin-top:1.5vh;
    margin-bottom: 4vh;
`
const Login = styled.div`
    margin-top:0.5vh;
    .login{
        cursor: pointer;
        color:white;
        background-color:#B0B0B0;
        font-family: 'SUIT';
        &:hover{
            background-color:#7939FF;
            color:white;
        }
    }
    .register{
        cursor: pointer;
        color:#747474;
        background-color: white;
        border:1px solid #747474;
        font-family: 'SUIT';
        font-weight: 500;
    }
`
const Input = styled.input`
    width:18vw;
    height:2.8vw;
    border: none;
    background-color:#F4F4F4;
    border-radius: 1vw;
    padding-left:1vw;
    ::placeholder{
        font-family: 'SUIT';
    }
  
`  
const Button = styled.button`
    width:18vw;
    height:2.3vw;
    font-size:0.7vw;
    border-radius: 0.8vw;
    border:none;
    
`;

const Find = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    gap:3vw;
    cursor: pointer;
    h3{
        font-size: 0.7vw;
        color:#747474;
        font-family: 'SUIT';
        font-weight: 400;
    }
`;

function LogIn(){   
    const [id,setId] = useState();
    const [pw,setPw] = useState();
    let navigate = useNavigate();
    const setterFnId=useSetRecoilState(TotalId);
    const setterFnPw=useSetRecoilState(TotalPw);
    const setterLoginStatus=useSetRecoilState(LoginStatus);

    function onClickLoginHandler() {
            setterFnId(id);
            setterFnPw(pw);
            setterLoginStatus(1);
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
                <div style={{display:"flex",width:"40%"}}>
                    <Container1>
                        <p className="log">LOG IN</p>
                        <p className="logserv">로그인이 필요한 서비스입니다.</p>
                        <img src="https://user-images.githubusercontent.com/44117975/192265942-32502a96-c0a4-4b31-8e25-64f57fcebae6.png" alt="logo"/>
                    </Container1>
                    <Container2>
                        <ID><Input onChange={onChangeId} placeholder="이메일"></Input></ID>
                        <PW><Input type="password"onChange={onChangePw}placeholder="비밀번호"></Input></PW>
                        <Login><Button className="login"onClick={onClickLoginHandler}>로그인</Button></Login>
                        <Login><Button className="register" onClick={()=>{navigate("/signUp")}}>회원가입</Button></Login>
                        <Find style={{display:"flex"}}>
                            <h3>아이디 찾기</h3>
                            <h3>비밀번호 찾기</h3>
                        </Find>
                    </Container2>
                </div>
            </Container>
          
        )
}
export default LogIn;