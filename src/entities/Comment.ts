import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { Post } from "./Post";
import { User } from "./User";

@Table({tableName:'comment',timestamps:false})
export class Comment extends Model{
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
        field:'comment'
    })
    comment:string

    @Column({
        type:DataType.INTEGER,
        field:'total_like'
    })
    totalLikes:number

    @Column({
        type:DataType.INTEGER,
        field:'total_reply'
    })
    totalReplies:number;

    @ForeignKey(() => Post)
    @Column({
        field: 'post_id',
        type: DataType.UUID,
    })
    postId!: string;

    @ForeignKey(() => User)
    @Column({
        field: 'user_id',
        type: DataType.UUID,
    })
    userId!: string;

    @BelongsTo(()=>Post,{
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
    })
    post : Post;

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