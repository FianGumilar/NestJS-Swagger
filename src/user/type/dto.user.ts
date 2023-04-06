import { ApiProperty } from "@nestjs/swagger";
import { UserSchema } from "./schema.user";

export class UserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;
}