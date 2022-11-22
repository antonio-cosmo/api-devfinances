import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({
        default: "Infra"
    })
    name: string
}
