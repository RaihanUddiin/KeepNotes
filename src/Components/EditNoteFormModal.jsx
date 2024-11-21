import Modal from './Modal'
import AddNoteForm from './AddNoteForm'
import { noteService } from '../lib/noteService'

function EditNoteFormModal(props) {
    const handleUpdateNote = (note) => noteService.update(note);
    
    // const onClose = () => {
    //     console.log("close from parents!");
    // }
        
  return (
    <Modal onOverlayClose isOpen={props.isOpen} onOpenChange={props.setOpen}>
        <AddNoteForm onCancel={()=>props.setOpen(false)} initialData={props.note} onSubmit={handleUpdateNote}/>
    </Modal>
  )
}

export default EditNoteFormModal