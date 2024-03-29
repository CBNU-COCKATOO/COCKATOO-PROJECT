import styled from "styled-components";
import { useEffect, useState ,useRef} from "react";
import { useMutation, useQuery } from "react-query";
import { postSignup,getIdSame,imageUpload, postEmail, getEmail } from "../../Recoil/Api";
import { useNavigate } from "react-router-dom";

import "../../index.css"
const Container = styled.div`
    width:50%;
    height:76vh;
    overflow-y: auto;
    ::-webkit-scrollbar{
        background-color: #B0B0B0;
        width: 10px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #7939FF;
        border-radius: 10px;
        height:1px;
    }
`;

const Contianer2 = styled.div`
    p{
        margin:0;
        margin-bottom:1vh;
        margin-top:1vh;
        margin-left:0.8vw;
        font-size:0.7vw;
        font-family: 'Pretendard';
        font-weight: 500;
        color:#454545;
    }
    h5{
        margin:0;
        margin-left:0.8vw;
        margin-top:0.2vh;
        font-family: 'Pretendard';
    }
    input:focus{
        outline-color:#7939FF;
    }
    label{
        font-family: "Pretendard";
        font-size:0.6vw;
    }
    .register{
        cursor: pointer;
        &:hover{
            background-color:#7939FF; 
            color:white;
        }
    }
`;
const Button = styled.button`
    width:4.5vw;
    height: 4.8vh;
    margin-left:1vw;
    border-radius: 5px;
    border: none;
    border-radius: 0.7vw;
    font-size: 0.7vw;
    background-color: #B0B0B0;
    color:white;
    cursor: pointer;
    font-family: "Pretendard";
    &:hover{
        background-color: #7939FF;
        color:white;
    }
    
`;
const ID = styled.input`
    width:15vw;
    padding-left:1vw;
    height: 5vh;
    border-radius: 1vw;
    border: none;
    background-color: #F4F4F4;
    margin-bottom: 2vh;
    margin-left:0.1vw;
    ::placeholder{
        font-family: 'Pretendard';
    }
    p{
        margin:0;
    }
`;

const AgreeCheck=styled.input`
    margin-top: 1vh;
    width: 1.2vw;
    height: 1vh;
    margin-left:1vw;
    
`;

const ProfileInput = styled.input`
    width:5vw;
    margin-left:1vw;
    border-radius: 0.8vw;
    border: 0.05vw solid black;
    text-align: center;
    height: 4vh;
    border: none;
    background-color: #F4F4F4;
`;
const Agree = styled.div`
    overflow: auto;
    height:100px;
    width:65%;
    font-size:0.5vw;
    margin-left: 1vw;
    border: none;
    background-color: #F4F4F4;
    border-radius: 0.5vw;
    padding:1vw;
    font-family: "Pretendard";
    ::-webkit-scrollbar{
        background-color: #B0B0B0;
        width: 2px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #7939FF;
        border-radius: 10px;
        height:1px;
    }
`;
const Span = styled.span`
    white-space: pre-wrap;
`;
const Styles = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap ;
    column-gap: 1vw;
    margin-left:0.6vw;
    h4{
    width:2.1vw;
    text-align: center;
    border: 1px solid white;
    background-color: #F4F4F4;
    border-radius: 0.8vw;
    padding:0.6vw;
    font-family: "Pretendard";
    font-size:0.6vw;
    font-weight: 100;
    cursor: pointer;
    &:hover{
        background-color: white;
        color:#7939FF;
        font-weight: bold;
        border:1px solid #7939FF;
    }
    }
`;
const Title = styled.div`
    width:50%;
    .signup{
        margin:0;
        margin-left:2vw;
        margin-top:1vh;
        color:#1E1E1E;
        font-family: 'Pretendard';
        font-weight: 600;
        font-size:2vw;
    }
    .signupserv{
        margin-left:2vw;
        font-family: 'Pretendard';
        font-size:0.8vw;
        color:#1E1E1E;
        opacity: 0.6;

    }
`;
const Page = styled.div`
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-top:12vh;
`;
 
const Image = styled.div`
    cursor: pointer;
    img{
        width:70%;
        margin-left:1vw;
    }
