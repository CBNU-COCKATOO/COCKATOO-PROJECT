import '../index.css'
import { Outlet,Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue,useSetRecoilState} from 'recoil';
import { useState } from 'react';
import { LoginStatus, TotalId } from '../Recoil/Atoms'

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
  margin-top:2.5vh;
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
  margin-top: 1.5vh;
  margin-left:4vw;
  img{
       width:1.3vw;
        position: absolute;
        right: 41vw;
        top:3.2vh;
        cursor:pointer;
  }
  input:focus{
    outline-color: #7939FF;
  }
`;
const Input = styled.input`
  width:50%;
  height:3vh;
  border:none;
  border-radius: 1vw; 
  background-color: #F5F5F5;
  padding:0.4vw;
  padding-left: 1vw;
  font-family: "SUIT";
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
  width:8%;`;
const Login = styled.div`
margin-top:1.3vh;
  width:5%;`;

function Layout(){
  const [state,setState]=useState(0);
  const [keyword,setKeyword]=useState("가디건 추천");

  const navigate=useNavigate();
  const loginStatus = useRecoilValue(LoginStatus);
  const id = useRecoilValue(TotalId);
  const user = useRecoilValue(TotalId);
  const setterLoginStatus = useSetRecoilState(LoginStatus);
  const setterTotalId = useSetRecoilState(TotalId);
  
  const onClickLogo = () =>{
    navigate("/");
    setState(0);
  }
  const onClickMyCloset = () =>{
      navigate(`/closet/${id}`);
      setState(1);
  }
  const onClickRanking = () =>{
      navigate("/ranking");
      setState(2);
  }
  const onClickDictionary=()=>{
      navigate("/dictionary");
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
  const onClickLogOut = () => {
    setterLoginStatus(0);
    setterTotalId("");
  }
  const onChangeKeyword = (e) =>{
    setKeyword(e.target.value);
  }
  const handleOnClick = () => {
    navigate(`/search/${keyword}`);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter' && keyword) {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
   return (
    <div>
        <Header>
            <Head>
                <Logo onClick={onClickLogo}><img style={{width:"100%",height:"3vh",objectFit:"contain"}} src="https://user-images.githubusercontent.com/44117975/195836992-2fd18d12-97e9-414c-8e4b-ab54ca72c342.png" alt="jjowinLogo"/></Logo>
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
                  <Input  onKeyPress={handleOnKeyPress} onChange={onChangeKeyword} placeholder='가디건 추천'/>
                  <img onClick={()=>navigate(`/search/${keyword}`)} src="https://cdn-icons-png.flaticon.com/128/2801/2801881.png" alt="searchIcon"/>
                </Search>
                {state===4?
                <MyPage>
                  <h3 onClick={onClickMyPage} style={{fontWeight:"bold",color:"#7939FF"}}>마이페이지</h3>
                </MyPage>:
                <MyPage>
                <h3 onClick={onClickMyPage}>마이페이지</h3>
              </MyPage>}
                <User>
                  <h3>{user? user: "게스트"}님</h3>
                </User>
                {state===5?
                <Login>
                   {loginStatus ? <h3 style={{fontWeight:"bold",color:"#7939FF"}} onClick={onClickLogOut}>로그아웃</h3>: <h3 style={{fontWeight:"bold",color:"#7939FF"}}  onClick={onClickLogin}>로그인</h3>}
                </Login>:
                <Login>
                {loginStatus ? <h3 onClick={onClickLogOut}>로그아웃</h3>: <h3 onClick={onClickLogin}>로그인</h3>}
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