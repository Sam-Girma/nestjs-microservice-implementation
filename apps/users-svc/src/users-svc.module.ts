import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users-svc.controller';
import { UserSvcService } from './users-svc.service';
import {  UserSchema } from './users.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]), // MongoDB schema
  ],
  controllers: [UsersController], // User routes
  providers: [UserSvcService],    // User service logic
})
export class UsersServiceModule {}
