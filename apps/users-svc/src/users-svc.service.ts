import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UserSvcService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Fetch all users or filter by role
  async findAll(role?: 'Intern' | 'Engineer' | 'Admin'): Promise<User[]> {
    if (role) {
      const users = await this.userModel.find({ role }).exec();
      if (!users.length) {
        throw new NotFoundException(`No users found with the role: ${role}`);
      }
      return users;
    }
    return this.userModel.find().exec();
  }

  // Fetch a single user by ID
  async findOne(id: number): Promise<User> {
    // Query the database with `_id`
    const user = await this.userModel.findOne({  id }).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  // Update an existing user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ id }, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  // Delete a user by ID
  async delete(id: number): Promise<User> {
    const deletedUser = await this.userModel.findOneAndDelete({ id }).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }
}
