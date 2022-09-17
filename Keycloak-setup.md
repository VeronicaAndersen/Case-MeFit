# Keycloak setup

## Start up keycloak and create a realm
Go to [https://app-key-cloak.herokuapp.com/auth/](https://mefitkeycloak.herokuapp.com/auth).
Go to the administration console and log in with:
Username: admin
Password: admin
Hover over master (top-left of page) and select “add realm”
Enter name: case-mefit
Click create

## Create a client
Go to clients and click create (right side of page)
Client-id: mefit-js
Root url: http://localhost:3000
Valid Redirect URIs: http://localhost:3000/*
Admin URL: http://localhost:3000
Web Origins: http://localhost:3000
Click save

## Add user registration
Go to Realm settings and select the login tab.
Set user registration to 'ON'
Set Forgot password to 'ON'
Click save

## Add user
Go to users
Click add user
Enter a name
Click save

Go to credentials
Enter a password
Change temporary to 'OFF'

Go to role mappings 
Assign roles for the user

Go to Client roles 
Choose mefit-js 
Assign roles for the user
Click save
