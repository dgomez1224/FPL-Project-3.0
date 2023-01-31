import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFixtureDto } from './dto/create-fixture.dto';
import { UpdateFixtureDto } from './dto/update-fixture.dto';
import { Fixture } from './entities/fixture.entity';

@Injectable()
export class FixturesService {
  constructor(
    @InjectRepository(Fixture)
    private fixtureRepository: Repository<Fixture>
  ){ }

  create(createFixtureDto: CreateFixtureDto) {
    return this.fixtureRepository.save(createFixtureDto) ;
  }

  findAll() {
    return  this.fixtureRepository.find();
  }

  findOne(id: number) {
    return this.fixtureRepository.findOneBy({ id });
  }

  async update(id: number, updateFixtureDto: UpdateFixtureDto) {
    const fixture = await this.fixtureRepository.findOneBy({ id }) ;
    if(!fixture){
      throw new NotFoundException("Fixture not found")
    }
    fixture.season_name= updateFixtureDto.season_name ;
    fixture.gameweek= updateFixtureDto.gameweek ;
    fixture.completed= updateFixtureDto.completed ;
    fixture.team_one= updateFixtureDto.team_one;
    fixture.team_two= updateFixtureDto.team_two ;
    fixture.team_one_points= updateFixtureDto.team_one_points ;
    fixture.team_two_points= updateFixtureDto.team_two_points ;
  }

  remove(id: number) {
    this.fixtureRepository.delete(id);
  }
}
