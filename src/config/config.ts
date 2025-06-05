export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'wms',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        migrations: ['dist/migrations/*{.ts,.js}'],
        migrationsRun: true,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: 'Id',
    },
});