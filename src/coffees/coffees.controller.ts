import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    /**
     * O decorator @Res permite usar a sintaxe nativa da biblioteca http em uso, no caso default, Express.js. 
     * Abaixo a resposta é fornecida pela sintaxe nativa, ao invés da sintaxe NestJS. 
     * Mas como uma best practice, é recomendado o uso da sintaxe nativa NestJS para evitar perda de compatibilidade 
     * com objetos que não sejam compatíveis com a sintaxe das bibliotecas. 
     */
    @Get()
    findAll(@Query() paginationQuery){
        const { limit, offset } = paginationQuery;
        // response.status(200).send("This action returns all coffees");
        return `This action returns all coffees: limit ${limit}, offset ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns #${id} coffee`; 
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
        // return `This action creates a coffee`; 
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This action deletes #${id} coffee`;
    }
}
