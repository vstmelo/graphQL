import { Field, ID, ObjectType } from "type-graphql"

ObjectType()
export default class User {
    @Field(type => ID)
    id?: number
    @Field()
    email: String
    @Field()
    phone?: String
    @Field()
    password: String
    @Field()
    username: String
}
