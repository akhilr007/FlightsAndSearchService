# Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=8000`
- Inside the `src/config` folder create a new file `config.json` and then add the following pieces of json
  ```
  {
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
  }

  ```
- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`


## DB Design
  - Airplane table
  - Flight
  - Airport
  - City
  
  - A fight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> city has many airports and airport belongs to a city (one to many).

```
for creating the airport model
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

for migration
npx sequelize db:migrate
```


```
for seeding the data 
npx sequelize seed:generate --name add-airplanes

npx sequelize db:seed:all
```