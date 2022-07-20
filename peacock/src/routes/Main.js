import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Main(){
    return(
        <>
        <h3>메인입니다.</h3>
        <ul>
            <Link to="/closet/nakhyeon"><li>낙현의 옷장</li></Link>
            <Link to="/closet/jiyeon"><li>지연의 옷장</li></Link>
            <Link to="/closet/sena"><li>세나의 옷장</li></Link>
            <Link to="/ranking"><li>랭킹으로 이동</li></Link>
        </ul>
        </>
    )
}
export default Main;