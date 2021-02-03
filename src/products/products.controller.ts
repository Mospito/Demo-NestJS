import { Controller, Get, Req, Res, Query, Post, Put, Delete } from '@nestjs/common';
import {  Request,Response } from 'express';
@Controller('products')
export class ProductsController {

    @Post()
    create(): string{
        return "New Product EndPoint";
    }

    @Get()
    findAll(
        @Req()
        request: Request,
        @Res()
        response: Response,
        @Query() query,
    ): any {
        console.log(query);
        return response.json({msg:'Find All'})
    }

    @Put()
    update(): string{
        return 'Update EndPoint';
    }

    @Delete()
    delete(): string{
        return 'Delete EndPoint';
    }

    @Get(':id')
    findOne(): string{
        return 'FindOne EndPoint';
    }


}
