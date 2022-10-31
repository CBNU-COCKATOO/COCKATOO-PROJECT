import { useState, useEffect } from 'react';
import styled from "styled-components";
import ReactQuill from 'react-quill';

const Container = styled.div`
animation: fadein 1s;
-webkit-animation: fadein 1s;
@keyframes fadein {

    /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
       
 // 모달창 크기
  width: 46vw;
  height: 34vw;

  // 최상단 위치 
  z-index: 999;
  
  // 중앙 배치 */
  // top, bottom, left, right 는 브라우저 기준으로 작동한다. 
  // translate는 본인의 크기 기준으로 작동한다. 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달창 디자인 
  background-color: white;
  border: none;
  border-radius: 8px;

  //중앙 정렬 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SUIT';
  font-weight: 500;
`
const Background = styled.div`
    //고정 포지션
    position: fixed;
    //백 그라운드 위치
    top:0; left: 0; bottom: 0; right: 0;
    //배경 색
    background: rgba(0, 0, 0, 0.8);
`;
const Container2 = styled.div`
    //진짜 모달창 크기
    width: 96%;
    height:94%;
`;
const Title = styled.div`
    padding:0.6vw 0 0.6vw 0;
    font-size: 0.9vw;
`;
const Infromation = styled.div`
    display: flex;
    margin-top:1vh;
`;
const Image = styled.div`
    width:50%;
    display: flex;
    align-items: center;
    margin-left:1vw;
    cursor: pointer;
    img{
        width:90%;
    }
`;
const InformationDetail = styled.div`
    width:60%;
    p{
        margin-right:1vw;
    }
    input{
        text-align: center;
        font-family: 'SUIT';
        background: #F4F4F4;
        width:18vw;
        border: none;
        border-radius: 3vw;
        padding:1vw;
        &:focus{
            outline-color: #7939FF;
        }
    }
    div{
        margin-bottom:1vh;
    }
    .textEditor{
        width:79%;
        height:22vh;
        display: inline-block;
    }
    .clothSize{
        display: inline-flex;
        gap:1vw;
        margin-left:0.2vw;
        span{
            text-align: center;
            width:3vw;
            padding:0.5vw 0 0.5vw 0;
            border-radius: 1vw;
            cursor: pointer;
            background-color: #F4F4F4;
        }
    }
    .style{
        display: inline-flex;
        gap:1vw;
        margin-left:0.2vw;
        span{
            text-align: center;
            width:2.8vw;
            padding:0.5vw 0.1vw 0.5vw 0.1vw;
            border-radius: 0.8vw;
            cursor: pointer;
            background-color: ${props => props.backgroundColor};
            color:${props => props.color}
        }
    }
`; 
const Submit = styled.div`
    margin-top:2vw;
    text-align: right;
`;
const Button = styled.div`
    display: inline;
    background-color:${props=>props.backgroundColor};
    color:${props=>props.color};
    padding: 0.6vw 2vw 0.6vw 2vw;
    border-radius: 3vw;
    margin-right:1vw;
    cursor: pointer;
`;
function AddCloth({setAddCloth, cody}){
    const [codyName, setCodyName] = useState("");
    const [codyStyle, setCodyStyle] = useState([
        {name:"캐주얼",status:0},
        {name:"스트릿",status:0},
        {name:"미니멀",status:0},
        {name:"모던",status:0},
        {name:"러블리",status:0},
    ]);
    const [read, setRead] = useState("");  
    const [color, setColor] = useState("");
    
    //모달창 끄기 함수
    const closeAddCloth = () => {
        setAddCloth(false);
    };

    const standard = ["코디", "아우터", "상의", "하의", "신발"];
     //quill에 사용되는 설정
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
    };
    function onChangeMyEdit(value) {
        value = encodeURI(value);
        setRead(decodeURI(value));
      }
    
    const onChangeCodyName = (e) =>{
        setCodyName(e.target.value);
    }
    const onClickCodyStyle = (index) =>{
        const newStyle = codyStyle[index].name;
        if(codyStyle[index].status)
        setCodyStyle([...codyStyle.slice(0,index),{name:newStyle,status:0},...codyStyle.slice(index+1)])
        else
        setCodyStyle([...codyStyle.slice(0,index),{name:newStyle,status:1},...codyStyle.slice(index+1)])
    }
    const submit = () =>{
        console.log(codyName, codyStyle.filter((item)=>item.status===1),read,color)
    }   
    return(
        <>
        <Background onClick={closeAddCloth}/>
         <Container>
            <Container2>
                <> 
                    <Title>{standard[cody]} 추가하기</Title>
                    {cody===0 ?
                    <Infromation>
                        <Image>
                            <img src="https://user-images.githubusercontent.com/44117975/198823926-d1a8fed0-a178-422b-99f7-de4f6548cb07.png" alt="addImg"/>
                        </Image>
                        <InformationDetail>
                            <div>
                                <p style={{display:"inline-block"}}>코디명</p>
                                <input onChange={onChangeCodyName}/>
                            </div>
                            <div>
                                 <p style={{display:"inline-block"}}>스타일</p>
                                 <div className='style'>
                                    {codyStyle.map((item, index) => {
                                        if(item.status)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickCodyStyle(index)}>{item.name}</span>)
                                        return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickCodyStyle(index)}>{item.name}</span>)
                                    })}
                                </div>
                            </div>
                            <div style={{display:"flex"}}>
                                <p style={{display:"inline"}}>코디 설명</p>
                                <div className="textEditor" style={{height:"17vw"}}>
                                        <ReactQuill theme="snow"
                                                    modules={modules}
                                                    onChange={onChangeMyEdit}>
                                        </ReactQuill>
                                </div>
                            </div>
                        
                        </InformationDetail>
                    </Infromation>:
                   
                     <Infromation>
                     <Image>
                         <img src="https://user-images.githubusercontent.com/44117975/198823926-d1a8fed0-a178-422b-99f7-de4f6548cb07.png" alt="addImg"/>
                     </Image>
                     <InformationDetail>
                         <div>
                             <p style={{display:"inline-block"}}>제품명</p>
                             <input/>
                         </div>
                         <div>
                         <p style={{display:"inline-block"}}>판매처</p>
                             <input/>
                         </div>
                         <div> 
                         <p style={{display:"inline-block"}}>사이즈</p>
                             {cody === 4 ?
                               <input/>
                             :
                            <div className='clothSize'>
                                <span>XS</span>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                             }
                         </div>
                         <div>
                            <p style={{display:"inline-block"}}>스타일</p>
                            <div className='style'>
                                    <span>캐주얼</span>
                                    <span>스트릿</span>
                                    <span>미니멀</span>
                                    <span>모던</span>
                                    <span>러블리</span>
                            </div>
                         <div>

                         </div>
                         </div>
                         <div style={{display:"flex"}}>
                             <p style={{display:"inline"}}>코디 설명</p>
                             <div className="textEditor">
                                     <ReactQuill theme="snow"
                                                 modules={modules}
                                                 onChange={onChangeMyEdit}>
                                     </ReactQuill>
                             </div>
                         </div>
                     
                     </InformationDetail>
                 </Infromation>
                 
                 }
                </>
                <Submit>
                    <Button onClick={closeAddCloth} backgroundColor="#747474" color="white">취소</Button>
                    <Button onClick={submit} backgroundColor="#F4F4F4" color="#747474">올리기</Button>
                </Submit>
            </Container2>
         </Container>
        </>
       
    )

}

export default AddCloth;