import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('app_user')
export class User {
  @PrimaryGeneratedColumn({ name: 'uid', type: 'int' })
  uid: number;

  @Column('varchar', { name: 'fullname', nullable: true, length: 20 })
  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 32 })
  username: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  password: string;

  @Column('tinyint', {
    name: 'disable_all_notifications',
    nullable: true,
  })
  disable_all_notifications: number | null;

  @Column('varchar', { name: 'address', nullable: true, length: 255 })
  address: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 32 })
  phone: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 32 })
  mobile: string | null;

  @Column('tinyint', { name: 'status', nullable: true })
  status: number | null;

  @Column('tinyint', { name: 'supper', nullable: true })
  supper: number | null;

  @Column('tinyint', { name: 'sub_id', nullable: true })
  sub_id: number | null;

  @Column('tinyint', { name: 'role_id', nullable: true })
  role_id: number | null;

  @Column('int', { name: 'store_id', nullable: true })
  store_id: number | null;

  @Column('int', { name: 'zip', nullable: true })
  zip: number | null;

  @Column('varchar', { name: 'counrty', nullable: true, length: 80 })
  country: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 80 })
  city: string | null;

  @Column('varchar', { name: 'state', nullable: true, length: 80 })
  state: string | null;

  @Column('varchar', { name: 'hour_rate', nullable: true, length: 80 })
  hour_rate: string | null;

  @Column('varchar', { name: 'accesspin', nullable: true, length: 80 })
  accesspin: string | null;

  @Column('varchar', { name: 'stores', nullable: true, length: 80 })
  stores: string | null;

  @Column('tinyint', { name: 'is_delete', nullable: true })
  is_delete: number | null;

  @Column('varchar', { name: 'working_days', nullable: true, length: 255 })
  working_days: string | null;

  @Column('varchar', { name: 'salary', nullable: true, length: 80 })
  salary: string | null;

  @Column('varchar', {
    name: 'stores_for_assignment',
    nullable: true,
    length: 255,
  })
  stores_for_assignment: string | null;
}
