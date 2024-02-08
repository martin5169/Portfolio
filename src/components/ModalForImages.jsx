import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      centered  
     >
      <Modal.Header>
      <Button onClick={props.onHide}>X</Button>
        <Modal.Title style={{ display:'flex',fontSize:"25px",justifyContent:'center', padding:20 }}>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{ display:'flex', alignItems:'center', padding:20 }}>
    {props.images.map((image, index) => (
      <img key={index} src={image} style={{ maxWidth: 195 , margin:10 }} alt={`Image ${index + 1}`} />
    ))}
  </div>
      </Modal.Body>
      <Modal.Footer>
     
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;