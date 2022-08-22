import { useParams,Link } from 'react-router-dom';
import styled from "styled-components";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";

const Img = styled.img`
    min-width:10vw;
    min-height: 25vh;
    max-width: 10vw;
    max-height: 25vh;
`;
const Container1 = styled.div`
    margin-top:2vh;
    border: 0.05vw solid black;
    display: flex;
    width:17.5%;
    margin-left:10vw;
    align-items: center;
    padding-left: 1vw;
    padding-bottom: 1vh;
    padding-right:1vw;
`;
const ContainerImg = styled.div`
    margin-top: 3vh;
    width:10vw;
`;
const ContainerProfile = styled.div`
`;
const Mycodi = styled.div`
    height: 100%;
    margin-left:10vw;
    width:80%;
`;
const Mytop = styled(Mycodi)`
`
const Mypants = styled(Mycodi)`
`
const ContainerMycodi = styled.div`
   
`;
const Infromation = styled.div`
    text-align: left;
`;
const Profile = styled.div`
    font-weight: bold;
    margin : 1.5vh;
    margin-top:1vh;
    padding-left: 0;
    padding-right: 0;
    border:0.07vw solid black;
    text-align: center;
    border-radius: 3vh;
    width:6vw;
    font-size:1vw;
`;
const Sns = styled.div`
    font-weight: bold;
    margin : 1.5vh;
    margin-top:1vh;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    border-radius: 3vh;
`;
const H1 = styled.h1`
    margin-left:10vw;
    margin-bottom:1vh;
`;
const Wrap = styled.div`
    width:80vw;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 0.1vw;
        padding: 1vw;
        margin-left:3vw;  
        max-width: 70%;
        height:30vh;
        object-fit: contain;
    }
`;
  
  function Closet(){
 
    const userinfo={
            nakhyeon:{
                name:'권낙현',
                nickname:'김서기',
                kg:'67kg',
                height:'186cm',
                style:'캐주얼',
                img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
                codi:[  
                
                    "https://i.ibb.co/kKMCQQP/image.jpg",
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
            name:'권낙현',
            nickname:'김서기',
            kg:'67kg',
            height:'186cm',
            style:'캐주얼',
            img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
            codi:[  
               
                 "https://i.ibb.co/kKMCQQP/image.jpg",
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
        sena:{
            name:'권낙현',
            nickname:'김서기',
            kg:'67kg',
            height:'186cm',
            style:'캐주얼',
            img:"https://user-images.githubusercontent.com/44117975/183907930-7f851b6c-ff86-4638-81fc-e2fb6996d5eb.png",
            codi:[  
               
                 "https://i.ibb.co/kKMCQQP/image.jpg",
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
      
    return(
        <div>
            {profile? (
            <div>      
            <div style={{display:"flex",marginTop:"1vh"}}>
            <Container1>
                <ContainerImg>
                <Img src={profile.img} alt="profile"/>
                </ContainerImg>
                <ContainerProfile>
                    <Infromation>
                        <Profile>{profile.nickname}</Profile>
                        <Profile>{profile.kg}</Profile>
                        <Profile>{profile.height}</Profile>
                        <Profile>{profile.style}</Profile>
                        <div style={{display:"flex"}}>
                        <Sns><img src={"https://cdn-icons-png.flaticon.com/512/1384/1384063.png"} style={{width:"2vw"}} alt="instagram"/></Sns>
                        <Sns><img src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"} style={{width:"2vw"}} alt="youtube"/></Sns>
                        </div>
                    </Infromation>
                </ContainerProfile>
            </Container1>
            
            <div style={{width:"40%"}}></div>
                
            </div>

            <ContainerMycodi>
                <H1>Cody</H1>
                <Mycodi>
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
                </Mycodi>
            </ContainerMycodi>

            <ContainerMycodi>
                <H1>Top</H1>
                <Mytop>
                <Wrap>
                    <Slider {...settings}>
                    {profile.top.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="top" />
                            </div>
                        );
                    })}
                    </Slider>
                            
                </Wrap>
                </Mytop>
            </ContainerMycodi>    

            <ContainerMycodi>
                <H1>Bottom</H1>
                <Mypants>
                <Wrap>
                    <Slider {...settings}>
                    {profile.pants.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="pants" />
                            </div>
                        );
                    })}
                    </Slider>    
                </Wrap>
                </Mypants>
            </ContainerMycodi> 

            <ContainerMycodi>
                <H1>Shoes</H1>
                <Mypants>
                <Wrap>
                    <Slider {...settings}>
                    {profile.shoes.map((item)=>{
                        return (
                            <div>
                                <img src={item} alt="pants" />
                            </div>
                        );
                    })}
                    </Slider>
                            
                </Wrap>
                </Mypants>
            </ContainerMycodi>        
            </div>
            ):
            (<p>존재하지 않습니다</p>)
            
            }
        </div>
    )
}
export default Closet;