import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import {
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  FRONTEND_URL,
  IS_PLAYGROUND,
  NODE_ENV,
} from '../common/constants';

import { IConfig } from './config.interface';

dotenv.config({
  path: `.env.${process.env.NODE_ENV ?? 'local'}`,
});

const env = process.env;

const config: IConfig = {
  port: Number(env.PORT),
  db: {
    type: 'mysql',
    host: env[DB_HOST],
    port: Number(env[DB_PORT]),
    username: env[DB_USERNAME],
    password: env[DB_PASSWORD],
    database: env[DB_DATABASE],
    logging: env[NODE_ENV] === 'local' ? false : false,
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    entities: ['dist/entities/**/*.entity{.ts,.js}'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    // synchronize: NODE_ENV == 'development' ? true : false,
    // dropSchema: NODE_ENV == 'development' ? true : false,
  },
  auth0: {
    domain: env[AUTH0_DOMAIN],
    audience: env[AUTH0_AUDIENCE],
  },
  gql: {
    autoSchemaFile: 'schema.gql',
    debug: env[NODE_ENV] === 'local',
    playground: env[IS_PLAYGROUND] === 'true',
    sortSchema: true,
    cors: {
      origin: [env[FRONTEND_URL]],
      credentials: true,
    },
  },
};

export const getConfig = () => config;
