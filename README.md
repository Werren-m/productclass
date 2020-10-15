# productclass

## User Add Donation to a Campaign

### POST {{url}}/donate/add/:id

parameters : Campaign id
headers : needed access token

Body
url-encoded

```
amount  = "type : Float",
share   = "type : Booleans"
comment = "type : String"
```

Respond (200 - OK)

```
{
Success : true,
message : `Thank you for donating Rp. ${amount} for this campaign`
}
```

Respond (400 - Bad Request)

```
{
Success : false,
message : "This Campaign's goal has been acheived"
}
```

Respond (400- Bad Request)

```
{
Success : false,
message : `This Campaign only need Rp. ${expected} more, please use the rest of your money for other Campaigns`
}
```

Respond (400 - Bad Request)

```
{
Success : false,
message: "Campaign not Found"
}
```

## Get all donated User's logs

### GET {{url}}/donate/all

Headers
need access_token

Body
not needed

Respond (200 - OK)

```

```

Respond (400 - Bad Request)

```

```
# Team Backend

Initial Development Branch

# User API
## REGISTER
---
### Method POST (https://infinite-reef-41011.herokuapp.com/) 
### Request Header
> none
### Request Body
>email : <asset_email> <br>password: <asset_password> <br>name: <asset_name><br>
### Response (200)
>"token": "<your_token>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Login
---
### Method POST  (https://infinite-reef-41011.herokuapp.com/login)
### Request Header
> none
### Request Body
>email : <asset_email> <br>password: <asset_password>
### Response (200)
>"token": "<your_token>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Get All User
---
### Method GET (https://infinite-reef-41011.herokuapp.com/allusers)
### Request Header
> "token": "<your_token>"
### Request Body
> none
### Response (200)
>**User Table** <br>"email": "<asset_email>"<br> "password": "<asset_password>" <br> "name": "<asset_name>" <br> "photo": "<asset_photo>"<br>"creditcard": "<asset_creditcard>"<br>"role": "<asset_role>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Delete User
---
### Method DELETE (https://infinite-reef-41011.herokuapp.com/)
### Request Header
> "token": "<your_token>"
### Request Body
> none
### Response (200)
>"msg": "user deleted"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Update User
---
### Method PUT (https://infinite-reef-41011.herokuapp.com)
### Request Header
> "token": "<your_token>"
### Request Body
> "email": "<asset_email>"<br> "password": "<asset_password>" <br> "name": "<asset_name>" <br> "creditcard": "<asset_creditcard>"<br>"role": "<asset_role>" 
### Response (200)
> "token": "<your_token>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Update User Image
---
### Method PUT (https://infinite-reef-41011.herokuapp.com/image)
### Request Header
> "token": "<your_token>"
### Request Body
> "image": "<your_image>"
### Response (200)
> "token": "<your_token>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>
