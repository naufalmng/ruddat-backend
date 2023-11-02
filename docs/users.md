# User API Spec

## Register User API

Endpoint : POST /api/v1/users

Headers :
- Authorization Bearer:

Request Body:
```json

{
    "email": "naufal",
    "password": "mysecretpass",
    "username": "naufalaja",
}
```
Response Body Success :
```json
{
    "code": 200,
    "access_token": "aahfhjkkkIIIHFKL123",
    "refresh_token": "llllkjhggfUUTDS123",
}
```
Response Body Error :
```json
{
    "code": 400,
    "error": "Bad Request",
}
```
## Login User API
Endpoint : POST /api/v1/users/login

Headers :
- Authorization Bearer:

Request Body:
```json
{
    "email": "naufal",
    "password": "mysecretpass"
}
```
Response Body Success :
```json
{
    "code": 200,
    "access_token": "aahfhjkkkIIIHFKL123",
    "refresh_token": "llllkjhggfUUTDS123",
}
```
Response Body Error :
```json
{
    "code": 401,
    "errors": "Username or password is invalid.",
}
```
## Update User API
Endpoint : PATCH /api/v1/users/current

Headers :
- Authorization Bearer:

Request Body:
```json
{
    "code": 200,
    "username": "newUsername", // optional
    "password": "newPassword", // optional
    "email": "newEmail@gmail.com", // optional
    "profilePic": "www.gambar.com", // optional
    "gender": "Male", // optional
    "country": "Indonesia", // optional
    "profilePic": "www.gambar.com" // optional
}
```
Response Body Success :
```json
{
    "code": 400,
    "errors": "Password must be at least 6 character length.",
}
```
Response Body Error :
```json
{
    "code": 401,
    "errors": "Username or password is invalid.",
}
```
## Get User API
Endpoint : GET /api/v1/users

Headers :
- Authorization Bearer:

Response Body Success :
```json
{
    "code": 200,
    "username": "naufalaja"
}
```
Response Body Error :
```json
{
    "code": 401,
    "errors": "Unauthorized.",
}
```
## Logout User Api

Endpoint: DELETE /api/v1/users/logout

Headers :
- Authorization Bearer:

Response Body Success :
```json
{
    "code": 200,
    "data": "OK"
}
```
Response Body Error :
```json
{
    "code": 401,
    "errors": "Unauthorized.",
}
```