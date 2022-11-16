import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation } from 'react-query';
import { useParams, useNavigate } from "react-router-dom";
import { search } from "../Recoil/Api";

const Container = styled.div`  
    display: flex;
    justify-content: center;
    font-family: 'SUIT';
`;
const Container2 = styled.div`
    width:50%;
`;
const Keyword = styled.div`
    font-family: 'SUIT';
    letter-spacing: -0.03em;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-top:3vh;
    color:#747474;
    .keywords{
        font-weight: 600;
        display: inline;
        color:black;
    }
    .result{
        display: inline;
    }
`;
const User = styled.div`
    margin-top:2vh;
`;
const Many=styled.div`
    font-family: 'SUIT';
    font-weight: 600;
    margin-bottom: 1.5vh;
`;
const UserList= styled.div`
    width:100%;
    height:20vh;
    overflow-y: scroll;
    display: flex;
    row-gap: 2vh;
    flex-wrap: wrap;
    padding-left:2vw;
    padding-top:2vw;
    background-color:#FAFAFA;
    border-radius: 1vw;
    border: 1px solid #E1E1E1;
    ::-webkit-scrollbar{
        background-color: #B0B0B0;
        width: 10px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #7939FF;
        border-radius: 10px;
        height:1px;
    }
`;
const UserDetail= styled.div`
    display: flex;
    width:25%;
    img{
        width:25%;
        height:6vh;
        object-fit:cover;
        border-radius:50%;
        margin-right:1vw;
        &:active{ 
            position: absolute;
            object-fit:contain;
            left:-13vw;
            border-radius: 0.5vw;
            top:35vh;
            width:50%;
            height:50%;
        }
    };
    .profile{
        display: flex;
        font-size:0.8vw;
        font-weight: 600;
        cursor: pointer;
        .follow{
            margin-left:1vw;
            color:#7939FF;
            font-weight: 600;
            font-size: 0.7vw;
            margin-top:0.1vh;
            cursor: pointer;
        }
    }
    .kgweight{
        margin-top:1vh;
        color:#747474;
        font-size:0.7vw;
    }
    
`;
const Tip=styled.div`
    display: flex;
    justify-content: center;
    margin-top:1vh;
    font-size:0.6vw;
    color:#7939FF;
    font-weight: 600;
`;

const CodyResult = styled.div`  
    width:10vw;
    .codyResultImg,.cloResultImg {
        img {
        width: 8vw;
        height:17vh;
        object-fit:cover;
        cursor:pointer;
        }
    }
    .codyResultName{
        text-align:center;
        margin-right:1.5vw;
        font-weight:500;
    }
    
`;
function Search(){
    const params = useParams();
    const keyword = params.keyword;
    const [result, setResult] = useState([]);
    const navigate = useNavigate();

    const postSearch = useMutation(search, {
        onSuccess: data => {
            console.log(data)
            setResult(data)
        },
        onError: () => {
            alert("there was an error")
        },
    });

    useEffect(() => {
        postSearch.mutate({"search_text":keyword})
    },[keyword])
 
    const onClickResultUser = (u_id) => {
        navigate(`/closet/${u_id}`)
    }
    return(
     <Container>
        <Container2>
            <Keyword>
                <div className="keywords">'{keyword}'</div> <div className="result">검색결과</div>
            </Keyword>
            <Tip>
                유저 사진을 클릭하고 계시면 좀 더 크게 볼 수 있습니다!!
            </Tip>
            {result.length > 0 && 
            <>
            <User>
                <Many>유저: {result[0].length}명</Many>
                <UserList>
                    {result[0].map((item) => {
                        return(
                            <UserDetail>
                                <img src={item.u_image} alt="userimg"/>
                                <div className="info">
                                    <div className="profile" onClick={() => onClickResultUser(item.u_id)}>
                                    {item.u_name}
                                    <div className="follow">팔로우</div>
                                    </div>
                                    <div className="kgweight">
                                    {item.u_height}cm {item.u_weight}kg {item.u_mainst}
                                    </div>
                                </div>
                            </UserDetail>

                        );
                    })}
                </UserList>
            </User>
            </>
            }
            {result.length > 0 &&  
            <>
            <User>
                <Many>코디: {result[1].length}명</Many>
                <UserList style={{paddingTop:"1vh"}}>
                    {result[1].map((item)=>{
                        return(
                            <CodyResult>
                                <div className="codyResultImg">
                                    <img onClick = {() => navigate(`/closet/${item.u_id}`)} src = {item.cody_image}/>
                                </div>
                                <div className="codyResultName">
                                    {item.cody_name}
                                </div>
                            </CodyResult>
                        );
                    })}
                </UserList>
            </User>
            </>}
            {result.length > 0  && <>
            <User>
                <Many>옷: {result[2].length}명</Many>
                <UserList>
                    {result[2].map((item)=>{
                        return(
                            <CodyResult>
                                <div className="cloResultImg">
                                    <img onClick = {() => navigate(`/closet/${item.u_id}`)}  src = {item.clo_image}/>
                                </div>
                                <div className="codyResultName">
                                    {item.clo_name}
                                </div>

                            </CodyResult>
                        );
                    })}
                </UserList>
            </User></>}
        </Container2>
     </Container>
    )
}

export default Search;