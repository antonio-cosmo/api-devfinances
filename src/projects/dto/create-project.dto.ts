import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto{
    @ApiProperty({
        default:"Name Project"
    })
    name: string;
   
    @ApiProperty({
        default: 0
    })
    cost: number;
    
    @ApiProperty({
        default:3000
    })
    budget: number;
    
    @ApiProperty({
        example:"96946f97-b9b0-4bd0-84f7-4e3e0bda7124"
    })
    categoryId: string
}