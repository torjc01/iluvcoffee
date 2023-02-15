import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService){

    }
    /**
     * Este método nao é recomendado, pois usa os objetos da biblioteca
     * que está abaixo do nest, ou seja, express. Perde compatibilidade 
     * com o nest (p.ex. interceptors, httpCode decorator) e torna o codigo 
     * mais dificil de testar. 
     * @param response 
     
    @Get()
    findAll(@Res() response){
        response.status(200).send(`This method returns all coffees`);
    } 
    */
   @Get()
   findAll(@Query() paginationQuery){
    //const { limit, offset } = paginationQuery; 
    return this.coffeesService.findAll();
    //return `This method returns all coffees, limit ${limit}, offset: ${offset}`; 
   }


    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id);
        //return `This action returns ${params.id} coffee`;
    }

    @Post()
    //@HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        this.coffeesService.create(createCoffeeDto);
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return createCoffeeDto;
        // return `This action creates a coffee`; 
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto);
        //return `This actions updates the code ${id} coffee`
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeesService.remove(id);
        //return `This method removes coffee code ${id}`; 
    }
}
