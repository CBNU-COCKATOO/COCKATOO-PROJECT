import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import Closet from "./routes/Closet";
import Main from "./routes/Main";
import Ranking from "./routes/Ranking";
import Layout from "./Layout";
import Dictionary from "./routes/Dictionary";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SingUp";
import LogInLayout from "./routes/LoginLayout";
import MyPageLayout from "./Mypage/MypageLayout";
import MyPageCloset from "./Mypage/MyPageCloset";
import MyPageFollower from "./Mypage/MypageFollower";
import MyPageSetting from "./Mypage/MyPageSetting";
import MyPageStyleFix from "./Mypage/MypageStyleFix";
import MyPageInfoFix  from "./Mypage/MyPageInfoFix";

function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/closet/:username" element={<Closet/>}></Route>
            <Route path="/ranking" element={<Ranking/>}></Route>
            <Route path="/dictionary" element={<Dictionary/>}></Route>
            <Route  element={<MyPageLayout/>}>
                <Route path="/myPage/myPageInfoFix" element={<MyPageInfoFix/>}></Route>
                <Route path="/myPage/myPageCloset" element={<MyPageCloset/>}></Route>
                <Route path="/myPage/myPageFollower" element={<MyPageFollower/>}></Route>
                <Route path="/myPage/myPageSetting" element={<MyPageSetting/>}></Route>
                <Route path="/myPage/myPageStyleFix" element={<MyPageStyleFix/>}></Route>
            </Route>
            <Route  element={<LogInLayout/>}>
                <Route path="/logIn" element={<LogIn/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
            </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;