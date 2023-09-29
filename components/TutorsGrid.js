import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { urlFor } from "utils/urlFor";

export default function TutorsGrid({ tutorsContent }) {
  const [selectedTutor, setSelectedTutor] = useState(null)
  const modalRef = useRef()

  const showModal = (tutor) => {
    setSelectedTutor(tutor)
    modalRef.current.showModal()
  }

  return (
    <>
    <div className="tutors-grid fade-up" data-scroll>
      {tutorsContent.map((tutor, index) => (
        <div className="tutors-grid-item" key={`tutor-${index}`} onClick={() => showModal(tutor)}>
          <div className="tutors-grid-inner">
            <div className="tutor-image">
              <Image
                src={urlFor(tutor.image).url()}
                width={272}
                height={350}
                objectFit="cover"
                priority
              />
            </div>
            <div className="tutor-details">
              <div className="tutor-name text-white">{tutor.name}</div>
              <div className="tutor-qualification">
                <em>{tutor.qualification}</em>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <dialog className="tutors-modal" ref={modalRef}>
      <div className="modal-content">
        <div className="modal-header">
          <a className="modal-close" onClick={() => modalRef.current.close()}>
            &times;
          </a>
        </div>
        <div>
          {selectedTutor && (
            <>
              <div className="modal-tutor-image tutor-image">
                <Image
                  src={urlFor(selectedTutor.image).url()}
                  width={272}
                  height={350}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="tutor-details">
                <div className="tutor-name">{selectedTutor.name}</div>
                <div className="tutor-qualification">
                  <em>{selectedTutor.qualification}</em>
                </div>
                <p>{selectedTutor.about}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
    </>
  );
}


