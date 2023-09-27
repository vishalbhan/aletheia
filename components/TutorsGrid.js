import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { urlFor } from "utils/urlFor";

export default function TutorsGrid({ tutorsContent }) {
  const modalRef = useRef()

  return (
    <>
    <div className="tutors-grid fade-up" data-scroll>
      {tutorsContent.map((tutor, index) => (
        <div className="tutors-grid-item" key={`tutor-${index}`}>
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

    <dialog ref={modalRef}>

    </dialog>
    </>
  );
}
