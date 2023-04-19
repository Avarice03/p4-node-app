# RecipeEz (Backend)

## Introduction

The RecipeEz (Recipe made Easy) app is a digital cookbook that offers a wide range of recipes from various cuisines. The app allows users to search for recipes by its main ingredient (e.g beef, chicken, pork, seafood, vegetarian, others), or its cuisine (e.g Filipino, Japanese, Chinese, Western, etc.), making it easy to find a meal that fits their needs. With easy-to-follow instructions, detailed ingredient lists, and helpful tips, the app enables users to cook delicious meals with ease and confidence.

## Database and API design

### Endpoints

|  #  | Action |           URL            | HTTP Verb |  CRUD  |                                           Description                                           |
| :-: | :----: | :----------------------: | :-------: | :----: | :---------------------------------------------------------------------------------------------: |
|  1  | Create |      /api/v1/users       |   POST    | Create |                                        Create a new user                                        |
|  2  | Create |      /api/v1/recipe      |   POST    | Create |                                       Create a new recipe                                       |
|  3  |  Read  |      /api/v1/recipe      |    GET    |  Read  |                                  Gets the list of all recipes                                   |
|  4  |  Read  |    /api/v1/recipe/:id    |    GET    |  Read  |                                     Gets a specific recipe                                      |
|  5  |  Read  |  /api/v1/recipe/public   |    GET    |  Read  |                                 Gets the list of public recipes                                 |
|  6  |  Read  |  /api/v1/recipe/search?  |    GET    |  Read  |      User can add a query parameter that will return the recipes that matches recipe name       |
|  6  |  Read  |     /api/v1/recipe?      |    GET    |  Read  | User can add a query parameter that will return the recipes that matches the cuisine & category |
|  7  |  Read  |      /api/v1/users       |    GET    |  Read  |                                     Gets the list of users                                      |
|  8  |  Read  |    /api/v1/users/:id     |    GET    |  Read  |                                      Gets a specific user                                       |
|  9  |  Read  |  /api/v1/users/recipes   |    GET    |  Read  |                           Gets the list of recipes of a specific user                           |
| 10  | Update | /api/v1/recipe/:recipeId |    PUT    | Update |                         Updates details of a recipe with the given id.                          |
| 11  | Update |  /api/v1/users/:userId   |    PUT    | Update |                          Updates details of a user with the given id.                           |
| 12  | Delete | /api/v1/recipe/:recipeId |  DELETE   | Delete |                    Soft deletes the recipe with the given id from the list.                     |
| 13  | Delete |  /api/v1/users/:userId   |  DELETE   | Delete |                     Soft deletes the user with the given id from the list.                      |

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
- I can search the list of recipes by name

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
