import { Controller, Get, Post, Body, Query, Param, Patch, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() dto: CreateJobDto): Promise<Job> {
    return this.jobService.createJob(dto);
  }

  @Get()
  findAll(
    @Query('location') location?: string,
    @Query('jobType') jobType?: string,
    @Query('companyName') companyName?: string,
  ): Promise<Job[]> {
    return this.jobService.getAllJobs({ location, jobType, companyName });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Job> {
    return this.jobService.getJobById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateJobDto>): Promise<Job> {
    return this.jobService.updateJob(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.jobService.deleteJob(+id);
  }
}
