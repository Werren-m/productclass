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
