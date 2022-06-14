const { UserRepository } = require("../repositories/userRepository");

class UserService {
  // TODO: Implement methods to work with user

  create(data) {
    const user = UserRepository.create(data);
    if (!user) {
      throw Error("Failed to add a user");
    }
    return user;
  }

  update(id, dataToUpdate) {
    const updatedUser = UserRepository.update(id, dataToUpdate);
    return updatedUser;
  }

  delete(id) {
    return UserRepository.delete(id);
  }

  search(search) {
    const user = UserRepository.getOne(search);
    if (!user) {
      return null;
    }
    return user;
  }

  getAll() {
    const allUsers = UserRepository.getAll();
    return allUsers;
  }
}

module.exports = new UserService();
