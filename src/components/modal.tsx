import { ReactNode } from "react";

const Modal = ({
  children,
  modalId,
}: {
  children: ReactNode;
  modalId: string;
}) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          {children}
        </form>
      </div>
    </dialog>
  );
};

export default Modal;

export const showModal = (modalId: string) => {
  (document?.getElementById(modalId) as any)?.showModal();
};
