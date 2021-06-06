import { Column, DataType, HasMany, IsUUID, Model, PrimaryKey, Sequelize, Table } from "sequelize-typescript";
import { Post } from "./Post";

@Table({tableName:'category',timestamps:false})
export class Category extends Model{
    @PrimaryKey
    @IsUUID(4)
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string

    @Column({
        type:DataType.STRING,
        field:'name'
    })
    name:string

    @Column({
        type:DataType.TEXT,
        field:'description'
    })
    description:string

    @HasMany(()=>Post,{
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
    })
    posts:Post[]
}