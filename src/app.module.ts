import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

// Configurer dotenv
const dotenv = require('dotenv');
dotenv.config();

// Configurer variables d'environnement
const POSTGRES_PASSWORD            = process.env.POSTGRES_PASSWORD;

@Module({
  imports:      [CoffeesModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: POSTGRES_PASSWORD, 
      database: 'postgres', 
      autoLoadEntities: true, 
      synchronize: true  // Disable when in production environment
      }), CoffeeRatingModule
  ],
  controllers:  [AppController],
  providers:    [AppService],
})
export class AppModule {}
