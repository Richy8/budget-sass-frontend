"use client";

import { useEffect, ReactNode, ReactElement, useRef } from "react";
import { createPortal } from "react-dom";
import "./ModalCover.scss";

type ModalCoverType = {
  children: ReactElement | ReactElement[];
  showModal: boolean;
  styles?: string;
  isSideModal?: boolean;
  toggleModal: () => void;
};

type ModalCoverSlotType = {
  name: "header" | "body" | "footer";
  children: ReactNode;
};

// MODAL SLOT COMPONENT
const Slot = ({ children }: ModalCoverSlotType) => <>{children}</>;

const ModalCover = ({
  children,
  showModal,
  styles = "modal-xs",
  isSideModal = false,
  toggleModal,
}: ModalCoverType) => {
  const modalRootPortal = useRef<HTMLElement | null>(null);
  const modalElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    modalRootPortal.current = document.getElementById("modal-root-portal");

    if (!modalRootPortal.current) {
      console.error("Modal root portal not found in the document.");
      return;
    }

    if (!modalElement.current) {
      modalElement.current = document.createElement("div");
    }

    modalRootPortal.current.appendChild(modalElement.current);

    return () => {
      if (modalElement.current && modalRootPortal.current) {
        modalRootPortal.current.removeChild(modalElement.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  // Extract slots
  const sections = (
    Array.isArray(children) ? children : [children]
  ) as ReactElement[];

  const hSlot = sections.find((child) => child.props.name === "header");
  const bSlot = sections.find((child) => child.props.name === "body");
  const fSlot = sections.find((child) => child.props.name === "footer");

  if (!showModal || !modalElement.current || !modalRootPortal.current)
    return null;

  return createPortal(
    <>
      {/* MODAL OVERLAY */}
      <div
        className="modal-overlay"
        role="dialog"
        aria-modal
        onClick={toggleModal}
      ></div>

      {/* MODAL CONTENT */}
      <div
        className={`modal-cover ${
          isSideModal ? "modal-cover-side" : ""
        } ${styles}`}
      >
        <div className="modal-cover-body-wrapper">
          {/* DISMISS BUTTON */}
          <div className="modal-dialog-dismiss" onClick={toggleModal}>
            <div className="relative w-full h-full">
              <div className="modal-dismiss-icon icon-times"></div>
            </div>
          </div>

          {/* MODAL CONTAINER */}
          <div className="modal-container">
            {hSlot?.props.children}
            {bSlot?.props.children}
            {fSlot?.props.children}
          </div>
        </div>
      </div>
    </>,
    modalElement.current
  );
};

ModalCover.Slot = Slot;
export default ModalCover;
