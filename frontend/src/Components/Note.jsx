import React, { useContext, useState, useEffect, useRef } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import noteContext from "../Context/notecontext";
import "./notebookpage.css"
const Note = () => {
  const [enote, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const context = useContext(noteContext);
  const { notes, editnote,newclass,setnewclass } = context;

  const handelclick = (e) => {
    e.preventDefault();
    editnote(enote);
    setnewclass(false)

  }

  const onchange = (e) => {
    setnote({ ...enote, [e.target.name]: e.target.value })
  }
  const { getnote } = context;
  useEffect(() => {
    getnote();
  }, [])
  const ref = useRef(null)
  const updatenote = (currentnote) => {
    ref.current.click();
    setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })

  }
  return (<>

    <Addnote />
    <button  className={`hidden `}    ref={ref} type="submit ">submit</button>
       <div id="modal"  className={`${newclass?"modalcontainer": "newheight"}  over`} >
        <div className="modalcontainer overflow-hidden">
      <div className="note">
        <a  className="button remove"></a>
        <div className="note_cnt">'
          <textarea className="title" type="text" onChange={onchange} value={enote.etitle} required minLength={5} name='etitle'  placeholder="Enter note title"></textarea>
          <textarea className="cnt"  type="text" onChange={onchange} value={enote.edescription} required minLength={5} name="edescription" placeholder="Enter note description here"></textarea>
        </div>
        <button  onClick={handelclick} className="button-91" role="button">submit</button>
      </div>
    </div> 
       </div>
    <div className="grid lg:grid-cols-5  sm:grid-cols-3 grid-cols-2  gap-6">
      {notes.length === 0 && <div className="nonnote  ">no notes</div>}
      {notes.map && notes.map((note1) => {
        return (
          <div className="gap-4">
            <Noteitem note1={note1}  updatenote={updatenote} key={note1.id} />
          </div>
        );
      })}
    </div></>

  );
};

export default Note;
