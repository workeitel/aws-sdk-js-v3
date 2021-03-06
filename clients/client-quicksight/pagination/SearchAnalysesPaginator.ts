import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  SearchAnalysesCommand,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput,
} from "../commands/SearchAnalysesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchAnalysesCommandInput,
  ...args: any
): Promise<SearchAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchAnalysesCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: SearchAnalysesCommandInput,
  ...args: any
): Promise<SearchAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.searchAnalyses(input, ...args);
};
export async function* searchAnalysesPaginate(
  config: QuickSightPaginationConfiguration,
  input: SearchAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<SearchAnalysesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchAnalysesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
