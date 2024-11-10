import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService} from 'src/datasource/datasource.service'
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(user: User) {
        this.datasourceService.getUsers().push(user);
        return user;
    }
    
    findOne(id: number) {
        return this.datasourceService
          .getUsers()
          .find((user) => user.id === id);
    }
    
    findAll(): User[] {
        return this.datasourceService.getUsers();
    }
    
    update(id: number, updatedUser: User) {
        const index = this.datasourceService
          .getUsers()
          .findIndex((user) => user.id === id);
        this.datasourceService.getUsers()[index] = updatedUser;
        return this.datasourceService.getUsers()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
          .getUsers()
          .findIndex((user) => user.id === id);
        this.datasourceService.getUsers().splice(index, 1);
        return HttpStatus.OK;
    }

}
