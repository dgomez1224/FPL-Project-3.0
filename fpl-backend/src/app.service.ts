import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getDetails() {
    try {
      const response = await axios.get("http://draft.premierleague.com/api/league/63578/details");
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getStandings() {
    try {
      const response = await axios.get("http://draft.premierleague.com/api/league/63578/details");
      return response.data.standings;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getFixtures() {
    try {
      const response = await axios.get("http://draft.premierleague.com/api/league/63578/details");
      return response.data.matches;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
