import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || '5000';
export const MONGOOSE_URL = process.env.MONGOOSE_URL || 'mongodb://localhost:27017';
export const CLIENT_PORT = process.env.CLIENT_PORT || '3000';
export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || `http://localhost:${CLIENT_PORT}`;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE as string;
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN as string;
