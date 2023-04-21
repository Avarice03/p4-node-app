# RecipeEz (Backend)

## Introduction

The RecipeEz (Recipe made Easy) app is a digital cookbook that offers a wide range of recipes from various cuisines. The app allows users to search for recipes by its main ingredient (e.g beef, chicken, pork, seafood, vegetarian, others), or its cuisine (e.g Filipino, Japanese, Chinese, Western, etc.), making it easy to find a meal that fits their needs. With easy-to-follow instructions, detailed ingredient lists, and helpful tips, the app enables users to cook delicious meals with ease and confidence.

## Database and API design

### Endpoints

|  #  | Action |              URL               | HTTP Verb |  CRUD  |                                           Description                                           |
| :-: | :----: | :----------------------------: | :-------: | :----: | :---------------------------------------------------------------------------------------------: |
|  1  | Create |         /api/v1/signup         |   POST    | Create |                                        Create a new user                                        |
|  2  | Create |         /api/v1/login          |   POST    | Create |                                    Create user session token                                    |
|  3  | Create |      /api/v1/recipes/user      |   POST    | Create |                                  User can create a new recipe                                   |
|  4  |  Read  |          /api/v1/user          |    GET    |  Read  |                                    Gets the details of user                                     |
|  5  |  Read  |        /api/v1/recipes         |    GET    |  Read  |                                 Gets the list of public recipes                                 |
|  6  |  Read  |      /api/v1/recipes/user      |    GET    |  Read  |                            Gets the list of public and user recipes                             |
|  7  |  Read  |    /api/v1/recipes/personal    |    GET    |  Read  |                               Gets the list of user recipes only                                |
|  8  |  Read  |        /api/v1/recipes?        |    GET    |  Read  | User can add a query parameter that will return the recipes that matches the cuisine & category |
|  9  | Update |          /api/v1/user          |    PUT    | Update |                              User can update their account details                              |
| 10  | Update | /api/v1/recipes/user/:recipeId |    PUT    | Update |                             User can update the details of a recipe                             |
| 11  | Delete |          /api/v1/user          |  DELETE   | Delete |                               User can soft delete their account                                |
| 12  | Delete | /api/v1/recipes/user/:recipeId |  DELETE   | Delete |                           User can soft delete their selected recipe                            |

## User Stories

### As a developer, I can add data to the database.

#### Acceptance criteria

- I can add new users
- I can add new recipes

### As a developer, I can access data from MongoDB.

#### Acceptance criteria

- I can view the list of users
- I can view the list of recipes
- I can view the list of recipes by cuisine
- I can view the list of recipes by category

### As a developer, I can update data from MongoDB.

#### Acceptance criteria

- I can update users
- I can update recipes

### As a developer, I can delete data from MongoDB.

#### Acceptance criteria

- I can delete users
- I can delete recipes

### As a developer, I can integrate the backend service to the frontend

#### Acceptance criteria

- I can access the endpoints from the backend using React
- I can use the data provided by the endpoints
