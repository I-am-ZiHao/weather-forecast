import { ReactNode } from "react";
import { Title2 } from "./typography";

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
          <div className="w-full flex justify-between p-2">
            {/* title */}
            <div className="">
              <Title2
                content={title ?? ""}
                className="text-white font-medium"
              />
            </div>

            {/* close button */}
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-[50%] p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <svg
                aria-hidden="true"
                className="sm:w-6 sm:h-6 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
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
