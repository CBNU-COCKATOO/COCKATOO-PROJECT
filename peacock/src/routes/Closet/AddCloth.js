import { useState, useRef } from 'react';
import styled from "styled-components";
import ReactQuill from 'react-quill';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { setCody, imageUpload, setCloth } from '../../Recoil/Api';
import { TotalId } from '../../Recoil/Atoms';
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
    margin-top:4vh;
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
    /*
    state
    name : 코디명 / 옷 명 
    style : 코디 / 옷 스타일
    styleStauts : 현재 스타일 선택 인덱스
    description : 코디 / 옷 설명 
    mall : 옷 판매처 
    color : 추출된 옷 색상
    size : 옷 사이즈 
    shoeSize :옷 사이즈 
    newImage : 등록된 이미지 (파일)
    convertedUrl : 사진을 등록해 반환된 이미지 url
    */
    const [name, setName] = useState("");
    const [style, setStyle] = useState(
        ["캐주얼","스트릿","미니멀","스타일1","스타일2"]
    );
    const [styleStatus, setStyleStauts] = useState(0);
    const [description, setDescription] = useState("");  
    const [mall, setMall] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState(["XS","S","M","L","XL"]);
    const [sizeStatus , setSizeStauts] = useState(0);
    const [shoesSize, setShoesSize] = useState(0);
    const [newImage, setNewImage] = useState(null);
    const [convertedUrl, setConvertedUrl] = useState("");
    const [nowCody, setNowCody] = useState(cody);
    
    /*
    variable 
    id : 전역 상태 아이디 (로그인 시 set)
    standard : 옷 카테고리 
    imRef : 클릭하는 걸 참조하는 ref
    */
    const id = useRecoilValue(TotalId);
    const standard = ["코디", "아우터", "상의", "하의", "신발"];
    const fetchStandard = ["코디", "outer", "top", "pants", "shoes"];
    const imgRef = useRef();

    /*
    onChange 
    onChangeName : 이름 입력
    onChangeMall : 판매처 입력
    onChangeMyEdit : description 입력
    onChangeImage : 이미지 파일 변경
    onChangeShoesSize : 신발 사이즈 입력
    */
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeMall = (e) => {
        setMall(e.target.value);
    };

    const onChangeImage = () => {
        const file = imgRef.current.files[0];
        let formData = new FormData();

        formData.append("file",file);
        setNewImage(file);
        fetchImageUpload.mutate(formData) 
    };

    const onChangeMyDescription = (value) => {
        value = encodeURI(value);
        setDescription(value);
    };
    
    const onChangeShoesSize = (e) =>{
        setShoesSize(e.target.value);
    };

    /*
    onClick 
    onClickFileBtn : 이미지 클릭
    onClickStyle : 스타일 클릭
    onClickSize : 사이즈 클릭
    onClicksubmit : 올리기 버튼 클릭
    onClickCancel : 취소 버튼 클릭 
    */
    const onClickFileBtn = (e) => {
        imgRef.current.click();
    };
     const onClickStyle = (index) =>{
        setStyleStauts(index)
    };

    const onClickSize = (index) =>{
        setSizeStauts(index);  
    };

    const onClicksubmit = () =>{
        if (nowCody === 0 ) {
            registerCody.mutate({
                "cody_name" : name,
                "cody_style" : style[styleStatus],
                "cody_image" : convertedUrl,
                "cody_des" : description, 
                "u_id" : id
            })
        } else {
            registerCloth.mutate({
                "clo_name" : name,
                "clo_maker" : mall,
                "clo_size" : size[sizeStatus],
                "clo_style" : style[styleStatus],
                "clo_image" : convertedUrl,
                "clo_des" : description, 
                "clo_type" : fetchStandard[nowCody],
                "u_id" : id
            })
        }
    }   

    const onClickCancel = () => {
        setAddCloth(false);
    };
    
    /*
    react-query
    registerCody : 코디 등록
    registerCloth : 옷 등록 
    fetchImageUpload : 이미지를 서버에 등록 후 url 반환
    */
    const registerCody = useMutation(setCody, {
        onSuccess: data => {
            console.log(data);
            const message = "success"
            alert(message)
        },
        onError: () => {
            alert("there was an error")
        },
    });

    const registerCloth = useMutation(setCloth, {
        onSuccess: (data) => {
            console.log(data); 
            const message = "success"
            alert(message)
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
            <Container2>
                <> 
                    <Title>{standard[nowCody]} 추가하기</Title>
                    {nowCody === 0 ?
                    //코디 추가 
                    <Infromation>
                        <input
                        type = "file"
                        ref = {imgRef}
                        onChange = {onChangeImage}
                        style = {{ display: "none" }}
                        />
                        <Image>
                            <img onClick = {onClickFileBtn}  src={convertedUrl ? convertedUrl : "https://user-images.githubusercontent.com/44117975/198823926-d1a8fed0-a178-422b-99f7-de4f6548cb07.png"} alt = "addImg"/>
                        </Image>
                        <InformationDetail>
                            <div>
                                <p style = {{display:"inline-block"}}>코디명</p>
                                <input onChange = {onChangeName}/>
                            </div>
                            <div>
                                 <p style = {{display:"inline-block"}}>스타일</p>
                                 <div className = 'style'>
                                    {style.map((item, index) => {
                                        if(index === styleStatus)return(<span style = {{backgroundColor:"#7939FF",color:"white"}} onClick = {() => onClickStyle(index)}>{item}</span>)
                                        return(<span style = {{backgroundColor:"#F4F4F4"}} onClick={() => onClickStyle(index)}>{item}</span>)
                                    })}
                                </div>
                            </div>
                            <div style = {{display:"flex"}}>
                                <p style = {{display:"inline"}}>코디 설명</p>
                                <div className = "textEditor" style = {{height:"17vw"}}>
                                        <ReactQuill theme = "snow"
                                                    modules = {modules}
                                                    onChange = {onChangeMyDescription}>
                                        </ReactQuill>
                                </div>
                            </div>
                        </InformationDetail>
                    </Infromation>:
                    /*
                    코디가 아닌 등록
                    - 신발이 아닌 등록
                    - 신발 등록 
                    */
                     <Infromation>
                        <input
                        type="file"
                        ref={imgRef}
                        onChange={onChangeImage}
                        style={{ display: "none" }}
                        />
                     <Image>
                         <img onClick={onClickFileBtn} src={convertedUrl ? convertedUrl : "https://user-images.githubusercontent.com/44117975/198823926-d1a8fed0-a178-422b-99f7-de4f6548cb07.png"} alt="addImg"/>
                     </Image>
                     <InformationDetail>
                        <div>
                            <p style={{display:"inline-block"}}>제품명</p>
                            <input onChange={onChangeName}/>
                        </div>
                        <div>
                            <p style={{display:"inline-block"}}>판매처</p>
                            <input onChange={onChangeMall}/>
                        </div>
                        <div> 
                            <p style={{display:"inline-block"}}>사이즈</p>
                                {nowCody === 4 ?
                                    <input onChange={onChangeShoesSize}/>
                                    :
                                    <div className='clothSize'>
                                        {size.map((item, index) => {
                                                if(index === sizeStatus)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickSize(index)}>{item}</span>)
                                                return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickSize(index)}>{item}</span>)
                                        })}
                                    </div>
                                }
                        </div>
                        <div>
                            <p style={{display:"inline-block"}}>스타일</p>
                            <div className='style'>
                                {style.map((item, index) => {
                                            if(index === styleStatus)return(<span style={{backgroundColor:"#7939FF",color:"white"}} onClick={()=>onClickStyle(index)}>{item}</span>)
                                            return(<span style={{backgroundColor:"#F4F4F4"}} onClick={()=>onClickStyle(index)}>{item}</span>)
                                })}
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <p style={{display:"inline"}}>코디 설명</p>
                            <div className="textEditor">
                                <ReactQuill theme="snow"
                                            modules={modules}
                                            onChange={onChangeMyDescription}>
                                </ReactQuill>
                            </div>
                        </div>
                    </InformationDetail>
                </Infromation>
                }
                </>
                <Submit>
                    <Button onClick={onClickCancel} backgroundColor="#747474" color="white">취소</Button>
                    <Button onClick={onClicksubmit} backgroundColor="#F4F4F4" color="#747474">올리기</Button>
                </Submit>
            </Container2>
        </Container>
        </>
    )

}

export default AddCloth;