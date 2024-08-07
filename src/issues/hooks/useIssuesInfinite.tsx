import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces/issue.interface";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const UseIssuesInfinite = ({ state, selectedLabels }: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "issues-infinite", { state, selectedLabels }],
    queryFn: ({ pageParam }) => {
      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 60000,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });

  return {
    issuesQuery,
  };
};
