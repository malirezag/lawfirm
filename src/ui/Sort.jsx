import { useSearchParams } from "react-router-dom";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className="space-x-4">
      <label htmlFor="select" className="text-gray-300">
        مرتب سازی:
      </label>
      <select
        defaultValue="نام"
        onChange={handleChange}
        className="text-gray-100 w-40 border border-grey-2 rounded-md py-1 "
      >
        <option className="bg-grey-1" value="name">
          نام
        </option>
        <option className="bg-grey-1" value="id">
          تاریخ
        </option>
      </select>
    </div>
  );
}

export default Sort;
