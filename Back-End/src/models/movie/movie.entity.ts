import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class MovieEntity{
 @PrimaryGeneratedColumn() public readonly id: number;
 @Column('varchar') public readonly imdbId: string;
 @Column('varchar') public readonly poster: string;
 @Column('varchar') public readonly title: string;
 @Column('integer') public readonly year: number;
 @Column('varchar') public readonly author: string;
 }