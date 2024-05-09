import React from 'react';
// import DataTable from './datatable';
import '../styles/modal.css'

const Modal = ({ modalDisplay, setModalDisplay, DataTable }) => {
    return (
        modalDisplay && <div
            style={{
                display: modalDisplay ? 'flex' : 'none',
            }}

            className='modal-overlay'

            onClick={(e) => {
                if (e.target.classList.contains('modal-overlay')) {
                    setModalDisplay(false)
                }
            }}
        >
            <div
                style={{}}
                id='modal'
            >
                {/* Closing button and other header information */}
                <div
                    className='cancel_button'
                    onClick={() => {
                        setModalDisplay(false)
                    }}
                >X</div>

                {/* THE DATA */}
                <div
                    className='modal_content'
                >
                    <>
                        {DataTable}
                    </>
                </div>

            </div>
        </div>
    );
}

export default Modal;