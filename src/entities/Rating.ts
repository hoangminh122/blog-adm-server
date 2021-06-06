import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { Post } from "./Post";
import { User } from "./User";

@Table({tableName:'rating',timestamps:false})
export class Rating extends Model {
    @Column({
        field:'user_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>User)
    userId!:string

    @Column({
        field:'post_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>Post)
    postId!:string;

    @Column({
        type:DataType.INTEGER,
        field:'rating_star'
    })
    ratingStar:number

    @CreatedAt
    @Column({ 
        field: 'created_at',
        type: DataType.DATE })
    createdAt: Date;

    @UpdatedAt
    @Column({ 
        field: 'updated_at', 
        type: DataType.DATE })
    updatedAt: Date;

    @DeletedAt
    @Column({ 
        field: 'daleted_at', 
        type: DataType.DATE })
    deletedAt: Date;
}