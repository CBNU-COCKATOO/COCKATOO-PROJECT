import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TotalPw } from "../atoms";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height:70vh;
`;
const Check = styled.div`
    display: flex;
    margin-top:1vh;
    margin-right: 4vw;
    h5{
        margin-right:2vw;
       
    }
`;
const Checks = styled.div`
    display: flex;
    margin-top:1vh;
    h5{
        margin-right:2vw;
       
    }
`;
const Button = styled.button`
    width:8vw;
    height:4vh;
    border-radius: 0.4vw;
    margin-top: 2vh;
    background-color: powderblue;
    margin-left: 1vw;
`;
const Buttons = styled.button`
    width:8vw;
    height:4vh;
    border-radius: 0.4vw;
    margin-top: 2vh;
    background-color: powderblue;
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
function MyPageInfoFix(){
    const nowPw = useRecoilValue(TotalPw);
     
    const [status,SetStatus] = useState(1);
    const [pw,setPw] = useState("");
    const [newPw,setNewPw] = useState("");

    let newPwCheck="";

    const onChange = (e) =>{
        setPw(e.target.value);
     }
     const buttonClick = (e) =>{
        if(pw===nowPw) {
            SetStatus(0);
            alert("인증되었습니다:)");
        }
     }
     const onChangePw = (e)=>{
        setNewPw(e.target.value);
     }
     const onChangePwCheck = (e) =>{
        newPwCheck=e.target.value;
     }
     const submit = () =>{
        if(newPw===newPwCheck){
            SetStatus(1);
            alert("비밀번호 변경 완료");
        }
        else{
            alert("비밀번호가 일치하지 않습니다.");
        }
     }
    return(
        <>
         {status?
        <Container>
        <h5>현재 비밀번호를 입력해주세요!</h5>
            <Checks>
                <input onChange={onChange} style={{borderRadius:"1vh",width:"15vw",height:"5vh",textAlign:"center"}} type="password"/>
            </Checks>
            <Buttons onClick={buttonClick}>
            확인
            </Buttons>
        </Container>:
        <Container>
             <Logo>
                <h1 >비밀번호 변경</h1>
             </Logo>
             <Check>
                <h5>새 비밀번호</h5>
                <input onChange={onChangePw} style={{borderRadius:"1vh",width:"15vw",height:"5vh",textAlign:"center"}} type="password"/>
            </Check>
            <Check>
                <h5 style={{marginRight:"1.3vw"}}>비밀번호 확인</h5>
                <input onChange={onChangePwCheck} style={{borderRadius:"1vh",width:"15vw",height:"5vh",textAlign:"center"}} type="password"/>
            </Check>
            <Button onClick={submit}>확인</Button>
        </Container>
        }
        </>
        )
        
}
export default MyPageInfoFix;