import { Arg, Authorized, Field, InputType, Mutation, Resolver } from "type-graphql";
import {AddUser} from "../data/data";
import User from "./User";

@Resolver()
export default class UserResolver {

    @Mutation(returns => User)
    addUser(
        @Arg("email") email : User,

        @Arg("password") password : User,

        @Arg("username") username: User
    ) : Promise<any> {
        return  this.addUser(email,password ,username)
    }
    
}