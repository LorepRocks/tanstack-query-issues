import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";

export const UseIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 60000,
    retry: false,
  });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 60000,
    retry: false,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
