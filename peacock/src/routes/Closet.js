import { useParams,Link,useNavigate } from 'react-router-dom';
import React, { useRef,useCallback,useState } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import Modal from "../modal"
import ReactQuill from 'react-quill';
import '../quill.snow.css';
import '../index.css'
import { ICON_TEMPLATES } from 'froala-editor';

const Container = styled.div`
    display: flex;
    width:71%;
    margin-left: 20vw;
    margin-top:5vh;
    .addbutton{
        position: fixed;
        right:15vw;
        bottom:3vh;
        width:2vw;
        padding:0.5vw;
        border:0.2vw solid  #7939FF;
        border-radius: 1vw;
    }
`;
const Container1=styled.div`
    width:25%;
    .todayLine{
        margin-top:1.3vh;
        margin-left:0.1vw;
        width:9%;
        height:0.35vh;
        background-color: #7939ff;
    }
`;
const Container2=styled.div`
    width:75%;
    display: flex;
    flex-wrap: wrap;
    gap:1vw;
`;
const ProfileImg = styled.div`
    width:100%;
    img{
        width:80%;
        height:40vh;
        object-fit: contain;
    }
`;
const ProfileInfo = styled.div`
    margin-top:1vh;
    .rankName{
        font-size:1vw;
        font-weight: 600;
        display: inline;
        font-family: 'SUIT';
    }
    .rankFollower{
        font-size:0.7vw;
        color:#7939FF;
        display: inline;
        margin-left: 3.3vw;
        font-weight: 500;
        font-family: 'SUIT';
    }
    .followingBtn{
        cursor: pointer;
        margin-left:0.5vw;
        font-family: 'SUIT';
        color:#7939FF;
        background-color: #F5F0FF;
        border:1px solid #7939FF;
        border-radius: 0.5vw;
        padding:0.5vh 0.5vw 0.5vh 0.5vw;
        &:hover{
            color:white;
            background-color:#7939FF;
        }
    }
    
`;
const ProfileCmkg = styled.div`
    font-family: 'SUIT';
    font-size:0.8vw;
    margin-top:0.8vh;
`;

