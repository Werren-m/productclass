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

# Category API

## Get All Category
---
### Method GET (https://infinite-reef-41011.herokuapp.com/category)
### Request Header
> none
### Request Body
> none
### Response (200)
>**Category Table** <br>"name": "<asset_name>"<br> "image": "<asset_image>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Add Category
---
### Method POST (https://infinite-reef-41011.herokuapp.com/category/add)
### Request Header
> "token": "<your_token>"
### Request Body
>"name": "<asset_name>"<br> "image": "<asset_image>"
### Response (200)
>"name": "<asset_name>"<br> "image": "<asset_image>"
### Response (409 - Conflict)
>"msg": "<error_msg>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Edit Category
---
### Method PUT (https://infinite-reef-41011.herokuapp.com/category/edit/:id)
### Request Header
> "token": "<your_token>"
### Request Params
>"id": "<category_id>";
### Request Body
>"name": "<asset_name>"<br> "image": "<asset_image>"
### Response (200)
>"name": "<asset_name>"<br> "image": "<asset_image>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Delete Category
---
### Method DELETE (https://infinite-reef-41011.herokuapp.com/category/delete/:id)
### Request Header
> "token": "<your_token>"
### Request Params
>"id": "<category_id>";
### Response (200)
>"msg": "<delete_success>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

# Campaign API

## Get All Campaign
---
### Method GET (https://infinite-reef-41011.herokuapp.com/discover)
### Request Header
> none
### Request Body
> none
### Response (200)
>**Campaign Table** <br>"title": "<asset_title>"<br> "goal": "<asset_goal>"<br>"story": "<asset_story>"<br> "due_date": "<asset_due_date>"<br>"header_image": "<asset_header_image>"<br> "CategoryId": "<asset_CategoryId>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Add Campaign
---
### Method POST (https://infinite-reef-41011.herokuapp.com/campaign/add)
### Request Header
> "token": "<your_token>"
### Request Body
>"title": "<asset_title>"<br> "goal": "<asset_goal>"<br>"story": "<asset_story>"<br> "due_date": "<asset_due_date>"<br>"header_image": "<asset_header_image>"<br> "CategoryId": "<asset_CategoryId>"
### Response (200)
>"title": "<asset_title>"<br> "goal": "<asset_goal>"<br>"story": "<asset_story>"<br> "due_date": "<asset_due_date>"<br>"header_image": "<asset_header_image>"<br> "CategoryId": "<asset_CategoryId>"
### Response (409 - Conflict)
>"msg": "<error_msg>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Edit Campaign
---
### Method PUT (https://infinite-reef-41011.herokuapp.com/campaign/edit/:id)
### Request Header
> "token": "<your_token>"
### Request Params
>"id": "<category_id>";
### Request Body
>"title": "<asset_title>"<br> "goal": "<asset_goal>"<br>"story": "<asset_story>"<br> "due_date": "<asset_due_date>"<br>"header_image": "<asset_header_image>"<br> "CategoryId": "<asset_CategoryId>"
### Response (200)
>"title": "<asset_title>"<br> "goal": "<asset_goal>"<br>"story": "<asset_story>"<br> "due_date": "<asset_due_date>"<br>"header_image": "<asset_header_image>"<br> "CategoryId": "<asset_CategoryId>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>

## Delete Campaign
---
### Method DELETE (https://infinite-reef-41011.herokuapp.com/campaign/delete/:id)
### Request Header
> "token": "<your_token>"
### Request Params
>"id": "<category_id>";
### Response (200)
>"msg": "<delete_success>"
### Response (400 - Bad Request)
>"msg": "<error_msg>"
---
<br>