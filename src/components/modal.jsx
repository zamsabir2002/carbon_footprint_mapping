import React from 'react';
import DataTable from './datatable';
import '../styles/modal.css'

const Modal = ({ modalDisplay, setModalDisplay }) => {
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
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        <h2>Project Details</h2>
                        <div>
                            <b>Project Name:</b> ASF Towers
                        </div>
                        <div>
                            <b>Site Location:</b> Sector 35 A, Gulzar-e-Hijri, Scheme 33
                        </div>
                        <div>
                            <b>No of story of Project:</b> G+20
                        </div>

                    </div>
                    <div>
                        <DataTable />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal;