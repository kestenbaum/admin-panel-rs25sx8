import {api} from "../instance.ts";

export type GetWorksConfig = AxiosRequestConfig
export const getItems = async (requestConfig?: GetWorksConfig) =>
    api.get<GetItems>('/works', requestConfig?.config)



