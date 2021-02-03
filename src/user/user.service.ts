/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import  { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
    userArray: User[] = []
    

    addUser(title:string, subtitle:string){

        console.log(`title: ${title}, subtitle: ${subtitle}`);
        const user = new User();
        user.id = uuid();
        user.title = title;
        user.subtitle = subtitle;

        this.userArray.push(user);
    }

    getUsers(){
        return this.userArray;
    }

    removeUserById(id:string){

        const found = this.userArray.find(item=> item.id === id);
        if(!found){
            throw new NotFoundException(`User with ${id} not found `);
        }

        this.userArray = this.userArray.filter(item=>{return item.id !== id});

        return this.userArray;

    }
}
