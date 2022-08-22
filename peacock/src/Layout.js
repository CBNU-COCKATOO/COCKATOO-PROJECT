import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
  display : flex ;
  a{
    text-decoration: none;
  }
`;
const Menu = styled.div`
  height:4vh;
  background-color: black;
  &:hover{
    background-color: white;
    color:black;
  }
  h3{
    padding-top: 0.5vh;
    margin:0;
    font-size:1vw;
  }
  display: flex;
  justify-content: center;
  text-align: center;
  color:white;
`;
const SearchMenu = styled.div`
  height:4vh;
  background-color: black;
  &:hover{
    background-color: black;
    color:black;
  }
  h3{
    padding-top: 0.5vh;
    width: 100%;
    display: inline;
    margin:0;
  }
  a{
    width: 100%;
  }
  display: flex;
  justify-content: center;
  text-align: center;
  color:white;
`;
const Search = styled.input`
  border-radius: 3vw;
  font-family: Arial, Helvetica, sans-serif,bold;
  text-align: center;
  width:12vw;

`;
const Layout = () => {
  return (
    <div>
      <header style={{backgroundColor:"black",color:"white",padding: 16, fontSize: 48, fontWeight:'bold',textAlign:'center',borderBottom:"0.1vw solid white"}}>
        <Link style={{textDecoration:"none",color:"white"}}to="/">Peacock</Link>
      </header>
      <div>
        <Container>
          <Link to="./closet/nakhyeon" style={{width:"33.333%"}}>
            <Menu><h3>나의 옷장</h3></Menu>
          </Link>
          <SearchMenu style={{width:"33.333%"}} className='search'>
            <Search type="search"></Search>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_HXDWnvE-_-qL2svxEbmiCVcFBbIMdgTNHa8qKE29Q&s"} alt="searchicon" style={{width:"2vw",height:"3vh",marginTop:"0.5vh",marginLeft:"0.5vw"}}></img>
          </SearchMenu>
          <Link to="./ranking" style={{width:"33.333%"}}><Menu><h3>랭킹</h3></Menu></Link>
        </Container>
        <Container>
        <Link to="./dictionary" style={{width:"33.333%"}}>
            <Menu><h3>도감</h3></Menu>
        </Link>
          <Link to="./myPage/myPageInfoFix" style={{width:"33.333%"}}>
            <Menu><h3>마이페이지</h3></Menu>
        </Link>
          <Link to="./logIn" style={{width:"33.333%"}}>
            <Menu><h3>로그인</h3></Menu>
        </Link>
        </Container>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;