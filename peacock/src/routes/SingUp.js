import {Link} from "react-router-dom"
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TotalId, TotalPw } from "../atoms";

const Container = styled.div`
    width:50%;
    height:76vh;
    overflow: auto;
`;

const Contianer2 = styled.div`
    margin-top: 1vh;
    margin-left: 5vw;
`;
const Button = styled.button`
    width:7vw;
    height: 4vh;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    background-color: black;
    color:white;
    margin-left: 3vw;
`;
const ID = styled.input`
    width:20vw;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid darkgray;
`;

const AgreeCheck=styled.input`
    margin-top: 1vh;
    width: 1.2vw;
    height: 1.2vh;
`;

const ProfileInput = styled.input`
    width:5vw;
    margin-left:1vw;
    border-radius: 0.8vw;
    border: 0.05vw solid black;
    text-align: center;
    height: 4vh;
    margin-top: 1vh;
`;
const Agree = styled.div`
    overflow: auto;
    height:100px;
    width:80%;
    border: 1px solid black;
`;
const Span = styled.span`
    white-space: pre-wrap;
`;
const Styles = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap ;
    column-gap: 1vw;
    h4{
    border: 0.05vw solid black;
    border-radius: 0.8vw;
    padding:0.6vw;
    }
`
function SignUp(){
   
    const [agree,setAgree]=useState([0,0,0]);
    const [id,setId]=useState(0);
    const [checkId,setCheckId]=useState(0);
    const [pw,setPw]=useState(0);
    const [checkPw,setCheckPw]=useState(0);
    const [name,setName]=useState(0);
    const [email,setEmail]=useState(0);
    const [emailCheck,setEmailCheck]=useState(0);
    const [pwSame,setPwSame]=useState(0);
    const [style,setStyle] = useState(
        [
            {status:0,name:"캐주얼"},
            {status:0,name:"스트릿"},
            {status:0,name:"미니멀"},
            {status:0,name:"스타일1"},
            {status:0,name:"스타일2"},
            {status:0,name:"스타일3"},
            {status:0,name:"스타일4"},
        ]
    );
    const setterFnId=useSetRecoilState(TotalId);
    const setterFnPw=useSetRecoilState(TotalPw);
    const styleClick=(index)=>{
        let names = style[index].name;
        if(style[index].status)
        setStyle([...style.slice(0,index),{status:0,name:names},...style.slice(index+1)])
        else
        setStyle([...style.slice(0,index),{status:1,name:names},...style.slice(index+1)])
        console.log(style)
    }
    const Check1=()=>{
        if(agree[0]){
            agree.splice(0,1);
            setAgree([0,...agree])
        }
        else{
            agree.splice(0,1);
            setAgree([1,...agree])
        }   
        }

    const Check2=()=>{
        if(agree[1]){
            let first=agree[0];
            let end=agree[2];
            setAgree([first,0,end])
        }
        else{
            let first=agree[0];
            let end=agree[2];
            setAgree([first,1,end])
        }
    }
    const Check3=()=>{
        if(agree[2]){
            agree.pop();
            setAgree([...agree,0])
        }
        else{
            agree.pop();
            setAgree([...agree,1])
        }
    }
    const ButtonClick=()=>{
        setterFnId(id);
        setterFnPw(pw);
    }
    const handleChangeId=(e)=>{
        setId(e.target.value);
    }
    const handleChangePw=(e)=>{
        setPw(e.target.value);
    }
    const handleChangePwCheck=(e)=>{
        if(pw===e.target.value)setPwSame(1);
        else setPwSame(0);
    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const SameCheck =()=>{
        let new_id="nakhyeon";
        if(id===0)alert("아이디를 입력해주세요");
        else if(id===new_id){
            alert("중복된 아이디입니다.");
        }
        else {
            alert("사용가능한 아이디입니다.");
            setCheckId(1);
        }
    }

    return(
        <Container> 
           <Contianer2>
              <h3>ID</h3>
              <div style={{display:"flex"}}>
              <ID placeholder="ID" onChange={handleChangeId}/>
              <Button onClick={SameCheck}>중복확인</Button>
              </div>
          </Contianer2>

             <Contianer2>
                <h3>PW</h3>
                <ID placeholder="PW"onChange={handleChangePw}/>
            </Contianer2>

            <Contianer2>
              <h3>PW확인</h3>
              <ID placeholder="PW확인" onChange={handleChangePwCheck}/>
              {pwSame===1?<h5 style={{color:"green"}}>일치</h5>: <h5 style={{color:"red"}}>불일치</h5>}
             
             
            </Contianer2>

             <Contianer2>
                <h3>이름</h3>
                <ID placeholder="이름" onChange={handleChangeName}/>
            </Contianer2>

            < Contianer2>
                <h3>본인인증(선택)</h3>
                <div style={{display:"flex"}}>
                <ID placeholder="이메일 입력" onChange={handleChangeEmail}/>
                <Button>인증받기</Button>
                </div>
                <ID style={{marginTop:"1vh"}}placeholder="인증번호 입력" />
            </Contianer2>

            
            <Contianer2>
              <h3>회원 정보</h3>
              <div style={{display:"flex"}}>
                <h4>키</h4><ProfileInput placeholder="cm"/>
                <h4 style={{marginLeft:"1vw"}}>몸무게</h4><ProfileInput placeholder="kg"/>
              </div>
              <div style={{display:"flex",width:"80%"}}>
                 <div style={{width:"10%",marginTop:"1vh"}}><h4>스타일</h4></div>
                 <Styles>
                    {style.map((item,index)=>{
                        if(item.status)return(<h4 index={index} onClick={()=>styleClick(index)}style={{backgroundColor:"darkgray"}}>{item.name}</h4>);
                        else return( <h4 index={index} onClick={()=>styleClick(index)}>{item.name}</h4>);
                    })}
                 </Styles>
              </div>
             
            </Contianer2>
            <Contianer2>
                <h3>개인정보 이용 동의(필수)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
                <AgreeCheck type="checkbox" onClick={Check1}/>
                <label>동의합니다</label>
            </Contianer2>

            <Contianer2>
                <h3>이용약관 동의(필수)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
                <AgreeCheck type="checkbox" onClick={Check2}/>
                <label>동의합니다</label>
            </Contianer2>

            <Contianer2>
                <h3>이메일 수신 동의(선택)</h3>
                <Agree>
                <Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.
 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호, 
주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용 
일체
 - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
류로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.</Span></Agree>
                <AgreeCheck type="checkbox" onClick={Check3}/>
                <label>동의합니다</label>
            </Contianer2>
            <Contianer2>
             <button type="button" style={{width:"80%",height:"5vh",borderRadius:"9px"}}onClick={ButtonClick}>회원가입</button>
           </Contianer2>
        </Container>
    )
}
export default SignUp;