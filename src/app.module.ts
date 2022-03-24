import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Settings } from 'settings/setting.entity';
import { SettingModule } from 'settings/settings.module';
import { Connection } from 'typeorm';


@Module({
  imports: [SettingModule, TypeOrmModule.forRoot(
    {
      type: 'mssql',
      host: '::1',
      port:63641,
      username: 'test',
      password: '123456',
      // authentication:false,
      database: 'settings',
      entities: [Settings],
     
    
      
       synchronize: true,

    //   migrations: ["dist/migrations/*{.ts,.js}"],
    // migrationsTableName: "migrations_typeorm",
    // migrationsRun: true




  }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection:Connection){

  }
}
