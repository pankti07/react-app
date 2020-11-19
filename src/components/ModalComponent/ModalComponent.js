const ModalComponent = ({
    count,
    hideModal
}) => {      
        return (
            <div>
            <div className="backdrop"></div>
            <div className="modal-inner">Modal is clicked {count} number of times
            <span onClick={hideModal}>X</span>
            </div>
            </div>
        );
}
export default ModalComponent;