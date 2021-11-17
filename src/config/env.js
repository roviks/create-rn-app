import {DEV_BACKEND_URL, PROD_BACKEND_URL, NODE_ENV} from '@env';

const devEnvironmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
  FILE_SERVER_URL: PROD_BACKEND_URL,
};

const prodEnvironmentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
  FILE_SERVER_URL: PROD_BACKEND_URL,
};

const isDev = NODE_ENV === 'development';
const envs = isDev ? devEnvironmentVariables : prodEnvironmentVariables;
export default envs;
