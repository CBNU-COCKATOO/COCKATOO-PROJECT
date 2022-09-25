import { Outlet,Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { LoginStatus } from './atoms'
import './index.css'
const Header = styled.div`
   display: flex;
   width:100%;
   height:8vh;
   justify-content: center;
   border-bottom: 1px solid rgb(242,242,242);
   h3{
    font-family: "SUIT";
    color:#454545;
  }
`;
const Head = styled.div`
    display: flex;
    width:75%;
    h3{
        font-weight: 600;
        font-size:0.7vw;
        cursor: pointer;
      
    }
`;
const Logo = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    width:18%;
   
`;
const MyCloset = styled.div`
  width:8%;
  margin-top:1.3vh;  
  
`;
const Ranking = styled.div`
margin-top:1.3vh;
  width:6%;`;
const Dictionary = styled.div`
margin-top:1.3vh;
  width:4%;`;
const Search =styled.div`
  width:46%;
  margin-top: 2vh;
  margin-left:4vw;
  img{
       width:1.3vw;
        position: absolute;
        right: 42vw;
        top:3.1vh;
        cursor:pointer;
  }
`;
const Input = styled.input`
  width:50%;
  height:2vh;
  border:none;
  border-radius: 1vw; 
  background-color: rgb(248,248,248);
  padding:0.4vw;
  padding-left: 1vw;
  ::placeholder{
    font-family: "SUIT";
  }
`;
const MyPage = styled.div`
margin-top:1.3vh;
  width:8%;
`;
const User = styled.div`
margin-top:1.3vh;
  width:6%;`;
const Login = styled.div`
margin-top:1.3vh;
  width:5%;`;

const Layout = () => {
  const [state,setState]=useState(0);
  const navigate=useNavigate();
  const loginStatus = useRecoilValue(LoginStatus);
  const setterLoginStatus=useSetRecoilState(LoginStatus);

  const onClickLogo = () =>{
    navigate("/");
    setState(0);
  }
  const onClickMyCloset = () =>{
      navigate("/closet/nakhyeon");
      setState(1);
  }
  const onClickRanking = () =>{
      navigate("/ranking");
      setState(2);
  }
  const onClickDictionary=()=>{
      navigate("/");
      setState(3);
  }
  const onClickMyPage = () =>{
      navigate("/myPage/myPageInfoFix");
      setState(4);
  }
  const onClickLogin = () =>{
      navigate("/login");
      setState(5);
  }
   return (
    <div>
        <Header>
            <Head>
                <Logo onClick={onClickLogo}><img style={{width:"90%",height:"160%",objectFit:"fill"}} src="https://user-images.githubusercontent.com/44117975/191046781-fcaf525d-664f-49e7-a135-56c26781179b.png" alt="jjowinLogo"></img></Logo>
                {state===1?
                <MyCloset>
                  <h3 style={{fontWeight:"bold",color:"#7939FF"}} onClick={onClickMyCloset}>나의 옷장</h3>
                </MyCloset>:
                 <MyCloset>
                 <h3 onClick={onClickMyCloset}>나의 옷장</h3>
               </MyCloset>}
                {state===2?
                <Ranking>
                  <h3 onClick={onClickRanking} style={{fontWeight:"bold",color:"#7939FF"}}>랭킹</h3>
                </Ranking>:
                <Ranking>
                <h3 onClick={onClickRanking} >랭킹</h3>
              </Ranking>}
                {state===3?
                <Dictionary>
                  <h3 onClick={onClickDictionary} style={{fontWeight:"bold",color:"#7939FF"}}>도감</h3>
                </Dictionary>:
                <Dictionary>
                <h3 onClick={onClickDictionary}>도감</h3>
              </Dictionary>}
                <Search>
                  <Input placeholder='가디건 추천'/>
                  <img src="https://cdn-icons-png.flaticon.com/128/2801/2801881.png" alt="searchIcon"/>
                </Search>
                {state===4?
                <MyPage>
                  <h3 onClick={onClickMyPage} style={{fontWeight:"bold",color:"#7939FF"}}>마이페이지</h3>
                </MyPage>:
                <MyPage>
                <h3 onClick={onClickMyPage}>마이페이지</h3>
              </MyPage>}
                <User>
                  <h3>User님</h3>
                </User>
                {state===5?
                <Login>
                  <h3 onClick={onClickLogin} style={{fontWeight:"bold",color:"#7939FF"}}>로그인</h3>
                </Login>:
                <Login>
                <h3 onClick={onClickLogin}>로그인</h3>
              </Login>}
            </Head>
        </Header>
        <main>
        <Outlet />
        </main>
       
    </div>
  );
};

export default Layout;