import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  // @PrimaryGeneratedColumn()
  // 자동으로 ID를 생성
  //
  // PrimaryColumn은 모든 테이블에서 기본적으로 존재해야한다.
  // 테이블 안에서 각각의 row를 구분 할 수 있는 컬럼이다.
  //
  // uuid (절대 겹치지 않음)
  // afwefsd8798-awf13748-12908301
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    // 데이터베이스에서 인지하는 칼럼 타입
    // 자동으로 타입투론 됨
    type: 'varchar',
    // 데이터베이스 칼럼 이름
    // 프로퍼티 이름으로 자동 추론됨
    name: 'title',
    // 값의 길이
    // 입력 할 수 있는 글자의 길이가 300
    length: 300,
    //null이 가능한지
    nullable: true,
    // true면 처음 지정할때만 값 지정 가능
    // 이후에는 값 변경 불가능
    update: false,
    // find()를 실행 할 때 기본으로 값을 불러올지 결정
    // default true
    select: true,
    // 기본 값
    // 아무것도 입력 안했을 때 기본으로 입력되게 되는 값
    default: 'default value',
    // 컬럼중에서 유일무이한 값이 되어야 하는지
    unique: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  //데이터 생성 일자
  // 데이터가 생성되는 날짜와 시간이 자동으로 찍힌다.
  @CreateDateColumn()
  createdAt: Date;

  //업데이트 되는 날짜와 시간이 자동으로 찍힌다.
  @UpdateDateColumn()
  updatedAt: Date;

  // 데이터가 업데이트 될 때마다 1씩 올라감
  // 처음 생성되면 값은 1
  // save 함수가 몇 번 실행됐는지 기억한다
  @VersionColumn()
  version: number;

  @Column()
  @Generated('uuid')
  additionalId: string;
}
