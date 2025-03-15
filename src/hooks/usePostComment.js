import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../services/apiCommentForm";

function usePostComment() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: postComment,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["coment-form"] }),
  });
  return { mutate, isPending };
}

export default usePostComment;
