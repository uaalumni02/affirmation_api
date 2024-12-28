class Db {
  static async findUser(model, userName) {
    try {
      const user = await model.findOne({ userName });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async saveUser(model, user) {
    try {
      const newUser = await model({ ...user });
      return newUser.save();
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers(model) {
    try {
      const allUsers = await model.find({});
      return allUsers;
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(model, id) {
    try {
      const user = await model.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async addCategory(model, data) {
    try {
      const newCategory = await model({ ...data });
      return newCategory.save();
    } catch (error) {
      throw error;
    }
  }

  static async getAllCategories(model) {
    try {
      const allCategories = await model.find({});
      return allCategories;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryById(model, id) {
    try {
      const category = await model.findById(id);
      return category;
    } catch (error) {
      throw error;
    }
  }
}

export default Db;
