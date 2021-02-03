/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService)
    {
    }
    
    @Get()
    getUser(){
        return this.userService.getUsers();
    }

    @Post("/:post")
    postUser(@Body("title") title:string, @Body("subtitle") subtitle:string){

        this.userService.addUser(title,subtitle);

    }

    @Delete("/:id")
    deleteUserByID(@Param("id") id:string){
        console.log(`id: ${id}`);

        return this.userService.removeUserById(id);
        
    }
}
