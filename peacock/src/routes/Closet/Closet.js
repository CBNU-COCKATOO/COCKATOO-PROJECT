import {Link,useNavigate,useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import "../../Style/slick.css";
import "../../Style/slick-theme.css";
import '../../Style/quill.snow.css';
import '../../index.css'
import AddCloth from'./AddCloth.js'
import ShowDetailCloth from './ShowDetailCloth';
import { useRecoilValue } from 'recoil';
import { getCloset, setFollowingCloset } from '../../Recoil/Api';
import { TotalId } from '../../Recoil/Atoms';
import { useMutation } from "react-query";

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
        object-fit: cover;
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
        margin-left: 5vw;
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
        object-fit:cover;
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
    
    const [closet,setCloset] = useState();
    const [standard,setStandard] = useState([]);
    const [cody,setCody] = useState(0);
    const [addCloth, setAddCloth] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [clicked,setClicked] = useState({});
    const [update,setUpdate] = useState(0);

    const params = useParams();
    const id = params.userid;
    const totalId = useRecoilValue(TotalId);
    
    useEffect(() => {
            getCloset(id).then(response => {
                let data = response[0][0];
                data = {...data,
                        cody : response[1],
                        outer : response[2],
                        top : response[3],
                        pants : response[4],
                        shoes : response[5],
                }
                setCloset(data);
                setStandard(data.cody);
            });
        }
    ,[update])

    const fetchFollow = useMutation(setFollowingCloset,{
        onSuccess: data => {
            if (data.message === "성공적으로 팔로우했습니다.") {
                alert("팔로우 성공");
                setUpdate(update+1);
            } else {
                alert("언팔로우 성공")
                setUpdate(update+1);
            }
        },
        onError: () =>{
            alert("에러발생")
        }
    });

    const onClickFollowingButton = (u_id) => {
        fetchFollow.mutate({
            "follower_id" : totalId,
            "followee_id" : id
        })
    }

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
                {closet ?
                <>
                <Container1>
                    <ProfileImg>
                        <img src={closet.u_image} alt="profileImage"/>
                    </ProfileImg>
                    <ProfileInfo>
                        <div className="rankName">{closet.u_name}</div>
                        <div className="rankFollower">{closet.u_follower}명이 팔로잉</div>
                        <button onClick = {()=>onClickFollowingButton()} type="button" className="followingBtn">팔로잉</button>
                       
                    </ProfileInfo>
                    <ProfileCmkg>
                        <div>{closet.u_height}cm {closet.u_weight}kg {closet.u_mainst}</div>
                    </ProfileCmkg>
                        <div className="todayLine"/>
                    <Standard>
                        <div onClick={()=>{setStandard(closet.cody); setCody(0)}}><img src=' https://user-images.githubusercontent.com/44117975/194839189-ac6e7dbb-a00f-41b5-9b79-489dbe520a21.png' alt="cody"/></div>
                        <div onClick={()=>{setStandard(closet.outer); setCody(1)}}><img src='https://user-images.githubusercontent.com/44117975/194839751-8eac44d7-968f-4207-85cc-1360fe3229c0.png' alt="outer"/></div>
                        <div onClick={()=>{setStandard(closet.top); setCody(2)}}><img src='https://user-images.githubusercontent.com/44117975/194835083-0c13e236-4114-44b4-9c16-12b395099045.png' alt="top"/></div>
                        <div onClick={()=>{setStandard(closet.pants); setCody(3)}}><img src='https://user-images.githubusercontent.com/44117975/194836944-6324201b-463f-4682-8381-5f3b12273686.png' alt="pants"/></div>
                        <div onClick={()=>{setStandard(closet.shoes); setCody(4)}}><img src='https://user-images.githubusercontent.com/44117975/194837020-59178a0a-fb78-47e4-8d33-3f349e79d165.png' alt="shoes"/></div>
                    </Standard>
                </Container1>
                <Container2>
                    {cody === 0 ?
                    standard.map((item,index)=>{
                        return(
                            <Pid>
                                <img style={{maxHeight:"20vw",minHeight:"20vW"}} onClick={()=>showDetailModal(item)}  src={item.cody_image} alt="img"/>
                            </Pid>
                        )
                    }):
                    standard.map((item, index)=>{
                        return(
                            <Pid>
                                <img style={{maxHeight:"14vW"}} onClick={()=>showDetailModal(item)}  src={item.clo_image} alt="img"/>
                            </Pid>
                        )
                    })
                }
                </Container2>
                {id === totalId && <img onClick={showModal} src = "https://user-images.githubusercontent.com/44117975/194871518-babeacb7-597c-47ea-8f6f-31ed09974047.png" alt="add" className='addbutton'/>}
                {addCloth && <AddCloth setAddCloth = {setAddCloth} cody = {cody}/>}
                {showDetail && <ShowDetailCloth setShowDetail={setShowDetail} cody = {cody} user = {clicked} id = {id}/>}
            </>
            : <div>loading</div>}
            </Container>
            )
}
export default Closet;