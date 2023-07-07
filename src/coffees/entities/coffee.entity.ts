import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()  // sql table === "coffee"
export class Coffee{
    @PrimaryGeneratedColumn()
    id      : number;

    @Column() 
    name    : string;

    @ApiProperty({description: 'Descrição', example: 'Café forte baseado no sabor italiano'})
    @Column({ nullable: true })
    descrition: string;

    @Column() 
    brand   : string;

    @Column({ default: 0 })
    recommendations: number; 

    @JoinTable()
    @ManyToMany(
        type => Flavor, 
        flavor => flavor.coffees,
        {
            cascade: true, // ['insert']
        } )
    flavors : Flavor[];
   
}