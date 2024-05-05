import React from 'react';

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
                    setModalDisplay(false) // Close the modal
                }
            }}
        >
            <div
                style={{
                    background: 'white',
                    width: '70%',
                    height: '40%',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: '10',
                    padding: '10px',
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
                <div>
                    <div>
                        Title
                    </div>
                    <div>
                        <table border={2}>
                            <tbody>
                                <tr>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                    <td>
                                        Yeah
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal;