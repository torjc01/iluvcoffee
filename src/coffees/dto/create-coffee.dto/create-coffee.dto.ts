import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator'; 

export class CreateCoffeeDto {
    
    @ApiProperty({ description: 'The commercial name of a coffee.', example: 'Pilão'})
    @IsString()
    readonly name    : string; 

    @ApiProperty({ description: 'The brand of a coffee.', example: 'Três corações'})
    @IsString()
    readonly brand   : string;

    @ApiProperty({ example: ['espresso', 'corsé', 'velouté']})
    @IsString({ each: true })
    readonly flavors : string[];

}
