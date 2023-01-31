import { MigrationInterface, QueryRunner } from "typeorm"

export class createFixturesTable1674938098791 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table fixtures(
            id SERIAL PRIMARY KEY,
            season_name VARCHAR(255) NOT NULL,
            gameweek INTEGER NOT NULL,
            completed BOOLEAN NOT NULL,
            team_one VARCHAR(255) NOT NULL,
            team_two VARCHAR(255) NOT NULL,
            team_one_points INTEGER NOT NULL,
            team_two_points INTEGER NOT NULL
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query( `drop table fixtures`)
    }

}
