import axios from 'axios';

export enum ApiRequestMethod {
  POST = 'post',
  GET = 'get',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

export enum ApiEndpointUrl {
  GET_CONFIG = 'config/active',
  GET_PORTFOLIOS = 'portfolio',
  CREATE_MESSAGE = 'message',
}

export function decodePlaceHolder(input: string, placeholders: object): string {
  let inputString = input;
  Object.keys(placeholders).forEach((key: string) => {
    const reg = new RegExp(`{${key}}`, 'g');
    // @ts-ignore
    inputString = inputString.replace(reg, placeholders[key]);
  });

  return inputString;
}

export function appendQueryParameters(
  input: string,
  queryParams: Record<string, string | number | null | undefined>,
): string {
  const queryParamsWithoutNullAndUndefined = Object.entries(queryParams).reduce(
    // @ts-ignore
    // eslint-disable-next-line no-return-assign,no-param-reassign
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {},
  );
  // @ts-ignore
  const result = `?${new URLSearchParams(
    queryParamsWithoutNullAndUndefined,
  ).toString()}`;
  return input + result;
}

export async function publicApiRequest(
  method: ApiRequestMethod,
  url: ApiEndpointUrl | string,
  data?: object,
) {
  return axios({
    method,
    url: `${process.env.REACT_APP_BASE_API_URL}${url}`,
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
