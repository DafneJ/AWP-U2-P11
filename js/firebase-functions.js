import {
  collection,
  query,
  getDocs,
  getFirestore,
  limit,
  addDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
import { app } from "/AWP-U2-P11/js/firebase.js";

const db = getFirestore(app);
const modal = document.getElementById("exampleModal");
const exampleModalLabel = document.getElementById("exampleModalLabel")
const bodyModal = document.getElementById("bodyModal");
var cont = 5
var id = ""

const getAllNoteFire = async () => {
  let infoHTML = "";
  const q = query(collection(db, "notas"), limit(cont));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    
      infoHTML += `<div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal" idNote="${doc.id}" textNote="${
        doc.data().text
      }">
        <div class="card-body">
          <div class="row">
            <div class="col-2">
                <img src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png" alt="" class="img-fluid rounded">
            </div>
            <div class="col text-truncate">
            ${doc.data().text}
            </div>
          </div>
        </div>
      </div>
      `;



    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  cont += 5


  return infoHTML;
};

const showModalInformation = (e) => {
  const button = e.relatedTarget;

  const text = button.getAttribute("textNote");
  id = button.getAttribute("idNote");
  exampleModalLabel.innerHTML = text
  bodyModal.innerText = text
};

const createNoteFire = async (note) => {
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(db, "notas"), note);
    return docRef.id;
  } catch (error) {
    console.log(error);
    return "no-create";
  }
};

const updateNote = async () =>{

  try {
    const q = doc(db,"notas",id)
    const a = await updateDoc(q, {"text": bodyModal.value})
  } catch (error) {
    console.log(error);
  }

}

modal.addEventListener("show.bs.modal", showModalInformation);

export { getAllNoteFire, createNoteFire, updateNote};
