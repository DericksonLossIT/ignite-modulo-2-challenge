import { User } from "modules/users/model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUserRepository {
  create({ name, email }: ICreateUserDTO): void;
}
