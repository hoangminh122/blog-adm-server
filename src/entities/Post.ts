import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { Category } from "./Category";
import { Comment } from "./Comment";
import { User } from "./User";

@Table({tableName:'post',timestamps:false})
export class Post extends Model {
    @PrimaryKey
    @IsUUID(4)
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string

    @Column({
        type:DataType.STRING,
        field:'title'
    })
    title:string

    @Column({
        type:DataType.TEXT,
        field:'total_comment'
    })
    totalComments:string

    @Column({
        type:DataType.INTEGER,
        field:'total_like'
    })
    totalLikes:number

    @Column({
        type:DataType.INTEGER,
        field:'post_rating'
    })
    postRating:number

    @Column({
        type:DataType.TEXT,
        field:'post_body'
    })
    postBody:string

    @ForeignKey(() => User)
    @Column({
        field: 'user_id',
        type: DataType.UUID,
    })
    userId!: string;

    @HasMany(() => Comment,{
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
    })
    comments:Comment[];

    @ForeignKey(() => Category)
    @Column({
        field: 'category_id',
        type: DataType.UUID,
    })
    categoryId!: string;

    // @BelongsTo(()=>Category,{
    //     onDelete:'RESTRICT',
    //     onUpdate:'CASCADE'
    // })
    // category : Category;

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