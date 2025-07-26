import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepo: Repository<Job>) {}

  async createJob(data: CreateJobDto): Promise<Job> {
    const job = this.jobRepo.create(data);
    return this.jobRepo.save(job);
  }

  async getAllJobs(filters?: Partial<Job>): Promise<Job[]> {
    const where: FindOptionsWhere<Job> = {};

    if (filters?.location) where.location = filters.location;
    if (filters?.jobType) where.jobType = filters.jobType;
    if (filters?.companyName) where.companyName = filters.companyName;

    return this.jobRepo.find({ where });
  }

  async getJobById(id: number): Promise<Job> {
    const job = await this.jobRepo.findOneBy({ id });
    if (!job) throw new NotFoundException(`Job with ID ${id} not found`);
    return job;
  }

  async updateJob(id: number, data: Partial<CreateJobDto>): Promise<Job> {
    const job = await this.getJobById(id);
    Object.assign(job, data);
    return this.jobRepo.save(job);
  }

  async deleteJob(id: number): Promise<{ message: string }> {
    const result = await this.jobRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return { message: 'Job deleted successfully' };
  }
}
