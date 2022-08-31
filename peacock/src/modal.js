import React from 'react';
import "./modal.css"

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, fix, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open===1?(
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}
          </main>
          <footer>
          <button style={{marginRight:"0.5vw"}}className="edit" onClick={fix}>
              수정
            </button>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : open===2?(<section>
        <header>
          {header}
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>{props.children}
        </main>
        <footer>
        <button style={{marginRight:"0.5vw"}}className="edit" onClick={close}>
            완료
          </button>
          <button className="close" onClick={close}>
            닫기
          </button>
        </footer>
      </section>):null}
    </div>
  );
};
export default Modal;