`;

function SignUp(){
    const [agree, setAgree] = useState([0,0,0]); //동의
    const [id, setId] = useState(0); //아이디
    const [idCheck, setIdCheck] = useState(0); //아이디 중복확인
    const [pw, setPw] = useState(0); //비밀번호
    const [pwSame, setPwSame] = useState(0); //비밀번호 확인 
    const [name, setName] = useState(0); //이름
    const [email, setEmail] = useState(0); //이메일
    const [emailCheck, setEmailCheck] = useState(0); //이메일 체크
    const [emailSame, setEailSame] = useState(0);
    const [cm, setCm] = useState(0);
    const [kg, setKg] = useState(0);
    const [mainStyle, setMainStyle] = useState( //메인스타일
        ["캐쥬얼","스트릿","미니멀","스타일1","스타일2","스타일3"]
    );
    const [subStyle, setSubStyle] = useState( //스타일
        ["캐쥬얼","스트릿","미니멀","스타일1","스타일2","스타일3" ]
    );
    const [mainStyleStauts,setMainStyleStauts]=useState(0);
    const [subStyleStauts,setSubStyleStauts]=useState(0);
    const [imageUrl, setImageUrl] = useState(null); //이미지 url
    const [convertedUrl, setConvertedUrl] = useState("");
    const [answer, setAnswer] = useState("");
    //메인 스타일 클릭 함수
    const mainStyleClick=(index)=>{
        setMainStyleStauts(index);
       }
     //서브 스타일 클릭 함수
     const subStyleClick=(index)=>{
        setSubStyleStauts(index);  
    }
    //첫번째 동의 함수
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
    //두번째 동의 함수
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
    //세번째 동의 함수
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
  
    const signUp = useMutation(postSignup, {
        onSuccess: data => {
            console.log(data);
            const message = "success"
            alert(message)
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const checkEmail = useMutation(postEmail, {
        onSuccess: data => {
            if (data.message === "메일 발송 성공") {
                alert("메일함을 확인해주세요");
            }
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const checkMail = useMutation(getEmail, {
        onSuccess: data => {
            if (data.message === "이메일 인증에 성공했습니다.") {
                setEailSame(1);
            }
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const registerCloth = useMutation(imageUpload, {
        onSuccess: (data) => {
            setConvertedUrl(data.location);
        },
        onError: () => {
            alert("there was an error")
        },
    });
    
    const imgRef = useRef();

    const onChangeImage = () => {
        const file = imgRef.current.files[0];
        let formData = new FormData();
        formData.append("file",file);
        registerCloth.mutate(formData)
    };
    const onClickFileBtn = (e) => {
        imgRef.current.click();
    }
    //회원가입 버튼 클릭 함수
    const ButtonClick=()=>{
        //최소 8자에 하나의 문자 및 하나의 숫자 및 하나의 특수 문자 포함된 비밀번호인지 체크
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g.test(pw)&&/[a-zA-Z]{6,}/g.test(id)){
            const new_style = style.filter((item)=>item.status==1);
        }
        
        let emailAgree = "FALSE";

        if(agree[2] === 1){
            emailAgree = "TRUE";
        }
        

        if (emailSame) {
            signUp.mutate(
                {
                    "u_id": id,
                    "u_pw": pw,
                    "u_name": name,
                    "u_image": convertedUrl,
                    "u_email": email,
                    "u_height": cm,
                    "u_weight": kg,
                    "u_mainst": mainStyle[mainStyleStauts],
                    "u_subst" : subStyle[subStyleStauts],
                    "u_emagree":emailAgree
                 }
            );
        }
    }

    const onClickEmailButton = () => {
        checkEmail.mutate({
            "u_email" : email,
        })
    }
      
    //아이디 변경 함수
    const handleChangeId=(e)=>{
        setId(e.target.value);
    }
    //비밀번호 변경 함수
    const handleChangePw=(e)=>{
        setPw(e.target.value);
    }
    //비밀번호 확인 함수
    const handleChangePwCheck=(e)=>{
        if(pw===e.target.value)setPwSame(1);
        else setPwSame(0);
    }
    //이름 변경 함수
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    //이메일 변경 함수
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleCheckChangeEmail = (e) => {
        setEmailCheck(e.target.value);
    }
    //키 변경 함수
    const handleChangeCm =(e)=>{
        setCm(e.target.value);
    }
    //몸무게 변경 함수
    const handleChangeKg =(e) =>{
        setKg(e.target.value);
    }

    const onClickSameEmailButton = () => {
        checkMail.mutate({
            "u_authNum" : emailCheck
        })
    }
    
    //아이디 중복 확인 함수
    const sameCheck = () =>{
        if(id===0 || id === "")alert("아이디를 입력해주세요");
        else{
            getIdSame(id)
            .then(response => response.json())
            .then(response => response.message)
            .then(response => {
                if (response === "사용할 수 있는 아이디입니다.") {
                    alert("사용가능한 아이디입니다.");
                    setIdCheck(1);
                }
                if (response === "이미 있는 사용자입니다.") {
                    alert("중복된 아이디입니다.")
                }
            })
        }
    }
    
    
    return(
        <Page>
        <div style={{display:"flex",width:"50%"}}>
            <Title>
                <p className="signup">SIGN UP</p>
                <p className="signupserv">회원가입하고 피콕을 즐겨보세요.</p>
            </Title>
            <Container> 
                <Contianer2>
                <p>아이디</p>
                <div>
                    <ID  placeholder="아이디" onChange={handleChangeId}/>
                    <Button onClick={sameCheck}>중복확인</Button>
                </div>
                </Contianer2>

                <Contianer2>
                    <p>비밀번호</p>
                    <ID style={{marginBottom:"1vh"}} placeholder="비밀번호"onChange={handleChangePw}/>
                </Contianer2>

                <Contianer2>
                <ID style={{marginBottom:"0.5vh"}}placeholder="비밀번호 확인" onChange={handleChangePwCheck}/>
                {pwSame===1?<h5 style={{color:"#7939FF"}}>일치</h5>: <h5 style={{color:"red"}}>불일치</h5>}


                </Contianer2>

                <Contianer2 style={{marginTop:"3vh"}}>
                <p>이름</p>
                <ID placeholder="홍길동" onChange={handleChangeName}/>
                </Contianer2>

                < Contianer2>
                <p>본인인증(선택)</p>
                <div style={{display:"flex"}}>
                    <ID style={{marginBottom:"0vh"}} placeholder="이메일 입력" onChange={handleChangeEmail}/>
                    <Button style={{marginTop:"0.2vh"}} onClick = {onClickEmailButton}>인증받기</Button>
                </div>
                <div style={{display:"flex"}}>
                    <ID style={{marginTop:"1vh"}}placeholder="인증번호 입력" onChange={handleCheckChangeEmail}/>
                    <Button style={{marginTop:"1.2vh"}}onClick = {onClickSameEmailButton}>확인</Button>
                </div>
                </Contianer2>
                <Contianer2>
                <p>프로필 사진</p>
                <Image>
                <img onClick={onClickFileBtn}  src={convertedUrl ? convertedUrl : "https://user-images.githubusercontent.com/44117975/198823926-d1a8fed0-a178-422b-99f7-de4f6548cb07.png"} alt="addImg"/>
                </Image>
                <input
                        type="file"
                        ref={imgRef}
                        onChange={onChangeImage}
                        style={{ display: "none" }}
                        />
                </Contianer2>
                <Contianer2>
                <p>체형</p>
                <div style={{display:"flex"}}>
                <p>키</p><ProfileInput onChange={handleChangeCm} placeholder="cm"/>
                <p style={{marginLeft:"1vw"}}>몸무게</p><ProfileInput onChange={handleChangeKg} placeholder="kg"/>
                </div>
                <div style={{display:"flex",width:"80%",flexDirection:"column"}}>
                    <div style={{marginTop:"1vh"}}><p>메인 스타일</p></div>
                    <Styles>
                        {mainStyle.map((item,index)=>{
                            if(index === mainStyleStauts)return(<h4 index={index} onClick={()=>mainStyleClick(index)}style={{color:"white",backgroundColor:"#7939FF"}}>{item}</h4>);
                            return( <h4 index={index} onClick={()=>mainStyleClick(index)}>{item}</h4>);
                        })}
                    </Styles>
                </div>
                <div style={{display:"flex",width:"80%",flexDirection:"column"}}>
                    <div style={{marginTop:"1vh"}}><p>서브 스타일</p></div>
                    <Styles>
                        {subStyle.map((item,index)=>{
                            if(index === subStyleStauts)return(<h4 index={index} onClick={()=>subStyleClick(index)}style={{color:"white",backgroundColor:"#7939FF"}}>{item}</h4>);
                            return( <h4 index={index} onClick={()=>subStyleClick(index)}>{item}</h4>);
                        })}
                    </Styles>
                </div>
                </Contianer2>
                <Contianer2>
                    <p>개인정보 이용 동의(필수)</p>
                    <Agree><Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.

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
                    <p>이용약관 동의(필수)</p>
                    <Agree><Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.

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
                    <p>이메일 수신 동의(선택)</p>
                    <Agree><Span>본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.

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
                    <button className="register" type="button" style={{width:"70%",height:"5vh",borderRadius:"9px",marginLeft:"1.5vw",border:"none",marginTop:"2vh",marginBottom:"1vh",fontFamily:"Pretendard"}} onClick={ButtonClick}>회원가입</button>
                </Contianer2>
            </Container>
        </div>
        </Page>
    )
}
export default SignUp;