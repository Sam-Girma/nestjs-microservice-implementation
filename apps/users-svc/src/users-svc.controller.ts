import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserSvcService } from './users-svc.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userSvcService: UserSvcService) {}

    @Get()
    async findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
        return this.userSvcService.findAll(role);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userSvcService.findOne(id);
    }

    @Post()
    async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userSvcService.create(createUserDto);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) updateUserDto: UpdateUserDto
    ) {
        return this.userSvcService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userSvcService.delete(id);
    }
}
