import { IsNotEmpty, IsString, Length } from 'class-validator';

export class NotificationDTO {
  @IsString()
  @IsNotEmpty()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  category: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
