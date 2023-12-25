import React, { useState } from 'react'
import noteContext from '../Context/notecontext'
import "./notebookpage.css"
import"./button.css"
import { useContext } from 'react'
const Addnote = () => {
    const [enote, setnote] = useState({ title: "", description: "", tag: "" })
    const context = useContext(noteContext);
    const { addnote,setnotes, notes } = context;
    const [newclass,setnewclass]=useState(false)
    const handelclick = async(e) => {
        e.preventDefault()
        await addnote(enote.title, enote.tag, enote.description)
        setnewclass(false)
    }
    const onchange = (e) => {
        setnote({ ...enote, [e.target.name]: e.target.value })
    }

    return (
            <>
      <button onClick={() => setnewclass(true)} className="button-92" type="submit">+</button>
            <div id="modal" className={`${newclass ? "modalcontainer" : "newheight"}`} >
                <div className="modalcontainer overflow-hidden">
                   
                    <div className="note">
                        <button  type='submit' onClick={()=>{setnewclass(false)}} className="crossbutton "> &#10007;</button>
                        <div className="note_cnt">
                        <textarea className="title" type="text" onChange={onchange}  name="description"  required minLength={5}  placeholder="Enter note tag"></textarea>
                            <textarea className="title" type="text" onChange={onchange}  name='title' required minLength={5}  placeholder="Enter note title"></textarea>
                            <textarea className="cnt" type="text" onChange={onchange}  required minLength={5} name='tag'  placeholder="Enter note description here"></textarea>
                        </div>
                        <button onClick={handelclick} className='button-91' role="button">addnote</button>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Addnote



// <div className="">
// <form>
//     <div className="mb-3">
//         <label htmlFor="title" className="form-label">add a title</label>
//         <input type="text" onChange={onchange} name='title' className="form-control" id="title" />
//     </div>
//     <div className="mb-3 form-check">
//         <label className="form-check-label" htmlFor="description">add a description</label>
//         <input type="text" onChange={onchange} name="description" className="form-control" id="description" />
//     </div>
//     <div className="mb-3 form-check">
//         <label className="form-check-label" htmlFor="tag">add a tag</label>
//         <input type="text" onChange={onchange} name="tag" className="form-control" id="tag" />
//     </div>
//     <button type="submit" className="btn btn-primary" onClick={handelclick}>Submit</button>
// </form>
// </div>