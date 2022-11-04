import {Link,useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import "../slick.css";
import "../slick-theme.css";
import '../quill.snow.css';
import '../index.css'
import AddCloth from'./AddCloth.js'
import ShowDetailCloth from './ShowDetailCloth';

const Container = styled.div`
    display: flex;
    width:71%;
    margin-left: 20vw;
    margin-top:5vh;
    .addbutton{
        cursor: pointer;
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

  function Closet(){
    const user = {
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
            {url:"https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
        ],
        pants:[
            {url:"https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},        ],    
        shoes:[
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},        ],
        outer:[
             {url:"https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},
             {url:"https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg",name:"평범한 하루",style:"캐주얼",size:"M",mall:"무신사",review:"꾸안꾸 룩으로 제격인것 같습니다 ㅎㅎ"},        ],
    }

    //현재 선택된 옷 카테고리
    const [standard,setStandard] = useState(user.cody);
    const [cody,setCody] = useState(0);
    const [addCloth, setAddCloth] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [clicked,setClicked] = useState({});

    //옷 추가 모달창 노출
    const showModal = () => {
        setAddCloth(true);
    };
    
    //옷 정보 자세히 보기 모달창 노출
    const showDetailModal = (item) =>{
        setShowDetail(true);
        setClicked(item);
    }

    return(
            <Container>
                <Container1>
                    <ProfileImg>
                        <img src="https://user-images.githubusercontent.com/44117975/195272814-9bf4c5c3-3a1e-40ad-bf8c-f304eb304981.png" alt="profileImage"/>
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
                        <div onClick={()=>{setStandard(user.cody); setCody(0)}}><img src=' https://user-images.githubusercontent.com/44117975/194839189-ac6e7dbb-a00f-41b5-9b79-489dbe520a21.png' alt="cody"/></div>
                        <div onClick={()=>{setStandard(user.outer); setCody(1)}}><img src='https://user-images.githubusercontent.com/44117975/194839751-8eac44d7-968f-4207-85cc-1360fe3229c0.png' alt="outer"/></div>
                        <div onClick={()=>{setStandard(user.top); setCody(2)}}><img src='https://user-images.githubusercontent.com/44117975/194835083-0c13e236-4114-44b4-9c16-12b395099045.png' alt="top"/></div>
                        <div onClick={()=>{setStandard(user.pants); setCody(3)}}><img src='https://user-images.githubusercontent.com/44117975/194836944-6324201b-463f-4682-8381-5f3b12273686.png' alt="pants"/></div>
                        <div onClick={()=>{setStandard(user.shoes); setCody(4)}}><img src='https://user-images.githubusercontent.com/44117975/194837020-59178a0a-fb78-47e4-8d33-3f349e79d165.png' alt="shoes"/></div>
                    </Standard>
                </Container1>
                <Container2>
                     {cody===0? 
                    standard.map((item,index)=>{
                        return(
                            <Pid>
                            <img style={{maxHeight:"20vw",minHeight:"20vW",objectFit:"fill"}} onClick={()=>showDetailModal(item)}  src={item.url} alt="img"/>
                            </Pid>
                        
                        )
                    }):
                    standard.map((item, index)=>{
                        return(
                            <Pid>
                                <img style={{maxHeight:"14vW"}} onClick={()=>showDetailModal(item)}  src={item.url} alt="img"/>
                            </Pid>
                        )
                    })
                }
                </Container2>
                <img  onClick={showModal} src = "https://user-images.githubusercontent.com/44117975/194871518-babeacb7-597c-47ea-8f6f-31ed09974047.png" alt="add" className='addbutton'/>
                {addCloth && <AddCloth setAddCloth = {setAddCloth} cody = {cody}/>}
                {showDetail && <ShowDetailCloth setShowDetail={setShowDetail} cody = {cody} user ={clicked}/>}
        </Container>
        )
}
export default Closet;