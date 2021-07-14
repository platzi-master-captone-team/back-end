# Consultify API

## Technologies

- Passport
- JWT
- Nodemailer
- Mongoose
- Knex
- Express
- Bcrypt
- Cors
- MongoDB
- PostgresSQL

We chose these technologies because together we determined that they were the best for each problem we needed to solve.

We use two databases, the main one is that of postgresql and the secondary one is that of mongodb, we did it this way because the info that we keep in the non-relational database, we did not need it to have a relationship with the data that we already had storing in relational database.


## ERD

![drawSQL-export-2021-07-13_19_56](https://user-images.githubusercontent.com/66572419/125544472-7696aded-e298-4424-9ad6-0c2a3fad3e69.png)


## Endpoints

### Users

### Get all users

```http
  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Headers: Authorization`  |  `Bearer {token}` |**Requerido** Token del usuario debe enviarse por headers|

---
### Get one user by id

```http
  GET /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Headers: Authorization`  |  `Bearer ${token}` | **Requerido** Token del usuario debe enviarse por headers |
| `id`      | `string` | **Requerido**. Id del usuario a consultar |

---

### Sign up

```http
  POST /api/user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Requerido**. user's name |
| `phone_number`      | `number` | **Requerido**. user's phone number |
| `country_id`      | `string` | **Requerido**. country where the user lives  |
| `payment_method_id`      | `string` | **Requerido**. user's payment method |
| `password`      | `string` | **Requerido**. user's password |
| `role_id`      | `string` | **Requerido**. user's role id  |
| `email`      | `string` | **Requerido**. user's email |

---
### Update a user
```http
  PUT /api/user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Headers: Authorization`  |  `Bearer {token}` | **Requerido** Token del usuario debe enviarse por headers |
| `name`      | `string` | user's name |
| `phone_number`      | `number` | user's phone number |
| `country_id`      | `string` | country where the user lives  |
| `payment_method_id`      | `string` | user's payment method |
| `password`      | `string` | user's password |
| `role_id`      | `string` | user's role id  |
| `email`      | `string` | user's email |

---
#### Login user
```http
  POST /api/user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Requerido**. user's email |
| `password`      | `string` | **Requerido**. user's password |


---

### Metadata

### Get all metadata from users

```http
  GET /api/metadata
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|   |   |  |

---
### Send user's metadata

```http
  POST /api/metadata/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `language`      | `string` | idioma del usuario |
| `platform`      | `string` | plataforma que usa el usuario |
| `typeConnection`      | `string` | tipo de coneccion del usuario |
| `isMobile`      | `boolean` | indica si el usuario esta desde un celular |
| `clientName`      | `string` | nombre del navegador |
| `clientType`      | `string` | tipo de navegador |
| `clientVersion`      | `string` | version del navegador |
| `deviceBrand`      | `string` | marca del dispositivo |
| `deviceModel`      | `string` | modelo del dispositivo |
| `deviceType`      | `string` | tipo de dispositivo |
| `osName`      | `string` | nombre del sistema operativo |
| `osPlatform`      | `string` | tipo del sistema operativo |
| `osVersion`      | `string` | version de sistema operativo |

---

