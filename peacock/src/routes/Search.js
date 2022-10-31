import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
    height:18vh;
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
        border-radius:50%;
        margin-right:1vw;
        &:active{ 
            position: absolute;
            left:5vw;
            border-radius: 0.5vw;
            top:35vh;
            width:15vw;
            height:15vw;
           
        
        }
    };
    .profile{
        display: flex;
        font-size:0.8vw;
        font-weight: 600;
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
const user=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},

]
const style=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
]
const closet=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJLZQ680TFqf07yXZPCdMnuKkMhvV0ccXbQ&usqp=CAU",name:'지연',cm:"172",kg:'63',style:"스트릿",id:"jiyeon"},
]
function Search(){
    const params=useParams();
    const keyword=params.keyword;

    return(
     <Container>
        <Container2>
        <Keyword>
            <div className="keywords">'{keyword}'</div> <div className="result">검색결과</div>
        </Keyword>
        <Tip>
            사진을 클릭하고 계시면 좀 더 크게 볼 수 있습니다!!
        </Tip>
        <User>
            <Many>유저명: {user.length}명</Many>
            <UserList>
                {user.map((item)=>{
                    return(
                        <UserDetail>
                            <img src={item.img} alt="userimg"/>
                            <div className="info">
                                <div className="profile">
                                {item.name}
                                <div className="follow">팔로우</div>
                                </div>
                                <div className="kgweight">
                                {item.cm}cm {item.kg}kg {item.style}
                                </div>
                            </div>
                        </UserDetail>

                    );
                })}
            </UserList>
        </User>
        <User>
            <Many>옷장: {user.length}명</Many>
            <UserList>
                {user.map((item)=>{
                    return(
                        <UserDetail>
                            <img src={item.img} alt="userimg"/>
                            <div className="info">
                                <div className="profile">
                                {item.name}
                                <div className="follow">팔로우</div>
                                </div>
                                <div className="kgweight">
                                {item.cm}cm {item.kg}kg {item.style}
                                </div>
                            </div>
                        </UserDetail>

                    );
                })}
            </UserList>
        </User>
        <User>
            <Many>스타일: {user.length}명</Many>
            <UserList>
                {user.map((item)=>{
                    return(
                        <UserDetail>
                            <img src={item.img} alt="userimg"/>
                            <div className="info">
                                <div className="profile">
                                {item.name}
                                <div className="follow">팔로우</div>
                                </div>
                                <div className="kgweight">
                                {item.cm}cm {item.kg}kg {item.style}
                                </div>
                            </div>
                        </UserDetail>

                    );
                })}
            </UserList>
        </User>
        </Container2>
     </Container>
    )
}

export default Search;