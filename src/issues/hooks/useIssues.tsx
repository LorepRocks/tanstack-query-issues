import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";

export const UseIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 60000,
  });

  return {
    issuesQuery,
  };
};
