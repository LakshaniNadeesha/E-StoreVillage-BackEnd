import * as dotenv from "dotenv";
dotenv.config({
  path: `../../../.env`,
});
export default () => ({
  database: {
    type: process.env.DATABASE_TYPE || "postgres",
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    schema: process.env.DATABASE_SCHEMA,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    charset: "utf8mb4",
  },
  app: {
    version: process.env.APP_VERSION || "v1",
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    jwtSecret: process.env.JWT_SECRET,
    jwtSecretExp: process.env.JWT_SECRET_EXP,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    jwtRefreshSecretExp: process.env.JWT_REFRESH_SECRET_EXP,
    isProd: process.env.NODE_ENV === "prod" || false,
    webPortalUrl: process.env.WEB_PORTAL_URL || "http://localhost:4200/",
    environment: process.env.NODE_ENV || "dev",
    localUpload: process.env.LOCAL_UPLOAD || "/tmp",
    maxUploadSize: process.env.MAX_UPLOAD_SIZE || 41943040,
    corsWhiteList: process.env.CORS_WHITELIST || "",
    loginPath: process.env.LoginPath || "",
  },
  mail: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 1025,
    secure: process.env.SMTP_SECURE === "true",
    ignoreTLS: process.env.SMTP_SECURE !== "false",
    defaultFrom: process.env.MAIL_DEFAULT_FROM || '"No Reply" <no-reply@aguard.io>',
    auth: {
      user: process.env.SMTP_AUTH_USER || "username",
      pass: process.env.SMTP_AUTH_PASS || "password",
    },
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD,
    ttl: parseInt(process.env.REDIS_CACHE_TTL),
  },
  awsS3: {
    region: process.env.AWS_S3_REGION || "",
    bucketName: process.env.AWS_S3_BUCKET_NAME,
    bucketEndpoint: process.env.AWS_S3_BUCKET_END_POINT,
    bucketDocumentsPath: process.env.AWS_S3_BUCKET_DOCUMENTS_PATH,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    url: process.env.AWS_S3_URL,
  },
 
});
