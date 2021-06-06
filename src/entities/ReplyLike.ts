import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { Comment } from "./Comment";
import { Reply } from "./Reply";

@Table({tableName:'reply_like',timestamps:false})
export class ReplyLike extends Model{

    @Column({
        field:'reply_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>Reply)
    replyId!:string

    @Column({
        field:'comment_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    @ForeignKey(()=>Comment)
    commentId!:string;

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