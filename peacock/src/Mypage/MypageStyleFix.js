import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom";

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
        width:10%;
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
    justify-content:center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    gap:1vw;
    div{
        border:none;
        border-radius: 1vw;
        width:2vw;
        height: 1.5vh;
        font-family:'SUIT';
        padding: 0.5vw 0.8vw 0.5vw 0.8vw;
        font-size:0.7vw;
        background-color: #F4F4F4;
        letter-spacing: -0.03em;
        color: #747474;
        font-weight: 500;
        cursor: pointer;
        &:hover{
            background-color:#7939FF;
            color:white;
            font-weight: 600;;
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
    const user = {
        height:166,
        weight:53,
    }
    const [newHeight,setNewHeight] = useState(user.height);
    const [newWeight,setNewWeight] = useState(user.weight);
   
    const [style,setStyle] = useState(
        [
            {status:0,name:"캐주얼"},
            {status:0,name:"스트릿"},
            {status:0,name:"미니멀"},
            {status:0,name:"스타일"},
            {status:0,name:"스타일"},
            {status:0,name:"스타일"},
            {status:0,name:"캐주얼"},
            {status:0,name:"스트릿"},
            {status:0,name:"미니멀"},
            {status:0,name:"스타일"},
            {status:0,name:"스타일"},
            {status:0,name:"스타일"},
           
        ]
    );
    const styleClick=(index)=>{
        let names = style[index].name;
        if(style[index].status)
        setStyle([...style.slice(0,index),{status:0,name:names},...style.slice(index+1)])
        else
        setStyle([...style.slice(0,index),{status:1,name:names},...style.slice(index+1)])
        
    }
    const onChangeHeight =(e)=>{
        setNewHeight(e.target.value);
    }
    const onChangeWeight =(e)=>{
        setNewWeight(e.target.value);
    }
    const submit =()=>{
        if(newHeight===""||newHeight===""){
            alert("키 몸무게를 입력해주세요");
        }
        else{
            let result = style.filter((item)=>item.status);
            console.log(newHeight,newWeight,result);
        } ;
    }
     return(
        <Container>
            <Container2>
                <HW>
                    <Title>
                        <div className="title">체형</div>
                        <div className="kgweight">
                            <div className="titles">키</div>
                            <div className="titles" style={{marginTop:"3.5vh"}}>몸무게</div>
                        </div>
                        <div className="inputs">
                            <Input onChange={onChangeHeight} placeholder={`${user.height}cm`}/>
                            <Input onChange={onChangeHeight} placeholder={`${user.weight}kg`}/>
                        </div>
                    </Title>
                </HW>
            </Container2>
            <Container2>
                
            </Container2>
            <Container2>
                <HW>
                    <Title>
                        <div className="title">스타일</div>
                        <div className="style">
                        <Styles>
                        {style.map((item,index)=>{
                           if(item.status)return(<div key={index} onClick={()=>styleClick(index)} style={{backgroundColor:" #7939FF",color:"white"}}>{item.name}</div>);
                           return( <div key={index}  onClick={()=>styleClick(index)}>{item.name}</div>);
                        })}
                        </Styles>
                        </div>
                    </Title>
                </HW>
            </Container2>
            
            <Button onClick={submit}>완료</Button>
           
        </Container>
    )   
}
export default MyPageStyleFix;