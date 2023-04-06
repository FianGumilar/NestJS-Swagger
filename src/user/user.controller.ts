import { Body, Controller, Post, Get} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { UserDto } from './type/dto.user';
import { User } from './type/interface.user';


@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiCreatedResponse({ type: UserDto})
    async createUser(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    @ApiOperation({ description: 'Get All User' })
    async getAllUsers(): Promise<User[]>  {
        return this.userService.findAll();
    }
}
