import dotenv, {config} from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(),`.env.${process.env.NODE_ENV || 'development'}`)

dotenv.config({path: envPath});

export const uri = process.env.URI_APP

export const port = process.env.PORT_APP
export const mongoDomain = process.env.MONGO_DOMAIN
export const mongoUser = process.env.MONGO_USER
export const mongoPWD = process.env.MONGO_PWD
export const mongoDb = process.env.MONGO_DATABASE