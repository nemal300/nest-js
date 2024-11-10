import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [User, DatasourceModule],
})
export class UsersModule {}
