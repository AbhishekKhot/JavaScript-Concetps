/*
Singleton desing pattern is creational design pattern that ensures a class has one instance and provide a global
point of access to it. This pattern is used in scenarios where a single instance of a class is needed to 
coordinate action across the system.
*/

/* Without single pattern */
/*
class DatabaseConnection {
  constructor() {
    this.connection = this.#createConnection();
  }

  #createConnection() {
    return { connection: true };
  }

  getConnection() {
    return this.connection;
  }

  closeConnection() {
    this.connection = null;
  }
}

const db1 = new DatabaseConnection();

const db2 = new DatabaseConnection();

console.log("Does db1 and db2 point to same database instance:", db1 === db2);

db1.closeConnection();
db2.closeConnection();

const db3 = new DatabaseConnection();

console.log("Does db1 and db3 point to same database instance:", db3 === db1);
db1.closeConnection();
*/

/* With singleton pattern */

let databaseConnection = null;
class DatabaseConnection {
  constructor() {
    if (databaseConnection) {
      return databaseConnection;
    } else {
      databaseConnection = this.#createConnection();
      return databaseConnection;
    }
  }

  #createConnection() {
    return { dbInstance: true };
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
const db3 = new DatabaseConnection();

console.log("Does db1 and db2 point to same database instance: ", db1 === db2);
console.log("Does db1 and db3 point to same database instance: ", db1 === db3);

/* Advantages singleton pattern
Controlled Access to Resources
ensures only one instance manages resources such as database connections or configuration settings.

Global State Management
facilitates global access to certain states or resources, like application-wide settings or single instances of services.

Simplified Debugging
centralizing functionality in one instance makes debugging and maintenance easier.

Performance Optimization
reduces overhead by reusing a single instance instead of creating multiple instances.
*/
