import { DotenvConfigOutput, config } from 'dotenv';

const envFound: DotenvConfigOutput = config();

if (!envFound) {
  throw new Error('.env file was not found.');
}

const db = {
  type: process.env.DB_TYPE,
  synchronize: true,
  logging: 'all',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
  autoLoadEntities: true,
  entities: ['dist/**/**/*.entity{.ts,.js}'],
};

const APIResponse = class {
  success: boolean;
  data: object;
  constructor(success = true, data = {}) {
    this.success = success;
    this.data = data;
  }
};

export const configs = {
  APIResponse,
  pagination: {
    page: 1,
    recordsAPage: 20,
  },
  host: process.env.HOST,
  port: process.env.PORT,
  jwtAccessKey: process.env.JWT_KEY_ACCESS,
  jwtRefreshKey: process.env.JWT_KEY_REFRESH,
  expiresIn: process.env.EXPIRESIN,
  emailHelper: process.env.EMAIL,
  emailPassword: process.env.PASSWORD_EMAIL,
  db,
};
