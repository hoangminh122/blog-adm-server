import { Column, CreatedAt, DataType, DeletedAt, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";

@Table({tableName:'reply',timestamps:false})
export class Reply extends Model {
    @PrimaryKey
    @IsUUID(4)
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string;

    @Column({
        type:DataType.TEXT,
        field:'content',
    })
    content :string;
    
    @Column({
        type:DataType.INTEGER,
        field:'total_like',
    })
    totalLike :number;

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