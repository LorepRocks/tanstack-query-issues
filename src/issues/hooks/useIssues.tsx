import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces/issue.interface";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const UseIssues = ({ state, selectedLabels }: Props) => {
  console.log("__state", state);
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 60000,
  });

  return {
    issuesQuery,
  };
};
