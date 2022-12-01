import {getAllNoteFire, createNoteFire, updateNote} from '/js/firebase-functions.js'
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/AWP-U2-P11/sw.js')
 }


const btnGuardar = document.getElementById("enviar")
const btnMasInfo = document.getElementById("masInfo")
const updateData = document.getElementById("updateData")
const info = document.getElementById("info")

const getAllNotes = async () => {
     const data = await getAllNoteFire()
    info.innerHTML = data
    
}

const saveNote = async () => {

    const note = {
        text: '',
        created_at: new Date()
    }

    const txtNote = document.getElementById("nota")
    note.text = txtNote.value
    const generatedId = await createNoteFire(note) 

    if(generatedId !== 'no-create'){
        txtNote.value = ''
        getAllNotes()
    }else{
        alert('Error al crear la nota')
    }


}


const updateNota = () =>{
        updateNote()
        getAllNotes()
}

btnGuardar.addEventListener('click', saveNote)
btnMasInfo.addEventListener('click', getAllNotes)
updateData.addEventListener('click', updateNota)

getAllNotes()