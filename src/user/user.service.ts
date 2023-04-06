import { Injectable } from '@nestjs/common';
import { User } from './type/interface.user';

@Injectable()
export class UserService {
    private users: User[] = [];

    create(user: User): void {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }
}
