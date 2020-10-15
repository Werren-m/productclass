# productclass

# Team Backend

Initial Development Branch

# User API

## REGISTER

---

### Method POST (https://infinite-reef-41011.herokuapp.com/)

### Request Header

> none

### Request Body

> email : <asset_email> <br>password: <asset_password> <br>name: <asset_name><br>

### Response (200)

> "token": "<your_token>"

### Response (400 - Bad Request)

> "msg": "<error_msg>"

---

<br>

## Login

---

### Method POST (https://infinite-reef-41011.herokuapp.com/login)

### Request Header

> none

### Request Body

> email : <asset_email> <br>password: <asset_password>

### Response (200)

> "token": "<your_token>"

### Response (400 - Bad Request)

> "msg": "<error_msg>"

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

> **User Table** <br>"email": "<asset_email>"<br> "password": "<asset_password>" <br> "name": "<asset_name>" <br> "photo": "<asset_photo>"<br>"creditcard": "<asset_creditcard>"<br>"role": "<asset_role>"

### Response (400 - Bad Request)

> "msg": "<error_msg>"

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

> "msg": "user deleted"

### Response (400 - Bad Request)

> "msg": "<error_msg>"

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

> "msg": "<error_msg>"

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

> "msg": "<error_msg>"

---

<br>

## User Add Donation to a Campaign

### POST (https://infinite-reef-41011.herokuapp.com/donate/campaign/:id)

parameters : Campaign id
headers : needed access token

### Body

url-encoded

```
amount  = "type : Float",
share   = "type : Booleans"
comment = "type : String"
```

### Respond (200 - OK)

````
{
    "Success": true,
    "message": "Thank you for donating Rp. 2000 for this campaign",
    "data": {
        "id": "<donation_id>",
        "User_id": "<asset_user_id>",
        "Campaign_id": "<asset_campaign_id>",
        "amount": "<asset_amount>",
        "share": "<asset_condition>",
        "comment": "<asset_comment>",
        "updatedAt": "2020-10-15T08:49:59.655Z",
        "createdAt": "2020-10-15T08:49:59.655Z",
        "date": "<asset_date>"
    }
}
```

### Respond (400 - Bad Request)

````

{
Success : false,
message : "This Campaign's goal has been acheived"
}

```

### Respond (400- Bad Request)

```

{
Success : false,
message : `This Campaign only need Rp. ${expected} more, please use the rest of your money for other Campaigns`
}

```

### Respond (400 - Bad Request)

```

{
Success : false,
message: "Campaign not Found"
}

```

## Get all donated User's logs

### GET (https://infinite-reef-41011.herokuapp.com/donate/campaign)

Headers
need access_token

Body
not needed

Respond (200 - OK)

```

{
"Success": true,
"Result": [
{
"id": "<donation_id>",
"User_id": "<asset_user_id>",
"Campaign_id": "<asset_campaign_id>",
"amount": "<asset_amount>",
"share": "<asset_condition>",
"comment": "<asset_comment>",
"date": "<asset_date>"
"updatedAt": "2020-10-15T08:49:59.655Z",
"createdAt": "2020-10-15T08:49:59.655Z",
}
]

}

```

### Respond (400 - Bad Request)

```

{
Success : false,
message : "Campaign's not found"
}

```
### Respond (401 - Forbidden)
```

{
Success : false,
message : "token not valid"
}

```

```
