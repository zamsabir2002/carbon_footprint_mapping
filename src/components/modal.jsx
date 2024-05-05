import React from 'react';
import DataTable from './datatable';

const Modal = ({ modalDisplay, setModalDisplay }) => {
    return (
        modalDisplay && <div
            style={{
                display: modalDisplay ? 'flex' : 'none',
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100dvw',
                height: '100dvh',
                background: 'rgb(0,0,0,0.5)',
                zIndex: '2',
                alignItems: 'center',
                justifyContent: 'center',
            }}

            className='modal-overlay'

            onClick={(e) => {
                if (e.target.classList.contains('modal-overlay')) {
                    setModalDisplay(false)
                }
            }}
        >
            <div
                style={{
                    background: 'white',
                    minWidth: '70%',
                    minHeight: '40%',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: '10',
                    padding: '10px',
                    margin: '0px 20px',

                }}
            >
                {/* Closing button and other header information */}
                <div
                    style={{
                        alignSelf: 'flex-end',
                        paddingRight: '10px',
                        cursor: 'pointer',
                        color: 'red',
                        fontWeight: '700',
                    }}
                    onClick={() => {
                        setModalDisplay(false)
                    }}
                >X</div>

                {/* THE DATA */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        width: '100%',
                    }}
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