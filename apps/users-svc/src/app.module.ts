import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersServiceModule } from './users-svc.module';

@Module({
  imports: [
    UsersServiceModule, // Import the UsersServiceModule
    MongooseModule.forRoot("mongodb+srv://sami:Wtjx3WVHbJXvB5Eg@cluster0.l6lws.mongodb.net/nestjs?retryWrites=true&w=majority"), // MongoDB connection for users-svc
  ],
})
export class AppModule {}
