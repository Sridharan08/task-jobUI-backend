import { IsString, IsDateString } from 'class-validator';

export class CreateJobDto {
  @IsString()
  jobTitle: string;

  @IsString()
  companyName: string;

  @IsString()
  location: string;

  @IsString()
  jobType: string;

  @IsString()
  salaryMin: string; // e.g. "4 LPA"

  @IsString()
  salaryMax: string; // e.g. "7 LPA"

  @IsString()
  jobDescription: string;

  @IsDateString()
  applicationDeadline: string; // e.g. "2025-08-01"
}
