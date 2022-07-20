import {BrowserRouter,Routes,Route} from "react-router-dom";
import Closet from "./routes/Closet";
import Main from "./routes/Main";
import Ranking from "./routes/Ranking";
import Layout from "./Layout";
function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/closet/:username" element={<Closet/>}></Route>
            </Route>
            <Route path="/ranking" element={<Ranking/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;