import {BrowserRouter,useParams,Routes,Route, useNavigate, Navigate} from "react-router-dom";
import React, { useState ,useForm,useRef} from 'react';
import styled from "styled-components";
import ReactQuill from 'react-quill';
import '../quill.snow.css';

const Container = styled.div`
  display: flex;
  height: 40vh;
  .AddFile{
    margin-top:10px;
    padding:6px 15px;
    background-color: beige;
    border-radius: 20px;
    color:black;
    cursor: pointer;
    margin-bottom: 30px;
  }
`;
const Information = styled.div`
  width:40%;
`;
const Input = styled.input`
  width:20vw;
  height: 4vh;
  border-radius: 0.4vw;
  margin-top:3vh;
`;
const Sizes =styled.div`
  
    flex-wrap: wrap;
    display: flex;
    column-gap:2vw;
    h5{
        border:1px solid black;
        padding: 1vw 1.5vw 1vw 1.5vw;
        border-radius: 1vw;
        height: 1.2vh;
    }
`;
const Styles = styled.div`
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
function ClosetAdd(){   
  const params = useParams();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [read,setRead]=useState("");
  const [size,setSize]=useState([
    {status:0,sizes:'S'},
    {status:0,sizes:'M'},
    {status:0,sizes:'L'},
    {status:0,sizes:'XL'}
  ]);
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
  const imgRef = useRef();
  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };
  const sizeClick=(index)=>{
    let sizes = size[index].sizes;
    if(size[index].status)
    setSize([...size.slice(0,index),{status:0,sizes:sizes},...size.slice(index+1)])
    else
    setSize([...size.slice(0,index),{status:1,sizes:sizes},...size.slice(index+1)])
    
}
const submit=()=>{
  navigate(`/closet/${params.username}`);
}
const modules = {
  toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
      ],
  }
}
function onChangeMyEdit(value) {
    
  value=encodeURI(value);
  console.log(decodeURI(value));
  setRead(decodeURI(value));
}
  return (
    <Container>
      <button onClick={submit} style={{position:"fixed",width:"4vw",height:"5vh",right:"1vw",bottom:"3.8vh",borderRadius:"50%",backgroundColor:"white"}}>완료</button>
      <div>
        <div style={{width:"30vw",justifyContent:"center",alignItems:"center",display:"flex",height:"82vh"}}>
        <img 
        style={{width:"25vw",maxWidth:"30vw",height:"78vh",maxHeight:"78vh",border:"1px solid black"} } 
        onClick={onClickFileBtn}
        src={imageUrl ? imageUrl : "https://user-images.githubusercontent.com/44117975/190329322-2a5b0016-68a4-4b43-a92a-45838e347052.PNG"}
        alt="AddImg"
        />
        </div>
        <input
          type="file"
          ref={imgRef}
          onChange={onChangeImage}
          style={{ display: "none" }}
      />
      </div>
      <div>
        <div style={{display:"flex"}}>
        <Information>
          <h4>사진명</h4>
          <Input/>
          <h4>판매처</h4>
          <Input/>
          <h4>사이즈</h4>
          <Sizes>
          {size.map((item,index)=>{
                            if(item.status)return(<h5 index={index} onClick={()=>sizeClick(index)} style={{backgroundColor:"darkgray"}}>{item.sizes}</h5>);
                            else return( <h5 index={index} onClick={()=>sizeClick(index)}>{item.sizes}</h5>);
                          })}
        
          </Sizes>
        
        
        </Information>
        <div style={{marginLeft:"2VW"}}>
      <h4>스타일</h4>
        <Styles>
            {style.map((item,index)=>{
                if(item.status)return(<h5 index={index} onClick={()=>styleClick(index)} style={{backgroundColor:"darkgray"}}>{item.name}</h5>);
                else return( <h5 index={index} onClick={()=>styleClick(index)}>{item.name}</h5>);
            })}
        </Styles>
      </div>
      </div>
      <div className="text-editor">
        <ReactQuill theme="snow"
                    modules={modules}
                    onChange={onChangeMyEdit}
                    style={{width:"63.5vw",height:"35vh"}}>
        </ReactQuill>
     </div>
      </div>
      
     
       
     </Container>
  );
}
export default ClosetAdd;