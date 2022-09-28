import { useState } from "react";
import styled from "styled-components"
import {Link,useNavigate,Outlet} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height:75vh;
`;
const Logo = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        
    }
`;
const Container2 = styled.div`
    display: flex;
    width:100%;
`;
const Height =styled.div`
    width:50%;
`;
const Weight = styled.div`
    width:50%;
`;
const Title = styled.div``;
const Inputs = styled.div``;
const Input =styled.input`
    width:10vw;
    height:5vh;
    border-radius: 3vw;
    text-align: center;
    color:black;
`;
const Style =styled.div`
  
`;
const Styles = styled.div`
     justify-content:center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    column-gap:2vw;
    h5{
        border:1px solid black;
        padding: 1vw 2vw 1vw 2vw;
        border-radius: 1vw;
        width:2.5vw;
        height: 1.2vh;
    }
`;
const Button = styled.button`
    width:7vw;
    height:4vh;
    margin-top:2vh;
    background-color: powderblue;
    border-radius: 0.4vw;
    border:1px solid black;
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
            {status:0,name:"스타일"},
            {status:0,name:"캐주얼"},
            {status:0,name:"스트릿"},
            {status:0,name:"미니멀"},
            {status:0,name:"스타일"},
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
            <Logo>
                <h1>체형/스타일 변경</h1>
            </Logo> 
            <Container2>
                <Height>
                    <Title>
                        <h4>키</h4>
                    </Title>
                    <Inputs>
                        <Input onChange={onChangeHeight} placeholder={user.height}/>
                    </Inputs>
                </Height>
                <Weight>
                    <Title>
                        <h4>몸무게</h4>
                    </Title>
                    <Inputs>
                        <Input onChange={onChangeWeight}  placeholder={user.weight}/>
                    </Inputs>
                </Weight>
            </Container2>
            <Style>
                <div style={{textAlign:"center"}}>
                    <h4>스타일</h4>
                    <Styles>
                        {style.map((item,index)=>{
                           if(item.status)return(<h5 key={index} onClick={()=>styleClick(index)} style={{backgroundColor:"darkgray"}}>{item.name}</h5>);
                           return( <h5 key={index}  onClick={()=>styleClick(index)}>{item.name}</h5>);
                        })}
                    </Styles>
                </div>
            </Style>
            <Button onClick={submit}>완료</Button>
        </Container>
    )   
}
export default MyPageStyleFix;