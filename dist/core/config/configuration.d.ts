declare const _default: () => {
    database: {
        type: string;
        host: string;
        user: string;
        password: string;
        schema: string;
        port: number;
        charset: string;
    };
    app: {
        version: string;
        port: number;
        jwtSecret: string;
        jwtSecretExp: string;
        jwtRefreshSecret: string;
        jwtRefreshSecretExp: string;
        isProd: boolean;
        webPortalUrl: string;
        environment: string;
        localUpload: string;
        maxUploadSize: string | number;
        corsWhiteList: string;
        loginPath: string;
    };
    mail: {
        host: string;
        port: number;
        secure: boolean;
        ignoreTLS: boolean;
        defaultFrom: string;
        auth: {
            user: string;
            pass: string;
        };
    };
    redis: {
        host: string;
        port: number;
        password: string;
        ttl: number;
    };
    awsS3: {
        region: string;
        bucketName: string;
        bucketEndpoint: string;
        bucketDocumentsPath: string;
        accessKeyId: string;
        secretAccessKey: string;
        url: string;
    };
};
export default _default;
