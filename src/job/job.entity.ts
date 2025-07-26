import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column()
  companyName: string;

  @Column()
  location: string;

  @Column()
  jobType: string;

  @Column()
  salaryMin: string;

  @Column()
  salaryMax: string;

  @Column('text')
  jobDescription: string;

  @Column()
  applicationDeadline: Date;
}
