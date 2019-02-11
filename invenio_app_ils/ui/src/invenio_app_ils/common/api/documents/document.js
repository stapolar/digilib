import { http } from '../base';
import { serializer } from './serializer';

const documentURL = '/documents/';

const get = documentPid => {
  return http.get(`${documentURL}${documentPid}`).then(response => {
    response.data = serializer.fromJSON(response.data);
    return response;
  });
};

export const document = {
  get: get,
  url: documentURL,
};