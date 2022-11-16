import {BrowserRouter,useParams,Routes,Route, useNavigate} from "react-router-dom";
import Closet from "./routes/Closet/Closet";
import Main from "./routes/Main";
import Ranking from "./routes/Ranking";
import Layout from "./routes/Layout";
import Dictionary from "./routes/Dictionary/Dictionary";
import LogIn from "./routes/LoginSignUp/LogIn";
import SignUp from "./routes/LoginSignUp/SingUp";
import Search from "./routes/Search";
import MyPageLayout from "./Mypage/MypageLayout";
import MyPageCloset from "./Mypage/MyPageCloset";
import MyPageFollower from "./Mypage/MypageFollower";
import MyPageStyleFix from "./Mypage/MypageStyleFix";
import MyPageInfoFix  from "./Mypage/MyPageInfoFix";

function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/closet/:userid" element={<Closet/>}></Route>
            <Route path="/ranking" element={<Ranking/>}></Route>
            <Route path="/dictionary" element={<Dictionary/>}></Route>
            <Route path="/search/:keyword" element={<Search/>}></Route>
            <Route  element={<MyPageLayout/>}>
                <Route path="/myPage/myPageInfoFix" element={<MyPageInfoFix/>}></Route>
                <Route path="/myPage/myPageCloset" element={<MyPageCloset/>}></Route>
                <Route path="/myPage/myPageFollower" element={<MyPageFollower/>}></Route>
                <Route path="/myPage/myPageStyleFix" element={<MyPageStyleFix/>}></Route>
            </Route>
            <Route path="/logIn" element={<LogIn/>}></Route>
            <Route path="/signUp" element={<SignUp/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;