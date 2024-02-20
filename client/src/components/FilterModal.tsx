import { ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FullTimeFilter from "./FullTimeFilter";
import LocationFilter from "./LocationFilter";

import "../styles/FilterModal.css";

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  locations: string[];
  handleLocationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedLocation: string;
  handleFullTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fullTimeOnly: boolean;
}

const FilterModal: React.FC<ModalProps> = ({
  show,
  setShow,
  locations,
  handleLocationChange,
  selectedLocation,
  handleFullTimeChange,
  fullTimeOnly,
}) => {
  const handleClose = () => setShow(false);

  return (
    <div>
      {show ? (
        <div className="modal-overlay">
          <Modal show={show} onHide={handleClose} className="modal-container">
            <div id="filter-modal">
              <LocationFilter
                locations={locations}
                handleLocationChange={handleLocationChange}
                selectedLocation={selectedLocation}
              />
              <FullTimeFilter
                handleFullTimeChange={handleFullTimeChange}
                fullTimeOnly={fullTimeOnly}
              />
              <Button
                variant="secondary"
                onClick={handleClose}
                className="dark-button"
                style={{ width: "100%" }}
              >
                Close
              </Button>
            </div>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterModal;
