import { IsNotEmpty, IsString, Length } from 'class-validator';

export class NotificationDTO {
  @IsNotEmpty()
  @IsString()
  recipientId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  category: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
