import { useState } from "react";
import styled from "styled-components"
import { useRecoilValue } from "recoil";
import { TotalId } from "../Recoil/Atoms";
import { getLogin , changePw} from "../Recoil/Api";
import {useMutation} from "react-query"

const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
    flex-direction : column;
    height:70vh;
    h5{
        font-family :'SUIT';
    }
`;
const Check = styled.div`
    display : flex;
    margin-top :1vh;
    margin-right : 4vw;
    h5{
        margin-right :2vw;
        font-family :'SUIT';
       
    };
    input:focus{
        outline-color : #7939FF;
    }
    input{
        border : none;
        background-color : #F4F4F4;
        border-radius : 0.3vw;
    }
`;
const Checks = styled.div`
    display : flex;
    margin-top :1vh;
    h5{
        margin-right : 2vw;
       
    }
    input:focus{
        outline-color : #7939FF;
    }
    input{
        border : none;
        background-color : #F4F4F4;
        border-radius : 0.3vw;
    }
`;
const Button = styled.button`
    width : 6vw;
    height : 4vh;
    border-radius : 0.5vw;
    border : none;
    margin-top : 2vh;
    margin-left : 1vw;
    color : white;
    background-color : #7939FF;
    font-family : 'SUIT';
    cursor : pointer;
`;
const Buttons = styled.button`
    width : 6vw;
    height : 4vh;
    border-radius : 0.5vw;
    border : none;
    margin-top: 2vh;
    color : white;
    background-color : #7939FF;
    font-family : 'SUIT';
    cursor : pointer;
`;
const Logo = styled.div`
    align-items :  center;
    justify-content: center;
    text-align : center;
    div{
        font-family : 'SUIT';
        margin-left : 1.5vw;
        font-size : 1vw;
        font-weight : 600;
        margin-right : 1.5vw;
    }
`;

function MyPageInfoFix(){
    /*
    state
    status : 올바른 비밀번호 입력 상태 
    pw : 유저 확인 비밀번호
    newPw : 새로운 비밀번호
    */
    const [status, SetStatus] = useState(1);
    const [pw, setPw] = useState("");
    const [newPw, setNewPw] = useState("");

    /*
    variable 
    id : 전역 상태 아이디 (로그인 시 set)
    newPwCheck : 새로운 비밀번호 확인 변수 
    */
    const id = useRecoilValue(TotalId);
    let newPwCheck = "";

    /*
    onChange 
    onChange : 유저 확인 비밀번호 입력
    onChangePw : 새로운 비밀번호 입력
    onChangePwCheck : 새로운 비밀번호 확인 
    */
    const onChangeCheck = (e) =>{
        setPw(e.target.value);
    };

    const onChangePw = (e)=>{
        setNewPw(e.target.value);
    };
     
    const onChangePwCheck = (e) =>{
        newPwCheck = e.target.value;  
    };

    /*
    onClick 
    onClickCheckButton : 유저 확인 버튼 클릭
    onClickSubmitButton : 비밀번호 변경 버튼 클릭
    */
    const onClickCheckButton = () =>{
        checkUser();
    }
     
    const onClickSubmitButton = () =>{
        if(newPwCheck === newPw) {
            registerNewPw.mutate({"newPw":newPw, "id":id});
        } else {
            alert("일치하지 않습니다")
        }   
    }

    /*
    react-query
    registerNewPw : 새로운 비밀번호 등록
    checkUser : 유저 확인 
    */
    const registerNewPw = useMutation(changePw, {
        onSuccess : (data) => {
            SetStatus(1);
            alert("비밀번호 변경 완료");
        },
        onError : () => {
            alert("there was an error")
        },
    });

    const checkUser = () => {
        getLogin(id, pw)
        .then(response => response.json())
        .then(response => {
            if (response.message === "로그인 성공") {
                SetStatus(0);
                alert("인증되었습니다:)");
            } else {
                alert("다시 입력해주세요");
            }
        })
    }
     
    
    return(
        <>
        {status?
        <Container>
            <h5>현재 비밀번호를 입력해주세요!</h5>
            <Checks>
                <input onChange = {onChangeCheck} 
                       style = {{
                            borderRadius : "1vh",
                            width : "15vw",
                            height : "5vh",
                            textAlign : "center"
                       }}
                />
            </Checks>
            <Buttons onClick = {onClickCheckButton}>확인</Buttons>
        </Container>
        :
        <Container>
            <Logo>
                <div>비밀번호 변경</div>
            </Logo>
            <Check>
                <h5>새 비밀번호</h5>
                <input onChange = {onChangePw} 
                       style = {{
                            borderRadius:"1vh",
                            width:"15vw",
                            height:"5vh",
                            textAlign:"center"
                       }} 
                       type="password"/>
            </Check>
            <Check>
                <h5 style = {{marginRight : "1.3vw"}}>비밀번호 확인</h5>
                <input onChange = {onChangePwCheck} 
                       style = {{
                            borderRadius:"1vh",
                            width:"15vw",
                            height:"5vh",
                            textAlign:"center"
                        }} 
                        type="password"
                />
            </Check>
            <Button onClick={onClickSubmitButton}>확인</Button>
        </Container>
        }
        </>
        )
        
}
export default MyPageInfoFix;