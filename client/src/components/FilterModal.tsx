import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal: React.FC<ModalProps> = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className="modal-container">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Example Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a modal example.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default FilterModal;
