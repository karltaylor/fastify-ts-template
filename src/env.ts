import { cleanEnv, num } from 'envalid'

export const env = cleanEnv(process.env, {
  PORT: num({ default: 8080 }),
})