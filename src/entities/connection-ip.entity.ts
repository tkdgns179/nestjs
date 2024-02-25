import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ConnectionIp {

    @Column({primary : true, length: 50})
    connection_ip: string;

    @Column()
    user_id: string;
    

}