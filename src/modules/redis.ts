import redis from 'redis';
import redisConfig from '../config/redisConfig';

const redisClient = redis.createClient(redisConfig);

export default redisClient;
