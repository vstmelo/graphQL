import { AppDataSource } from "../connection";
import User from "../resolvers/User";
import UserService from "../service/UserService";

export const UserRepository = AppDataSource.getRepository(User);

export  class AddUser {
    async addUser({ email, password, username, phone }: UserService) {

        const user = UserRepository.create({
            username,
            email,
            password,
            phone
        });
        return user;
    }
}
