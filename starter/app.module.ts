import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../src';
import { GraphQLConfigService } from './graphql-config.service';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphQLConfigService
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'module_user',
            entities: [__dirname + '/../src/**/*.entity.ts'],
            logger: 'simple-console',
            logging: false,
            synchronize: true,
            dropSchema: false
        }),
        UserModule.forRoot({ i18n: 'zh-CN' })
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule { }