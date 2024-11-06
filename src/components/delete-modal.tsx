import Modal from "./modal";

type DeleteModalProps = {
  deleteRecord: () => void;
  modalId: string;
};
const DeleteModal = ({ deleteRecord, modalId }: DeleteModalProps) => {
  return (
    <Modal modalId={modalId}>
      <div>
        <p className="dark:text-black text-xl text-center">
          Are you sure you want to delete this record?
        </p>
        <div className="w-[45%] md:w-[30%] mx-auto my-5">
          <button
            className="bg-red-500 text-white px-5 py-3 mr-2 rounded-md"
            onClick={deleteRecord}
          >
            Yes
          </button>
          <button className="bg-green-500 text-white px-5 py-3 rounded-md">
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
