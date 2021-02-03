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
    postUser(
        @Body("DoctorID") DoctorID:string,
        @Body("Fname") Fname:string, 
        @Body("Lname") Lname:string,
        @Body("Email") Email:string,
        @Body("Telephone") Telephone:string,
        @Body("Position") Position:string,
        @Body("Username") Username:string,
        @Body("Password") Password:string,
        
        ){

        this.userService.addUser(
            
                        DoctorID,
                        Fname,
                        Lname,
                        Email,
                        Telephone,
                        Position,
                        Username,
                        Password, 

                        );

    }

    @Delete("/:id")
    deleteUserByID(@Param("id") id:string){
        console.log(`id: ${id}`);

        return this.userService.removeUserById(id);
        
    }
}
