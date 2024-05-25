import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export function UseSerializeInterceptor() {
  return UseInterceptors(new SerializeInterceptor<CreateUserDto>());
}

export class SerializeInterceptor<T> implements NestInterceptor<T> {
  intercept(
    context: ExecutionContext,
    _next: CallHandler<T>,
  ): Observable<any> | Promise<Observable<any>> {
    throw new Error('Method not implemented.');
  }
}
