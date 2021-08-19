import React , {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/AddMovie.css'
 



const AddMovie =({addMovie}) => {


 const [modal, setModal] = useState(false);

  
  const [poster,setPoster] = useState('')
  const [title,setTitle] = useState('')
  const [type,setType] = useState('')
  const [year,setYear] = useState('')
  const [description,setDescription] = useState('')
  const [rate,setRate] = useState('0')

  const handelSubmit =() => {
    let newMovie = {
    poster,
    title,
    type,
    year,
    description,
    rate
  };
    addMovie(newMovie)
    setModal(false)
    setPoster('')
    setTitle('')
    setType('')
    setDescription('')
    setRate('0')
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  id="myBtn" color="danger" onClick={toggle}>+</Button>
      <Modal id="myModal" isOpen={modal} toggle={toggle} className="modal1" >
        <ModalHeader toggle={toggle} className='add-movie'>
          <h1 className='title'>Add A Movie</h1>
          </ModalHeader>
        <ModalBody className="modal-body">
          <form className="modal-content">
              <label className='label'>Movie title</label>
              <input className='input' type = "text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
               
              <label className='label'>Movie type</label>
              <input className='input' type = "text" name="type" value={type} onChange={(e) => setType(e.target.value)}></input>

              <label className='label'>Movie release date</label>
              <input className='input' type = "text" name="date" value={year} onChange={(e) => setYear(e.target.value)}></input>
             
              <label className='label'>Movie poster</label>
              <input className='input'  type = "url" name="poster" value={poster} onChange={(e) => setPoster(e.target.value)} ></input>
              <label className='label'>Movie description</label>
              <input className='input' type = "text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
              <label className='label'>Movie Rate</label>
              
              <input className='input' type = "number" name="rate" value={rate} onChange={(e) => setRate(e.target.value)} ></input>
          </form>
        </ModalBody>
        <ModalFooter className='footer'>
          <Button  className="close" color="primary" onClick={handelSubmit}>Submit</Button>
          <Button  className="close" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>

    
    )
}


export default AddMovie