import { ApiModelProperty } from "@nestjs/swagger";
import { Controller, Post, Body } from "@nestjs/common";
import { post } from "selenium-webdriver/http";
import { IsString, IsNumber } from 'class-validator';
import { isString } from "util";

export class CreateMovieDto{
    
    @IsString()
    @ApiModelProperty()
    public readonly imdbId: string;

    @IsString()
    @ApiModelProperty()
    public readonly poster: string;

    @IsString()
    @ApiModelProperty()
    public readonly title: string;

    @IsNumber()
    @ApiModelProperty()
    public readonly year: number;

    @IsString()
    @ApiModelProperty()
    public readonly author: string;


}
