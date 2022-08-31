import { useParams,Link,useNavigate } from 'react-router-dom';
import React, {useState,useRef,useCallback } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import Modal from "../modal"

const Container = styled.div`

`;
function ClosetAdd(){   
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal>
    </React.Fragment>
  );
}

export default ClosetAdd;