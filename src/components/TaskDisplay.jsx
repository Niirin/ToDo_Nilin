import { useState } from "react";
import Modal from "react-overlays/Modal";

function TaskDisplay({task, onDelete, onEdit}) {
    const [showModal, setshowModal] = useState(false);

    const handleOff = () => setshowModal(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;
    const handleDeleteClick= () =>{
        handleOff();
        onDelete(task.id);
    };

    const [showEdit, setShowEdit] = useState(false);
    const [showDisplayIcons, setShowDisplayIcons]= useState(true);

    const handleEditClick= () => {
        setShowEdit(!showEdit);
        setShowDisplayIcons(!showDisplayIcons);
    };
    
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
        setShowDisplayIcons(true);
    }

    let display = <span>{task.title}</span>;
    if (showEdit){
        display = <TaskEdit onSubmit={handleSubmit} task={task} />;
    }

    return <section className='container'>
            <div className='taskList'>
            <ul>
                <li className='taskDis'>
                    <div className='taskCheck'>
                        <Checkbox checked={false} />
                        <span>{display}</span>
                    </div>
                    {showDisplayIcons &&(
                        <div className="icons">
                            <img onClick={handleEditClick} src='./src/assets/edit.svg' alt="edit icon" />
                            <img onClick={() => setshowModal(true)} src='./src/assets/delete_icon.png' alt="delete icon" />
                        </div>
                    )}

                </li>
            </ul>
            </div>
            <Modal 
                className="modal"
                show={showModal}
                onHide={handleOff}
                renderBackdrop={renderBackdrop}>
                    <div className="delete-overlay">
                        <div className="confirm-cont">
                            <div className="confirm-msg">
                                <p>Confirm Delete?</p>
                            </div>
                            <div className="confirm-btn">
                                <button className="yes-btn" onClick={handleDeleteClick}>Yes</button>
                                <button className="no-btn" onClick={handleOff}>No</button>
                            </div>
                        </div>
                    </div>
            </Modal>
        </section>
}
export default TaskDisplay;