import { Injectable } from '@nestjs/common';
import { DataDao } from './data.dao';

@Injectable()
export class AppService {
  constructor(private readonly dataDao: DataDao) {}

  async getAll() {
    const all = await this.dataDao.getAll();
    return all;
  }

  async create(data: any) {
    return await this.dataDao.create(data);
  }

  async findOne(id: string) {
    return await this.dataDao.get(id);
  }

  async update(id: string, data: any) {
    return await this.dataDao.update(id, data);
  }

  async remove(id: string) {
    return await this.dataDao.delete(id);
  }
}
