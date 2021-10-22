import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types';
import "./Modal.scss"


const Modal = props => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(props.active)
    },[props.active])

    return (
        <div className={`modal ${active ? 'active' : ''}`} id={props.id}>
            {props.children}
        </div>
    )
}



export const ModalContent = props => {
    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }
    return (
        <div ref={contentRef} className='modal__content'>
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}




ModalContent.propTypes = {
    onClose: PropTypes.func,

}
Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
}


export default Modal;