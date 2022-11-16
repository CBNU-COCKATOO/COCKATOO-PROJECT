import { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import ReactQuill from 'react-quill';
import { useMutation} from "react-query";
import { imageUpload, repairCody, repairCloth, deleteCody, deleteCloth } from '../../Recoil/Api';
import { TotalId } from '../../Recoil/Atoms';
import { useRecoilValue } from 'recoil';
import modules from '../../Const/Modules';

const Container = styled.div`
    animation: fadein 1s;
    -webkit-animation: fadein 1s;
    @keyframes fadein {

        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
 // 모달창 크기
  width: 46vw;
  height: 68vh;

  // 최상단 위치 
  z-index: 999;
  
  // 중앙 배치 */
  // top, bottom, left, right 는 브라우저 기준으로 작동한다. 
  // translate는 본인의 크기 기준으로 작동한다. 
  position: fixed;
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
        max-height:50vh;
        object-fit:cover;
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
    .codyName,.codyStyle{
        display: inline-block;
        width: 19.5vw;
        text-align: center;
        background-color: #F4F4F4;
        padding: 1.5vh 0 1.5vh 0;
        border-radius: 0.7vw;

    }
    .codyReview{
        padding-top:1vh;
        margin-top:1.5vh;
        text-align: center;
        width:19vw;
        height:33vh;
        overflow-y: scroll;
        background-color: #F4F4F4;
        border-radius: 0.6vw;
    }
`; 
const InformationDetails = styled.div`
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
    .codyName,.codyStyle{
        display: inline-block;
        width: 19.5vw;
        text-align: center;
        background-color: #F4F4F4;
        padding: 1.5vh 0 1.5vh 0;
        border-radius: 0.7vw;

    }
    .codyReview{
        padding-top:1vh;
        margin-top:1.5vh;
        text-align: center;
        width:19vw;
        height:18vh;
        overflow-y: scroll;
        background-color: #F4F4F4;
        border-radius: 0.6vw;
    }
`;
const Submit = styled.div`
    margin-top:3.5vh;
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

function ShowDetailCloth({setShowDetail, cody, user, id}){
    /*
    state
    repair : 수정 or 보기를 정하는 상태 
    repairCodyName : 수정시 코디 / 옷 명
    repairSize : 수정 시 옷 사이즈
    repairSizeStatus : 수정 시 현재 사이즈 선택 인덱스
    repairStyle : 수정 시 스타일 
    repairStyleStauts : 수정시 현재 스타일 선택 인덱스
    repairReview : 수정 시 코디 / 옷 설명 
    */
    const [repair, setRepair] = useState(0);
    const [repairName, setRepairName] = useState("");
    const [repairStyle,setRepairStyle] = useState(
        ["캐주얼","스트릿","미니멀","스타일1","스타일2"]);
    const [repairStyleStatus, setRepairStyleStatus] = useState(0);
    const [repairDescription, setRepiarDescription] = useState("");
    const [repairMall, setRepairMall] = useState("");
    const [repairSize, setSize] = useState(["XS","S","M","L","XL"]);
    const [shoesRepairSize, setRepairShoesSize] = useState(0);
    const [repairSizeStatus , setRepairSizeStauts] = useState(0);
    const [newImage, setNewImage] = useState(null);
    const [convertedUrl, setConvertedUrl] = useState();
    
    useEffect(() => {
        if (cody === 0) {
            setConvertedUrl(user.cody_image);
        } else {
            setConvertedUrl(user.clo_image);
        }
    },[])


    const totalId = useRecoilValue(TotalId);
    const standard = ["코디", "아우터", "상의", "하의", "신발"];
    const imgRef = useRef();

    /*
    onChange 
    onChangeRepairCodyName : 이름 입력
    onChangeMall : 판매처 입력
    onChangeRepairCodyReview : description 입력
    onChangeImage : 이미지 파일 변경
    onChangeShoesSize : 신발 사이즈 입력
    */

    const onChangeRepairName = (e) => {
        setRepairName(e.target.value);
    };

    const onChangeMall = (e) => {
        setRepairMall(e.target.value);
    };

    const onChangeImage = () => {
        const file = imgRef.current.files[0];
        let formData = new FormData();

        formData.append("file",file);
        setNewImage(file);
        fetchImageUpload.mutate(formData) 
    };

    const onChangeRepairDescription = (value) => {
        setRepiarDescription(decodeURI(value))
    };

    const onChangeRepairShoesSize = (e) =>{
        setRepairShoesSize(e.target.value);
    };

    const onClickFileBtn = (e) => {
        imgRef.current.click();
    };

    const onClickRepairStyle = (index) =>{
        setRepairStyleStatus(index);
    };

    const onClickRepairSize = (index) =>{
        setRepairSizeStauts(index);  
    };

    const repairSubmit = () =>{
        if (cody === 0 ) {
            const data = {
                "cody_name" : repairName,
                "cody_style" :repairStyle[repairStyleStatus],
                "cody_image" : convertedUrl,
                "cody_des" : repairDescription, 
            
            }
            registerRepairCody.mutate({"data":data, "cody_id":user.cody_id})
        } else {
            const data = {
                "clo_name" : repairName,
                "clo_maker" : repairMall,
                "clo_size" : repairSize[repairSizeStatus],
                "clo_style" : repairStyle[repairStyleStatus],
                "clo_image" : convertedUrl,
                "clo_des" : repairDescription, 
            }
            registerRepairCloth.mutate({"data":data, "clo_id":user.clo_id})
        }
    }  
    
    const onClickCancel = () => {
        setShowDetail(false);
    };
    
    const onClickRepairButton = () => {
        setRepair(1);
    }
    
    const onClickDeleteButton = () => {
        if (cody === 0) {
            deleteCody(user.cody_id);
        }
        if (cody !== 0) {
            deleteCloth(user.clo_id);
        }
    }

    const registerRepairCody = useMutation(repairCody, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const registerRepairCloth = useMutation(repairCloth, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const fetchImageUpload = useMutation(imageUpload, {
        onSuccess: (data) => {
            console.log(data);
            setConvertedUrl(data.location);
        },
        onError: () => {
            alert("there was an error")
        },
    });

    return(
        <>
        <Background onClick={onClickCancel}/>
         <Container>
            {repair?
            <Container2>
                <> 
                    <Title>{standard[cody]} 수정</Title>
                    {cody === 0 ?
                    //코디 수정 
                    <Infromation>
                        <input
                        type="file"
                        ref={imgRef}
                        onChange={onChangeImage}
                        style={{ display: "none" }}
                        />
                        <Image>
                            <img onClick={onClickFileBtn}  src={convertedUrl ? convertedUrl :user.cody_image} alt="addImg"/>
                        </Image>
                        <InformationDetail>
                            <div style={{display:"flex"}}>
                                <p style={{display:"inline-block"}}>코디명</p>
                                <input onChange={onChangeRepairName}/>
                            </div>
                            <div>
                                <p style={{display:"inline-block"}}>스타일</p>
                                <div className='style'>
                                {repairStyle.map((item, index) => {
                                    if(index == repairStyleStatus)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickRepairStyle(index)}>{item}</span>)
                                    return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickRepairStyle(index)}>{item}</span>)
                                })}
                            </div>
                            </div>
                            <div style={{display:"flex"}}>
                                <p style={{display:"inline"}}>코디 설명</p>
                                <div className="textEditor" style={{height:"17vw"}}>
                                        <ReactQuill theme="snow"
                                                    modules={modules}
                                                    onChange={onChangeRepairDescription}>
                                        </ReactQuill>
                                </div>
                            </div>
                        
                        </InformationDetail>
                    </Infromation>:
                    //코디가 아닌 수정 
                     <Infromation>
                        <input
                            type="file"
                            ref={imgRef}
                            onChange={onChangeImage}
                            style={{ display: "none" }}
                        />
                     <Image>
                         <img onClick={onClickFileBtn}  src={convertedUrl ? convertedUrl :user.clo_image} alt="addImg"/>
                     </Image>
                     <InformationDetail>
                         <div>
                             <p style={{display:"inline-block"}}>제품명</p>
                             <input onChange={onChangeRepairName}/>
                         </div>
                         <div>
                         <p style={{display:"inline-block"}}>판매처</p>
                             <input onChange={onChangeMall}/>
                         </div>
                         <div> 
                         <p style={{display:"inline-block"}}>사이즈</p>
                             {cody === 4 ?
                             //옷 수정중 신발인경우
                               <input onChange={onChangeRepairShoesSize}/>
                             :
                             //옷 수정중 신발이 아닌경우
                            <div className='clothSize'>
                              {repairSize.map((item, index) => {
                                        if(index === repairSizeStatus)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickRepairSize(index)}>{item}</span>)
                                        return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickRepairSize(index)}>{item}</span>)
                                    })}
                            </div>
                             }
                         </div>
                         <div>
                            <p style={{display:"inline-block"}}>스타일</p>
                            <div className='style'>
                                {repairStyle.map((item, index) => {
                                    if(index === repairStyleStatus)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickRepairStyle(index)}>{item}</span>)
                                    return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickRepairStyle(index)}>{item}</span>)
                                })}
                            </div>
                         <div>

                         </div>
                         </div>
                         <div style={{display:"flex"}}>
                             <p style={{display:"inline"}}>코디 설명</p>
                             <div className="textEditor">
                                <ReactQuill theme="snow"
                                            modules={modules}
                                            onChange={onChangeRepairDescription}>
                                </ReactQuill>
                             </div>
                         </div>
                     
                     </InformationDetail>
                 </Infromation>
                 }
                </>
                <Submit>
                    <Button onClick={onClickCancel} backgroundColor="#F4F4F4" color="#747474">취소</Button>
                    <Button onClick={repairSubmit} backgroundColor="#747474" color="white">확인</Button>
                </Submit>
            </Container2>:
            //자세히 보기
            <Container2>
                  <> 
                    <Title>{standard[cody]} 보기</Title>
                    {cody === 0 ?
                    //코디 보기
                    <Infromation>
                        <Image>
                            <img src={user.cody_image} alt="detailImag3e"/>
                        </Image>
                        <InformationDetail>
                            <div>
                                <p style={{display:"inline-block"}}>코디명</p>
                                <div className='codyName'>{user.cody_name}</div>
                            </div>
                            <div>
                                <p style={{display:"inline-block"}}>스타일</p>
                                <div className='codyStyle'>{user.cody_style}</div>
                            </div>
                            <div style={{display:"flex"}}>
                                <p style={{display:"inline"}}>코디 설명</p>
                                <div dangerouslySetInnerHTML={{__html:user.cody_des}} className='codyReview'/>
                            </div>
                        
                        </InformationDetail>
                    </Infromation>:
                    //코디가 아닌 옷 보기 
                     <Infromation>
                     <Image>
                         <img src={user.clo_image}  alt="addImg"/>
                     </Image>
                     <InformationDetails>
                         <div>
                             <p style={{display:"inline-block"}}>제품명</p>
                             <div className='codyName'>{user.clo_name}</div>
                         </div>
                         <div>
                            <p style={{display:"inline-block"}}>판매처</p>
                            <div className='codyName'>{user.clo_maker}</div>
                         </div>
                         <div> 
                            <p style={{display:"inline-block"}}>사이즈</p>
                            <div className='codyName'>{user.clo_size}</div>
                         </div>
                         <div>
                            <p style={{display:"inline-block"}}>스타일</p>
                            <div className='codyName'>{user.clo_style}</div>
                         </div>
                         <div style={{display:"flex"}}>
                             <p style={{display:"inline"}}>코디 설명</p>
                             <div dangerouslySetInnerHTML={{__html:user.clo_des}} className='codyReview'/>
                         </div>
                     
                     </InformationDetails>
                 </Infromation>
                 }
                </> 
                <Submit>
                    {id === totalId && <Button onClick={onClickDeleteButton} backgroundColor="#747474" color="white">삭제하기</Button>}
                    {id == totalId &&<Button onClick={onClickRepairButton} backgroundColor="#F4F4F4" color="#747474">수정하기</Button>}
                    <Button onClick={onClickCancel} backgroundColor="#747474" color="white">확인</Button>
                </Submit>
            </Container2>
            }
            
         </Container>
        </>
       
    )

}

export default ShowDetailCloth;