import React, { useState } from "react";
import "./section.css";
// import { NAMES } from "../helper/names";
// import Names from "../helper/names";
import SectionDuplicate from "./SectionDuplicate";

const Section = () => {
  const [NAMES, setNames] = useState([
    "Profile Summary",
    "Academic and Cocurricular Achievements",
    "Summer Internship Experience",
    "Work Experience",
    "Projects",
    "Certifications",
    "Leadership Positions",
    "Extracurricular",
    "Education",
  ]);

  // const [sectionName, setSectionName] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [displaySection, setDisplaySecion] = useState(false);
  const [NameChange, setNameChange] = useState('')

  const handleNameChange = (name) => {
    setNameChange(name)
  }

  const handleOnChange = (e, index) => {
    // setSectionName(e.target.value);
    const _names = [...NAMES];
    // _names[index] = e.target.value
    _names.splice(index, 1, e.target.value);

    setNames(_names);
  };

  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  const handleSort = () => {
    let _names = [...NAMES];

    const draggedItemContent = _names.splice(dragItem.current, 1)[0];
    console.log("+++++++++++++++++++++:", draggedItemContent);

    _names.splice(dragOverItem.current, 0, draggedItemContent);
    console.log("_names:", _names);
    dragItem.current = null;
    dragOverItem.current = null;

    setNames([..._names]);
    console.log("NAMES:", NAMES);
  };
  // const onDragStart = (e, index) =>{
  //     console.log("drag started", index)
  // }

  // const onDragEnter = (e, index) =>{
  //     console.log("drag enter", index)
  // }

  return (
    <>
      {NAMES.map((name, index) => {
        return (
          // <div
          //   className="section-container"
          //   class="section-container"
          //   draggable="true"
          //   onDragStart={(e) => (dragItem.current = index)}
          //   onDragEnter={(e) => (dragOverItem.current = index)}
          //   onDragEnd={handleSort}
          //   key={index}
          // >
          //   <div className="first-three">
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       width="16"
          //       height="16"
          //       fill="currentColor"
          //       class="bi bi-border-width"
          //       viewBox="0 0 16 16"
          //     >
          //       <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
          //     </svg>
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       width="16"
          //       height="16"
          //       fill="currentColor"
          //       class="bi bi-exclamation-circle"
          //       viewBox="0 0 16 16"
          //     >
          //       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          //       <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          //     </svg>
          //   </div>
          //   <span className="name">
          //     <input
          //       className="input1"
          //       value={name}
          //       disabled={!isEdit}
          //       onChange={(e) => handleOnChange(e)}
          //     ></input>
          //   </span>
          //   <div className="next-three">
          //     <button className="pencil" onClick={() => setIsEdit(true)}>
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         width="16"
          //         height="16"
          //         fill="currentColor"
          //         class="bi bi-pencil"
          //         viewBox="0 0 16 16"
          //       >
          //         <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          //       </svg>
          //     </button>
          //     <button>
          //     <label class="switch">
          //       <input type="checkbox" />
          //       <span class="slider round"></span>
          //     </label>
          //     </button>
          //   </div>
          // </div>
          <div className="section-container" draggable="true"
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          key={index}>
          <SectionDuplicate name={name}/>
          </div>
        );
      })}
    </>
  );
};

// const draggables = document.querySelectorAll(".section-container");
// const containers = document.querySelectorAll(".section-container");

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("dragging");
//   });

//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// })

// containers.forEach(container =>{
//     container.addEventListener('dragover', e=>{
//         e.preventDefault()
//         const draggable = document.querySelector('.section-container')
//         container.appendChild(draggable)
//     })
// });

export default Section;
