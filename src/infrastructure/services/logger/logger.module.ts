import { Module } from '@nestjs/common';
import LoggerService from './logger.service';

@Module({
    providers: [LoggerService],
    exports: [LoggerService],
})
export default class LoggerModule {}
