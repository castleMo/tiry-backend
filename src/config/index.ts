import * as dotenv from 'dotenv';

import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER_NAME,
  FRONTEND_URL,
  NODE_ENV,
  VERCEL_FRONTEND_URL,
} from '../common/constants';

import { IConfig } from './config.interface';

dotenv.config();

const env = process.env;

const config: IConfig = {
  port: Number(env.PORT),
  db: {
    type: 'mysql',
    host: env[DB_HOST],
    port: Number(env[DB_PORT]),
    username: env[DB_USER_NAME],
    password: env[DB_PASSWORD],
    database: env[DB_DATABASE],
    migrations: ['dist/database/migrations/*.js'],
    entities: ['dist/entities/**/*.entity.js'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    // logging: env[NODE_ENV] === 'local' ? true : false,
    // synchronize: NODE_ENV == 'local' ? true : false,
    // dropSchema: NODE_ENV == 'local' ? true : false,
  },
  auth0: {
    domain: env[AUTH0_DOMAIN],
    audience: env[AUTH0_AUDIENCE],
  },
  gql: {
    autoSchemaFile: 'schema.gql',
    debug: env[NODE_ENV] === 'local',
    sortSchema: true,
    cors: {
      origin: [env[FRONTEND_URL], env[VERCEL_FRONTEND_URL]],
      credentials: true,
    },
  },
};

export const getConfig = () => config;
