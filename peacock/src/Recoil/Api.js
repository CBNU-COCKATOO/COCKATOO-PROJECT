const URL =" http://43.200.68.165:3000";

//회원가입
export const postSignup = async (data) => {
    return fetch(`${URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json());
}

//이미지 등록
export const imageUpload = async (data) => {
  return fetch(`${URL}/imageUpload`, {
    method: "POST",
    body:data
  })
    .then((response) => response.json())
}

//코디 등록
export const setCody = async (data) => {
  return fetch(`${URL}/cody`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
}

//옷 등록
export const setCloth = async (data) => {
  return fetch(`${URL}/clothes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
}

//팔로잉 하기 
export const setFollowingCloset = async (data) => {
  return fetch(`${URL}/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
}

//도감 저장  
export const storeDictionary = async (data) => {
  return fetch(`${URL}/dictionary/${data.u_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  })
    .then((response) => response.json())
}

//이메일 인증  
export const postEmail = async (data) => {
  return fetch(`${URL}/emailauth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
}

//이메일 인증  
export const getEmail = async (data) => {
  console.log(data)
  return fetch(`${URL}/emailauthcode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
}


//검색 결과 불러오기 
export const search = async (data) => {
  console.log(data)
  return fetch(`${URL}/search`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(data),
 })
  .then(response => response.json())
}

//비밀번호 변경 
export const changePw = async (data)=> {
  return fetch(`${URL}/user/pwchange/${data.id}`, {
   method: "PUT",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify({"u_pw":data.newPw})
 })
 .then((response) => response.json());
}

// 코디 수정
export const repairCody = async (data) => {
  return fetch(`${URL}/cody/${data.cody_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  })
    .then((response) => response.json())
}

// 옷 수정
export const repairCloth = async (data) => {
  return fetch(`${URL}/clothes/${data.clo_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  })
    .then((response) => response.json())
}

// 스타일 수정 
export const repairStyle = async (data) => {
  console.log(data)
  return fetch(`${URL}/user/stchange/${data.u_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  })
    .then((response) => response.json())
}

//로그인
export const getLogin = async (id, pw) => {
  return fetch(`${URL}/login/${id}/${pw}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

//아이디 중복 확인 
export const getIdSame = async (id) => {
   return fetch(`${URL}/idcheck/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
}

//옷장 불러오기
export const getCloset = async (userId) => {
  return fetch(`${URL}/findcloset/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
}

//랭킹 불러오기 
export const getRanking = async (id) => {
  return fetch(`${URL}/ranking`, {
   method: "GET",
   headers: {
     "Content-Type": "application/json",
   }
 })
}

//팔로잉 하는 옷장 불러오기 
export const getFollowingCloset = async (u_id) => {
  return fetch(`${URL}/followuser/${u_id}`, {
   method: "GET",
   headers: {
     "Content-Type": "application/json",
   }
 })
}

//마이페이지 불러오기
export const getMyPage = async (user_id) => {
  return fetch(`${URL}/mypage/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

//도감 불러오기
export const getDictionary = async (u_id) => {
  return fetch(`${URL}/dictionary/${u_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

//유저의 모든 옷/코디 불러오기
export const getUserCodyCloth = async (u_id) => {
  return fetch(`${URL}/dictionaryimage/${u_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

// 코디 삭제
export const deleteCody = async (data) => {
  return fetch(`${URL}/cody/${data}`, {
    method: "Delete",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
}

// 옷 삭제
export const deleteCloth = async (data) => {
  return fetch(`${URL}/clothes/${data}`, {
    method: "Delete",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
}

// 도감 삭제
export const deleteDictionary = async (data) => {
  return fetch(`${URL}/dictionary/${data.u_id}/${data.d_index}`, {
    method: "Delete",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
}
