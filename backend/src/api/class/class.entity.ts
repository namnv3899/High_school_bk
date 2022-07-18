import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Student, Subject } from '../students/students.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity({ name: 'Classroom' })
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  startYear: number;

  @Column()
  endYear: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Student, (student) => student.classroom)
  @JoinColumn()
  student: Student[];

  @OneToMany(() => ClassTeacher, (classTeachers) => classTeachers.classroom)
  @JoinColumn()
  classTeachers: ClassTeacher[];

  @OneToMany(() => ClassSubject, (classSubjects) => classSubjects.classroom)
  @JoinColumn()
  classSubjects: ClassSubject[];
}

@Entity({ name: 'ClassSubject' })
export class ClassSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  classId: number;

  @Column({ nullable: true })
  nameSubject: string;

  @Column()
  lesson: number;

  @Column({ nullable: true })
  monday: string;

  @Column({ nullable: true })
  tuesday: string;

  @Column({ nullable: true })
  wednesday: string;

  @Column({ nullable: true })
  thursday: string;

  @Column({ nullable: true })
  friday: string;

  @Column({ nullable: true })
  saturday: string;

  @Column({ nullable: true })
  schoolYear: number;

  @Column({ nullable: true })
  semester: number;

  @ManyToOne(() => Subject, (subject) => subject.classSubjects)
  subject: Subject;

  @ManyToOne(() => Classroom, (classroom) => classroom.classSubjects)
  classroom: Classroom;
}

@Entity({ name: 'ClassTeacher' })
export class ClassTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classId: number;

  @Column()
  teacherId: number;

  @Column()
  subject: string;

  @Column({ nullable: true })
  semester: number;

  @Column({ nullable: true })
  schoolYear: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.classTeachers)
  @JoinTable()
  teacher: Teacher;

  @ManyToOne(() => Classroom, (classroom) => classroom.classTeachers)
  @JoinTable()
  classroom: Classroom;

  // @OneToOne(() => Subject, (subject) => subject.classTeacher)
  // subject: Subject;
}
