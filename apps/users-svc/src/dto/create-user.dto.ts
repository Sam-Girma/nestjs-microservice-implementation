import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

  @IsInt()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Engineer', 'Admin'], {
    message: 'Valid role required',
  })
  role: 'Intern' | 'Engineer' | 'Admin';
}
