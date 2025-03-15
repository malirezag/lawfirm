import { useQuery } from "@tanstack/react-query";
import CommentRow from "./CommentRow";
import { getComments } from "../services/apiCommentForm";
import EmptyComment from "./EmptyComment";

function Comments() {
  const { data } = useQuery({
    queryKey: ["coment-form"],
    queryFn: getComments,
  });

  return data?.length > 0 ? (
    <div className="h-96 w-78 overflow-scroll overflow-x-hidden ">
      {data?.map((item) => (
        <CommentRow key={item.id} data={item} />
      ))}
    </div>
  ) : (
    <EmptyComment />
  );
}

export default Comments;
