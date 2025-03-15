function EmptyComment() {
  return (
    <p
      className="h-96 overflow-scroll overflow-x-hidden bg-gray-100 w-80 md:w-96 lg:w-xl xl:w-2xl p-6 
    text-grey-1 text-lg flex flex-col gap-2 rounded-md"
    >
      هنوز کامنتی وجود ندارد.{" "}
      <span className="text-sm ">اولین نفر باشید...</span>
    </p>
  );
}

export default EmptyComment;
