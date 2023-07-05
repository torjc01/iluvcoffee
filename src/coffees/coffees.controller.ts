import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    /**
     * Construtor, que está servindo para injetar a funcionalidade do CoffeeService no controller.
     * @param coffeeService 
     */
    constructor(private readonly coffeeService: CoffeesService){}
    /**
     * O decorator @Res permite usar a sintaxe nativa da biblioteca http em uso, no caso default, Express.js. 
     * Abaixo a resposta é fornecida pela sintaxe nativa, ao invés da sintaxe NestJS. 
     * Mas como uma best practice, é recomendado o uso da sintaxe nativa NestJS para evitar perda de compatibilidade 
     * com objetos que não sejam compatíveis com a sintaxe das bibliotecas. 
     */
    @Get()
    findAll(@Query() paginationQuery){
        // const { limit, offset } = paginationQuery;
        // response.status(200).send("This action returns all coffees");
        // return `This action returns all coffees: limit ${limit}, offset ${offset}`;
        return this.coffeeService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        // return `This action returns #${id} coffee`;
        return this.coffeeService.findOne(id); 
    }

    @Post()
    //@HttpCode(HttpStatus.GONE)
    create(@Body() body){
        // return `This action creates a coffee`;
        // return body;
        return this.coffeeService.create(body); 
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        // return `This action updates #${id} coffee`;
        return this.coffeeService.update(id, body); 
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        // return `This action deletes #${id} coffee`;
        return this.coffeeService.remove(id);
    }
}
