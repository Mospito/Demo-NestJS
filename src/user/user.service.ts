/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import  { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
    userArray: User[] = []
    

    addUser(

        DoctorID:string,
        Fname:string, 
        Lname:string,
        Email:string,
        Telephone:string,
        Position:string,
        Username:string,
        Password:string,
        
        
        ){

        console.log(`{---------------
                      DoctorID: ${DoctorID},Fname: ${Fname}, Lname: ${Lname}, Email: ${Email}, Telephone: ${Telephone}, Position: ${Position},
                      Username: ${Username}, Password: ${Password}
                      ---------------} `);


        const user = new User();
        user.No = uuid();
        user.DoctorID = DoctorID;
        user.Fname = Fname;
        user.Lname = Lname;
        user.Email = Email;
        user.Telephone = Telephone;
        user.Position = Position;
        user.Username = Username;
        user.Password = Password;
        

        this.userArray.push(user);
    }

    getUsers(){
        return this.userArray;
    }

    removeUserById(id:string){

        const found = this.userArray.find(item=> item.No === id);
        if(!found){
            throw new NotFoundException(`User with ${id} not found `);
        }

        this.userArray = this.userArray.filter(item=>{return item.No !== id});

        return this.userArray;

    }
}
