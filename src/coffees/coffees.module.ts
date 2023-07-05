import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';

@Module({
    controllers: [CoffeesController], 
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    exports: [TypeOrmModule],
    providers: [CoffeesService,]
})
export class CoffeesModule {}