const Pid = styled.div`
    width:25%;
    img{
        cursor: pointer;
        width:100%;
    }
`;
const Standard = styled.div`
    width:100%;
    display: flex;
    margin-top:1vh;
    flex-wrap: wrap;
    gap:0.5vw;
    div{
        cursor: pointer;
        width:2.5vw;
        height:2.5vw;
        background-color: #333333;
        border-radius: 50%;
    img{
        width:50%;
        padding-left:0.6vw;
        padding-top:0.6vw;
    }
    }
`;
const ModalDetail = styled.div`
    display: flex;
    border: 1px solid black;
    border-top:0;
    text{
        padding:0.5vw;
        font-weight: bold;
    }
`;
const ModalDetails = styled.div`
    border-left: 1px solid black;
    padding:1vh;
    width:70%;
    text-align: center;
    display:inline;
`;
const Input = styled.input`
    border:0;
    border-left:1px solid black;
    text-align: center;
    width:80%;
`;
  function Closet(){
    const user ={
        name:'권낙현',
        nickname:'김서기',
        kg:'67kg',
        height:'186cm',
        style:'캐주얼',
        img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
        cody:[ 
            {url:"https://i.ibb.co/kKMCQQP/image.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"유신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",name:"평범한 하루",style:"스트릿",size:"L",mall:"추신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",name:"평범한 하루",style:"캐주얼",size:"S",mall:"쿠신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",name:"평범한 하루",style:"캐주얼",size:"SM",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://i.ibb.co/kKMCQQP/image.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"유신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",name:"평범한 하루",style:"스트릿",size:"L",mall:"추신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",name:"평범한 하루",style:"캐주얼",size:"S",mall:"쿠신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",name:"평범한 하루",style:"캐주얼",size:"SM",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
        ],
        top:[
            {url:"https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"}
        ],
        pants:[
            {url:"https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"}
        ],    
        shoes:[
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"}
        ],
        outer:[
             {url:"https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"}
        ],
    }
    //현재 선택된 옷 카테고리
    const [standard,setStandard] = useState(user.cody);
    const [cody,setCody] = useState(1);
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
    //모달에 관한 상태들과 함수 
    const [modalOpen, setModalOpen] = useState(false);
    const [clicked,setClicked] = useState({});
    const [read,setRead]=useState("");
    const [add,setAdd] = useState(0);
    const openModal = (item) => {
      setModalOpen(1);
      setClicked(item);
    };
    const closeModal = () => {
      setModalOpen(0);
    };
    const fixModal = () =>{
      setModalOpen(2);
    }
    function onChangeMyEdit(value) {
        value=encodeURI(value);
        setRead(decodeURI(value));
      }
    const navigate = useNavigate();
    return(
        <Container>
            <Container1>
                <ProfileImg>
                    <img src="https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png" alt="profileImage"/>
                </ProfileImg>
                <ProfileInfo>
                    <div className="rankName">김서기</div>
                    <div className="rankFollower">9,099명이 팔로잉</div>
                    <button type="button" className="followingBtn">팔로잉</button>
                </ProfileInfo>
                <ProfileCmkg>
                    <div>172cm 63kg 스트릿</div>
                </ProfileCmkg>
                    <div className="todayLine"/>
                <Standard>
                    <div onClick={()=>{setStandard(user.cody); setCody(1)}}><img src=' https://user-images.githubusercontent.com/44117975/194839189-ac6e7dbb-a00f-41b5-9b79-489dbe520a21.png' alt="cody"/></div>
                    <div onClick={()=>{setStandard(user.outer); setCody(0)}}><img src='https://user-images.githubusercontent.com/44117975/194839751-8eac44d7-968f-4207-85cc-1360fe3229c0.png' alt="outer"/></div>
                    <div onClick={()=>{setStandard(user.top); setCody(0)}}><img src='https://user-images.githubusercontent.com/44117975/194835083-0c13e236-4114-44b4-9c16-12b395099045.png' alt="top"/></div>
                    <div onClick={()=>{setStandard(user.pants); setCody(0)}}><img src='https://user-images.githubusercontent.com/44117975/194836944-6324201b-463f-4682-8381-5f3b12273686.png' alt="pants"/></div>
                    <div onClick={()=>{setStandard(user.shoes); setCody(0)}}><img src='https://user-images.githubusercontent.com/44117975/194837020-59178a0a-fb78-47e4-8d33-3f349e79d165.png' alt="shoes"/></div>
                </Standard>
            </Container1>
            <Container2>
            <Modal open={modalOpen} close={closeModal} fix={fixModal} header="상세보기">
                                <div style={{display:"flex"}}>
                                    <div style={{width:"45%"}}>
                                        <img style={{maxHeight:"45vh",maxWidth:"15vw",minHeight:"45vh",minWidth:"15vw"}} src={clicked.url} alt="clickImage"/>
                                    </div>
                                    <div style={{width:"50%"}}>
                                        <ModalDetail style={{borderTop:"1px solid black"}}><text>사진명</text>{modalOpen===1?<ModalDetails>{clicked.name}</ModalDetails>:<Input placeholder={clicked.name}/>}</ModalDetail>
                                        <ModalDetail><text>판매처</text>{modalOpen===1?<ModalDetails>{clicked.mall}</ModalDetails>:<Input placeholder={clicked.mall}/>}</ModalDetail>
                                        <ModalDetail><text>사이즈</text>{modalOpen===1?<ModalDetails>{clicked.size}</ModalDetails>:<Input placeholder={clicked.size}/>}</ModalDetail>
                                        <ModalDetail><text>스타일</text>{modalOpen===1?<ModalDetails>{clicked.style}</ModalDetails>:<Input placeholder={clicked.style}/>}</ModalDetail>
                                        
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"2vh"}}>
                                            <div style={{height:"3vh",border:"1px solid black",width:"100%",textAlign:"center",fontWeight:"bold",paddingTop:"0.5vh"}}>
                                                간단한 소개
                                            </div>
                                            <div style={{height:"22vh",border:"1px solid black",borderTop:"0",width:"100%",textAlign:"center",overflow:"scroll"}}>
                                            {modalOpen===1?
                                            <div dangerouslySetInnerHTML={{__html:read}}/>
                                            :
                                            <div className="text-editor">
                                                <ReactQuill theme="snow"
                                                            modules={modules}
                                                            onChange={onChangeMyEdit}>
                                                </ReactQuill>
                                            </div>
                                             }
                                            </div>
                                        </div>
                                    </div>
                                   
            </div>
            </Modal>
                {cody===1? 
                standard.map((item,index)=>{
                    return(
                        <Pid>
                           <img style={{maxHeight:"40vh",minHeight:"40vh",objectFit:"fill"}} onClick={()=>navigate('/')}  src={item.url} alt="img"/>
                        </Pid>
                      
                    )
                }):
                standard.map((item)=>{
                    return(
                        <Pid>
                            <img style={{maxHeight:"28vh"}} onClick={()=>openModal(item)}  src={item.url} alt="img"/>
                        </Pid>
                      
                    )
                })
            }
            </Container2>
            <img src = "https://user-images.githubusercontent.com/44117975/194871518-babeacb7-597c-47ea-8f6f-31ed09974047.png" alt="add" className='addbutton'/>
        </Container>
    )
}
export default Closet;