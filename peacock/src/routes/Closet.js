import { useParams,Link } from 'react-router-dom';
import styled from "styled-components";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";

const Img = styled.img`
    width:15vw;
    height:35vh;
`;
const Cointainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    text-align: center;
`
const CointainerMyCodi = styled(Cointainer)`
    height: 30vh;
`
const CointainerProfile = styled(Cointainer)`
    height:20vh;
`
const CointainerWrapper = styled(Cointainer)`
    height:40vh;
`
const Infromation = styled.div`
    text-align: center;
`;
const Profile = styled.div`
    font-size: 20px;
    font-weight: bold;
    border: 1px solid black;
    padding: 1vh 4vw 1vh 4vw;
    margin : 1.5vh;
    margin-top:0;
`;
const H1 = styled.h1`
    margin-left:10vw;
    margin-bottom: 0;
`;
const Wrap = styled.div`
    width: 80vw;
    height:30vh;
    justify-content: center;
    align-items: center;
    img{
        width:10vw;
        border-radius: 20px;
        padding: 10px;
        margin-left:70px;   
    }
    
    `;
    const Wrap1 = styled.div`
    width: 38vw;
    height: 30vh;
    justify-content: center;
    align-items: center;
    margin-right: 2vw;
    img{
        width:10vw;
        border-radius: 20px;
        padding: 10px;
        margin : 0px auto;
        height:100%;
    }
    `;
    const Wrap2 = styled.div`
    width: 38vw;
    height: 30vh;
    justify-content: right;
    align-items: right;
    margin-left:2vw;
    img{
        width:10vw;
        border-radius: 20px;
        padding: 10px;
        margin : 0px auto;
        height:100%;
    }
    `;
  function Closet(){
    const userinfo={
        nakhyeon:{
            name:'권낙현',
            nickname:'권정열의 옷장',
            kg:'67kg',
            height:'177cm',
            img:"https://file.mk.co.kr/meet/neds/2018/06/image_readtop_2018_396364_15297279913362420.jpg",
            codi:[
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d663f995e7d.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d64c8610f87.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d65fa7e3c11.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d74cf0e1bf5.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d75473f3e80.jpg",
                "https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_62d762e15fb95.jpg",
            ],
            top:["https://image.msscdn.net/images/goods_img/20200826/1563621/1563621_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_4_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210821/2077010/2077010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220315/2419493/2419493_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220204/2340647/2340647_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220525/2582457/2582457_1_220.jpg"],
            pants:["https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210428/1924271/1924271_9_220.jpg",
                "https://image.msscdn.net/images/goods_img/20200217/1308010/1308010_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20210510/1943583/1943583_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220411/2479826/2479826_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220401/2461249/2461249_21_220.jpg"],    
            shoes:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmc9r9qvTHkG0C_iZaO_mymoGTYxvxZJLelw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSHSjNI5OMHvKtOZe6_X3Um3u5sK2dIuFxA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHnWgJvDsYlRn1vpCvGVRbifSmxhAukFfw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71bo94dg4oeGl4KWrqXLIAeZUfh-0TG1Qg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DiKtryivpcFoF21DcscoTWTb9bn71eEEFA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzk6Zeu0ogha_V6RxX7_GuaUGtqFt2fibjA&usqp=CAU"],
            outer:["https://image.msscdn.net/images/goods_img/20220322/2436884/2436884_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220210/2351272/2351272_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220307/2402186/2402186_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220607/2601275/2601275_2_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220308/2404216/2404216_1_220.jpg",
                "https://image.msscdn.net/images/goods_img/20220325/2446023/2446023_1_220.jpg"],
        },
        jiyeon:{
            name:'심지연',
            nickname:'백엔드 개발자',
            kg:'50kg',
            height:'157cm',
            img:"https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg",
            top:["https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg",
            "https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/19/17/45/woman-1840538__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/08/34/woman-1868459__340.jpg",
            "https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260__340.jpg",
            "https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597__340.png"]
            
        },
        sena:{
            name:'장세나',
            nickname:'AI 개발자',
            kg:'51kg',
            height:'167cm',
            img:"https://cdn.pixabay.com/photo/2017/05/22/07/20/woman-2333326__340.jpg",
            top:["https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg",
            "https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/19/17/45/woman-1840538__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/08/34/woman-1868459__340.jpg",
            "https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260__340.jpg",
            "https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597__340.png"]
        }
    };
    const params = useParams();
    const profile = userinfo[params.username];
    const settings = {
        dots: true,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 5, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
      };
      const settings1 = {
        dots: true,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 3, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
      };
    return(
        <div >
            {profile? (
            <div 
            // style={{
            //     backgroundImage:`url("https://media.istockphoto.com/photos/modern-luxurious-walkin-closet-interior-picture-id1327481911?b=1&k=20&m=1327481911&s=170667a&w=0&h=GJMu9Tq2BzKNTRxwerGXvbUN-btatf0qyOM6R-EcGyM=")`,
            //     backgroundRepeat:'no-repeat',
            //     }
            //     }
            >      
            <Cointainer>
             <Img src={profile.img} alt="profile"/>
            </Cointainer>
            <CointainerProfile>
                <Infromation>
                    <Profile>{profile.nickname}</Profile>
                    <Profile>{profile.kg}</Profile>
                    <Profile>{profile.height}</Profile>
                </Infromation>
            </CointainerProfile>
            <div className='codi' style={{height:"35vh"}}>
            <H1>내코디</H1>
            <CointainerMyCodi>
            <Wrap>
                <Slider {...settings}>
                {profile.codi.map((item)=>{
                    return (
                        <div>
                            <img src={item} alt="codi" />
                        </div>
                    );
                })}
                </Slider>
                        
            </Wrap>
            </CointainerMyCodi>
            </div>
            <CointainerWrapper>
                <Wrap1>
                <h1>상의</h1>
                <Slider {...settings1}>
                {profile.top.map((item)=>{
                    return (
                        <Link to={"/"}>
                        <div>
                            <img src={item} alt="top" />
                        </div>
                        </Link>
                    );
                })}
                </Slider>
                </Wrap1>

                <Wrap2>
                <h1>하의</h1>
                <Slider {...settings1}>
                {profile.pants.map((item)=>{
                    return (
                        <div>
                            <img src={item} alt="pants" />
                        </div>
                    );
                })}
                </Slider>   
                </Wrap2>
                
            </CointainerWrapper>
            <CointainerWrapper>
                <Wrap1>
                <h1>신발</h1>
                <Slider {...settings1}>
                {profile.shoes.map((item)=>{
                    return (
                        <div>
                            <img src={item} alt="shoes" />
                        </div>
                    );
                })}
                </Slider>
                </Wrap1>
                <Wrap2>
                <h1>아우터</h1>   
                <Slider {...settings1}>
                {profile.outer.map((item)=>{
                    return (
                        <div>
                            <img src={item} alt="outer" />
                        </div>
                    );
                })}
                </Slider>   
                </Wrap2>
                
            </CointainerWrapper>
            </div>
            ):
            (<p>존재하지 않습니다</p>)
            
            }
        </div>
    )
}
export default Closet;