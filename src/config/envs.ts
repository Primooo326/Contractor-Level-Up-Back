import 'dotenv/config';
import * as joi from 'joi';

// declaramos el puertoque sea numerico
interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envsShema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsShema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const envsVars: EnvVars = value;


export const envs = {
  port: envsVars.PORT,
  databaseurl: envsVars.DATABASE_URL,
};

