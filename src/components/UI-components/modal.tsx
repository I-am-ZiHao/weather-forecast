import { ReactNode } from "react";
import { Title2 } from "./typography";
import CloseButton from "./close-button";

interface ModalProps {
  id?: string;
  title?: string;
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal = ({ id, title, show, onClose, children }: ModalProps) => {
  return (
    <>
      {/* modal overlay */}
      <div
        id={id || "weatherDetailModal"}
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          show ? "block" : "hidden"
        } fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-black bg-opacity-80 animate-fadeIn`}
        onClick={onClose}
      >
        {/* modal content */}
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:max-w-[80%] max-w-[90%] h-full max-h-[80%] p-3 bg-gray-700 opacity-100 shadow-2xl rounded-lg flex flex-col"
          // prevent the modal from being closed
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="w-full flex justify-between items-center p-2">
            {/* title */}
            <Title2
              content={title ?? ""}
              className="text-white font-medium sm:text-2xl text-xl"
            />

            {/* close button */}
            <CloseButton onClick={onClose} />
          </div>

          {/* content */}
          <div className="w-full max-h-[calc(100%-48px)] grow">{children}</div>
        </div>
      </div>
    </>
  );
};

Modal.displayName = "Modal";

export default Modal;
