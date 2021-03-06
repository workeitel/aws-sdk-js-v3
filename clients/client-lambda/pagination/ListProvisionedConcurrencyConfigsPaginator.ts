import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import {
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...args: any
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisionedConcurrencyConfigsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Lambda,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...args: any
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listProvisionedConcurrencyConfigs(input, ...args);
};
export async function* listProvisionedConcurrencyConfigsPaginate(
  config: LambdaPaginationConfiguration,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisionedConcurrencyConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisionedConcurrencyConfigsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
