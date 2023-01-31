import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("fixtures")
export class Fixture {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    season_name: string
    
    @Column()
    gameweek: number;
    
    @Column({ default: false })
    completed: boolean;
    
    @Column()
    team_one: string;
    
    @Column()
    team_two: string;
    
    @Column()
    team_one_points: number;
    
    @Column()
    team_two_points: number
    
    
}