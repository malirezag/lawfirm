import useDeleteLawyer from "../features/lawyers/useDeleteLawyer";

function ConfirmDelete({ onCloseModal, onConfirm }) {
  const { isPending } = useDeleteLawyer();

  return (
    <div className="px-5 text-lg flex flex-col gap-10 justify-center ">
      <p>
        بعداز حذف امکان بازگرداندن وجود ندارد.از حذف این مورد اطمینان دارید؟
      </p>
      <div className="flex gap-4">
        <button
          disabled={isPending}
          onClick={onConfirm}
          className="px-5 py-2 bg-red-600 text-white rounded-md cursor-pointer"
        >
          {isPending ? "درحال حذف" : "تایید"}
        </button>
        <button
          disabled={isPending}
          className="px-5 py-2 border border-grey-1 text-grey-1 rounded-md cursor-pointer"
          onClick={() => onCloseModal()}
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
