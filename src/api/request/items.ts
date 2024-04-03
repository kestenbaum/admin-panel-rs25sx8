import { api } from '../instance.ts';

export type GetWorksConfig = AxiosRequestConfig;
export const getItems = async (requestConfig?: GetWorksConfig) =>
  api.get<GetItems>('/works', requestConfig?.config);

export type PostItemParams = Omit<Item, '_id'>;
export type PostItemConfig = AxiosRequestConfig<PostItemParams>;

export const createItem = async ({
  params,
  config
}: {
  params: PostItemParams;
  config?: PostItemConfig;
}) => api.post<Item>('/works', params, config);
