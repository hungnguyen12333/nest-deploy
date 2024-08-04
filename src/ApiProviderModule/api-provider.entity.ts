import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apiProviders')
export class ApiProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  api_key: string;

  @Column({ default: 0 })
  priority: number;

  @Column({ default: 1 })
  views: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
