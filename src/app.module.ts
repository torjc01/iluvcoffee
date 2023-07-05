import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports:      [CoffeesModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: '6mRsc46ozSNfPnjtSRrMKsbf7qEjEKmKphSk5CzQuN9FkORlMbzWnoB42UyeRGmA', 
      database: 'postgres', 
      autoLoadEntities: true, 
      synchronize: true  // Disable when in production environment
      })
  ],
  controllers:  [AppController],
  providers:    [AppService],
})
export class AppModule {}
