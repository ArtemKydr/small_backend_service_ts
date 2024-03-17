import { RedisClientOptions } from 'redis';

const redisConfig: RedisClientOptions = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
};

export default redisConfig;
