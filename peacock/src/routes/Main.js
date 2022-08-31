import styled from "styled-components"
import { useRecoilValue } from "recoil";
import { TotalId,TotalPw } from "../atoms";
const Html = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:70vh;
    flex-direction: column;
`;

function Main(){
    const ids = useRecoilValue(TotalId);
    const pws = useRecoilValue(TotalPw);
    return(
        <Html>
        <h1 >추후 업데이트 예정입니다..</h1>
        <h1>아이디:{ids}<br/>비밀번호:{pws}</h1> 
        </Html>
    )
}
export default Main;