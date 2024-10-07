import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    all(): Promise<User[]> { return this.usersRepository.find(); }

    find(id: number): Promise<User | null> {
        return this.usersRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}