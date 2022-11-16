import { useState,useEffect } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom";
import {repairStyle, getMyPage} from "../Recoil/Api";
import { TotalId } from "../Recoil/Atoms";
import { useRecoilValue } from "recoil";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height:75vh;
`;
const Container2 = styled.div`
    display: flex;
    width:90%;
    border-radius: 0.5vw;
    background-color:#FDFDFD;
    border: 0.1vw solid #F0F0F0;
`;
const HW =styled.div`
   display: flex;
   width:100%;
   height:16vh;
`;

const Title = styled.div`
    display: flex;
    width:100%;
    padding-bottom: 2vh;
    padding-top:1vh;
    .title{
        width:13%;
        display: inline;
        font-family: 'SUIT';
        font-size:1vw;
        font-weight:600;
        margin-left:1vw;
        margin-top:3vh;
    }
    .style{
        width:70%;
        margin-top:2.8vh;
    }
    .kgweight{
        width:10%;
        margin-top:3vh;
        margin-left:2vw;
        
    }
    .titles{
        color:#454545;
        font-family: 'SUIT';
        text-align: left;
        line-height: 18px;
        font-weight: 500;
        font-size:0.75vw;
    }
    .inputs{
        display: flex;
        flex-direction:column;
        width:5%;
        margin-top:2vh;
        text-align: left;
    }
    
`;

const Input =styled.input`
    width:7vw;
    display: block;
    height:4vh;
    border:none;
    border-radius: 3vw;
    text-align: right;
    background-color: #F4F4F4;
    color:black;
    margin-bottom:1vh;
    padding-right: 1vw;
    ::placeholder{
        font-family: 'SUIT';
    }
    font-family: 'SUIT';
    font-weight:600;
    &:focus{
        outline-color:#7939FF;
        background-color: white;
    }
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
const Button = styled.button`
    width:7vw;
    height:4vh;
    margin-top:2vh;
    color:white;
    font-family: 'SUIT';
    background-color: #7939FF;
    border-radius: 0.4vw;
    position: relative;
    border:none;
    margin-left:37.7vw;
    cursor: pointer;
`;

function MyPageStyleFix(){
    const [user, setUser] = useState();
    const [newHeight,setNewHeight] = useState();
    const [newWeight,setNewWeight] = useState();
    const id = useRecoilValue(TotalId);
    const [mainStyle, setMainStyle] = useState( //메인스타일
        ["캐쥬얼","스트릿","미니멀","아메카지","시티보이","스포츠"]
    );
    const [subStyle, setSubStyle] = useState( //스타일
        ["캐쥬얼","스트릿","미니멀","아메카지","시티보이","스포츠" ]
    );
    const [mainStyleStauts,setMainStyleStauts]=useState(0);
    const [subStyleStauts,setSubStyleStauts]=useState(0);

    useEffect(() => {
        if (!user) {
          getMyPage(id)
          .then(response => response.json())
          .then(response => {
              setUser(response)
              setNewHeight(response.u_height);
              setNewWeight(response.u_weight);
          })
        }
      }, [])

    //메인 스타일 클릭 함수
    const mainStyleClick=(index)=>{
        setMainStyleStauts(index);
       }
     //서브 스타일 클릭 함수
     const subStyleClick=(index)=>{
        setSubStyleStauts(index);  
    }
    const onChangeHeight =(e)=>{
        setNewHeight(e.target.value);
    }
    const onChangeWeight =(e)=>{
        setNewWeight(e.target.value);
    }
    const onClickSubmit =()=>{
        if(newHeight===""||newHeight===""){
            alert("키 몸무게를 입력해주세요");
        }
        else{
            repairStyle({
                "data" : {
                    "u_height": newHeight,
                    "u_weight": newWeight,
                    "u_mainst": mainStyle[mainStyleStauts],
                    "u_subst": subStyle[subStyleStauts]
                },
                "u_id":id
            }).then(response => {
                console.log(response)
                if (response.message === "체형/스타일 수정 성공했습니다.") {
                    alert("변경 성공");
                }
            })
        } ;
    }
     return(
        <Container>
            <Container2>
                <HW>
                    {user&&
                    <Title>
                        
                        <div className="title">체형</div>
                        <div className="kgweight">
                            <div className="titles">키</div>
                            <div className="titles" style={{marginTop:"3.5vh"}}>몸무게</div>
                        </div>
                        <div className="inputs">
                            <Input onChange={onChangeHeight} placeholder={`${user.u_height}cm`}/>
                            <Input onChange={onChangeWeight} placeholder={`${user.u_weight}kg`}/>
                        </div>
                    </Title>}
                </HW>
            </Container2>
            <Container2>
                
            </Container2>
            <Container2>
                <HW>
                    <Title>
                        <div className="title">메인 스타일</div>
                        <div className="style">
                        <Styles>
                        {mainStyle.map((item,index)=>{
                            if(index === mainStyleStauts)return(<h4 index={index} onClick={()=>mainStyleClick(index)}style={{color:"white",backgroundColor:"#7939FF"}}>{item}</h4>);
                            return( <h4 index={index} onClick={()=>mainStyleClick(index)}>{item}</h4>);
                        })}
                        </Styles>
                        </div>
                    </Title>
                </HW>
            </Container2>
            
            <Container2>
                <HW>
                    <Title>
                        <div className="title">서브 스타일</div>
                        <div className="style">
                        <Styles>
                        {subStyle.map((item,index)=>{
                            if(index === subStyleStauts)return(<h4 index={index} onClick={()=>subStyleClick(index)}style={{color:"white",backgroundColor:"#7939FF"}}>{item}</h4>);
                            return( <h4 index={index} onClick={()=>subStyleClick(index)}>{item}</h4>);
                        })}
                        </Styles>
                        </div>
                    </Title>
                </HW>
            </Container2>

            <Button onClick={onClickSubmit}>완료</Button>
           
        </Container>
    )   
}
export default MyPageStyleFix;