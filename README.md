# Family Finance BE

## To Do

- Build Admin Panel
- Files storage
- Authentication
- Hash passwords with bcrypt
- Authorization
- "Mine" APIs
  - GetAll Mine
  - Get Mine
  - Create Mine
  - Update Mine
  - Delete Mine
- Handle error cases
  - Unauthorized
- User activity log
- Add relations inclusion control to API calls
- Add seed data to models
- Add content localization
- Emailing Service
- PDF Generator
- Turn into microservices

## On Hold

- Find all Pagination
- Update many endpoints

## Technical Features

### Apps

- Swagger
  - Page URL: /
  - JSON URL: /api-json
  - Yaml URL: /api-yaml

### Models

#### user

- props
  - name
  - username
  - email
  - password
- relations
  - role
  - family
  - records

#### role

- props
  - name
- relations
  - users

#### family

- props
  - name
- relations
  - users
  - accounts

#### account

- props
  - name
  - currency
  - description
- relations
  - family
  - transfersFrom
  - transfersTo
  - categories

#### transfer

- props
  - amount
  - exchange rate
- relations
  - from
  - to

#### category

- props
  - name
  - type
- relations
  - account
  - records

#### record

- props
  - value
  - note
  - timestamp
- relations
  - category
  - user
