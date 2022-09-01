import { useParams,Link,useNavigate } from 'react-router-dom';
import React, { useRef,useCallback,useState } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import Modal from "../modal"
import ReactQuill from 'react-quill';
import '../quill.snow.css';

const Img = styled.img`
    min-width:10vw;
    min-height: 25vh;
    max-width: 10vw;
    max-height: 25vh;
`;
const Container1 = styled.div`
    margin-top:2vh;
    border: 0.05vw solid black;
    border-radius: 1vw;
    display: flex;
    width:17.5%;
    margin-left:10vw;
    align-items: center;
    padding-left: 1vw;
    padding-bottom: 1vh;
    padding-right:1vw;
`;
const ContainerImg = styled.div`
    margin-top: 3vh;
    width:10vw;
`;
const ContainerProfile = styled.div`
`;
const Mycodi = styled.div`
    height: 100%;
    margin-left:10vw;
    width:80%;
`;
const Mytop = styled(Mycodi)`
`
const Mypants = styled(Mycodi)`
`
const ContainerMycodi = styled.div`
   
`;
const Infromation = styled.div`
    text-align: left;
`;
const Profile = styled.div`
    font-weight: bold;
    margin : 1.5vh;
    margin-top:1vh;
    padding-left: 0;
    padding-right: 0;
    border:0.07vw solid black;
    text-align: center;
    border-radius: 3vh;
    width:6vw;
    font-size:1vw;
`;
const Sns = styled.div`
    font-weight: bold;
    margin : 1.5vh;
    margin-top:1vh;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    border-radius: 3vh;
`;
const H1 = styled.h1`
    margin-left:10vw;
    margin-bottom:1vh;
`;
const Wrap = styled.div`
    width:80vw;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 0.1vw;
        padding: 1vw;
        margin-left:3vw;  
        max-width: 70%;
        height:30vh;
        object-fit: contain;
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
    const inputRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [clicked,setClicked] = useState({});
    const [read,setRead]=useState("");

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
    const onChangeCodi =useCallback((e)=>{
        if(!e.target.files)return;
        const formData = new FormData();
         formData.append('image', e.target.files[0]);
         console.log(e.target.files[0]);
    },[]);

    const uploadCodyClick = useCallback(()=>{
        if(!inputRef.current)return;
        inputRef.current.click();
    },[]);
      
    const userinfo={
            nakhyeon:{
                name:'권낙현',
                nickname:'김서기',
                kg:'67kg',
                height:'186cm',
                style:'캐주얼',
                img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
                codi:[  
                    {url:"https://i.ibb.co/kKMCQQP/image.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                    {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"유신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                    {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",name:"평범한 하루",style:"스트릿",size:"L",mall:"추신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                    {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",name:"평범한 하루",style:"캐주얼",size:"S",mall:"쿠신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                    {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",name:"평범한 하루",style:"캐주얼",size:"SM",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                    {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
                ],
                top:["https://image.msscdn.net/images/goods_img/20200826/1563621/1563621_2_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"],
                pants:["https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"],    
                shoes:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmc9r9qvTHkG0C_iZaO_mymoGTYxvxZJLelw&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"],
                outer:["https://image.msscdn.net/images/goods_img/20220322/2436884/2436884_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg",
                    "https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"],
            },
        jiyeon:{
            name:'권낙현',
            nickname:'김서기',
            kg:'67kg',
            height:'186cm',
            style:'캐주얼',
            img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
            codi:[  
               
                 "https://i.ibb.co/kKMCQQP/image.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
            ],
            top:["https://image.msscdn.net/images/goods_img/20200826/1563621/1563621_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"],
            pants:["https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"],    
            shoes:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmc9r9qvTHkG0C_iZaO_mymoGTYxvxZJLelw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"],
            outer:["https://image.msscdn.net/images/goods_img/20220322/2436884/2436884_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"],
        },
        sena:{
            name:'권낙현',
            nickname:'김서기',
            kg:'67kg',
            height:'186cm',
            style:'캐주얼',
            img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
            codi:[  
                {url:"https://i.ibb.co/kKMCQQP/image.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
                {url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
               { url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
               { url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
               {url: "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
               { url:"https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사"},
            ],
            top:["https://image.msscdn.net/images/goods_img/20200826/1563621/1563621_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"],
            pants:["https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"],    
            shoes:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmc9r9qvTHkG0C_iZaO_mymoGTYxvxZJLelw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"],
            outer:["https://image.msscdn.net/images/goods_img/20220322/2436884/2436884_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"],
        }
    };
   const navigate = useNavigate();
    const params = useParams();
    const profile = userinfo[params.username];
    const settings = {
        dots: true,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 5, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
    };
   

  function onChangeMyEdit(value) {
    setRead(value);
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

    return(
        <div>
            {profile? (
            <div>      
            <div style={{display:"flex",marginTop:"1vh"}}>
            <Container1>
                <ContainerImg>
                <Img src={profile.img} alt="profile"/>
                </ContainerImg>
                <ContainerProfile>
                    <Infromation>
                        <Profile>{profile.nickname}</Profile>
                        <Profile>{profile.kg}</Profile>
                        <Profile>{profile.height}</Profile>
                        <Profile>{profile.style}</Profile>
                        <div style={{display:"flex"}}>
                        <Sns><img src={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"} style={{width:"2vw"}} alt="instagram"/></Sns>
                        <Sns><img src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"} style={{width:"2vw"}} alt="youtube"/></Sns>
                        </div>
                    </Infromation>
                </ContainerProfile>
            </Container1>
            <div style={{width:"40%"}}></div>
            </div>
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
                                            <div style={{height:"3vh",border:"1px solid black",width:"100%",textAlign:"center",paddingTop:"0.5vh"}}>
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
            <ContainerMycodi>
              <H1>Cody</H1><button onClick={()=>navigate("./closetAdd")}>옷 등록하기</button>     
                <Mycodi>
                <Wrap>
                    <Slider {...settings}>
                    {profile.codi.map((item)=>{
                        return (
                            <React.Fragment>
                            <div>
                                <img onClick={()=>openModal(item)} src={item.url} alt="codi" />
                            </div>
                            </React.Fragment>
                        );
                    })}
                    </Slider>
                </Wrap>
                </Mycodi>
            </ContainerMycodi>

            <ContainerMycodi>
           <H1>Top</H1>
             
                <Mytop>
                <Wrap>
                    <Slider {...settings}>
                    {profile.top.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="top" />
                            </div>
                        );
                    })}
                    </Slider>
                            
                </Wrap>
                </Mytop>
            </ContainerMycodi>    

            <ContainerMycodi>
           <H1>Pants</H1>
                <Mypants>
                <Wrap>
                    <Slider {...settings}>
                    {profile.pants.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="pants" />
                            </div>
                        );
                    })}
                    </Slider>    
                </Wrap>
                </Mypants>
            </ContainerMycodi> 

            <ContainerMycodi>
           <H1>Shoes</H1>

                <Mypants>
                <Wrap>
                    <Slider {...settings}>
                    {profile.shoes.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="pants" />
                            </div>
                        );
                    })}
                    </Slider>
                            
                </Wrap>
                </Mypants>
            </ContainerMycodi>        
            </div>
            ):
            (<p>존재하지 않습니다</p>)
            
            }
        </div>
    )
}
export default Closet;