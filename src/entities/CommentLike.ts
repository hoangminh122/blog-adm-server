import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { Comment } from "./Comment";
import { User } from "./User";

@Table({tableName:'comment_like',timestamps:false})
export class CommentLike extends Model{

    @Column({
        field:'comment_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>Comment)
    commentId!:string

    @Column({
        field:'user_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>User)
    userId!:string;

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