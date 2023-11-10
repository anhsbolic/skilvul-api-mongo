# skilvul-api-mongo

For Testing Purpose

Todo List API Services using Express JS

## Installation and Setup Instructions

### With Docker

#### Prerequisites

1. Docker
2. Docker Compose
3. Git
4. Node.js
5. NPM

#### Installation

1. Clone this repository: `git clone
2. Change directory to the project: `cd skilvul-api-mongo`
3. Install dependencies: `npm install`
4. Build the application: `docker-compose build`
5. Run the application: `docker-compose up`
6. The application will be available at: `http://localhost:3001`
7. To stop the application: `docker-compose down`
8. To run the application in background: `docker-compose up -d`
9. To stop the application in background: `docker-compose stop`
10. To remove the application in background: `docker-compose rm`

### Without Docker

#### Prerequisites

1. Git
2. Node.js
3. NPM
4. MongoDB

#### Installation

1. Clone this repository: `git clone
2. Change directory to the project: `cd skilvul-api-mongo`
3. Install dependencies: `npm install`
4. Run the application: `npm start` or `npm run dev` for development mode
5. The application will be available at: `http://localhost:3001`

## Domain Services

### Task

1. Create Task
2. Get All Tasks with filters
3. Get Task By Id
4. Update Task
5. Delete Task

## API Documentation

https://documenter.getpostman.com/view/2575881/2s946icWrY

### Task

#### Create Task

##### Request

```http
POST /api/v1/tasks
```

##### Body

```json
{
  "description": "Description 1",
  "status": "active"
}
```

##### Response

```json
{
  "code": 201,
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": {
      "_id": "5f9b0b7b7f0b9b0017f0b9b0",
      "status": "active",
      "description": "Description 1",
      "createdAt": "2023-07-19T15:08:27.000Z",
      "updatedAt": "2023-07-19T15:08:27.000Z",
      "__v": 0
    }
  }
}
```

#### Get All Tasks with filters

##### Request

```http
GET /api/v1/tasks?status=active
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Tasks retrieved successfully",
  "data": {
    "tasks": [
      {
        "_id": "5f9b0b7b7f0b9b0017f0b9b0",
        "status": "active",
        "description": "Description 1",
        "createdAt": "2023-07-19T15:08:27.000Z",
        "updatedAt": "2023-07-19T15:08:27.000Z",
        "__v": 0
      }
    ]
  },
  "meta": {
    "total_filtered": 1
  }
}
```

#### Get Task By Id

##### Request

```http
GET /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Task retrieved successfully",
  "data": {
    "task": {
      "_id": "5f9b0b7b7f0b9b0017f0b9b0",
      "status": "active",
      "description": "Description 1",
      "createdAt": "2023-07-19T15:08:27.000Z",
      "updatedAt": "2023-07-19T15:08:27.000Z",
      "__v": 0
    }
  }
}
```

#### Update Task

##### Request

```http
PUT /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0
```

##### Body

```json
{
  "description": "Description 1",
  "status": "active"
}
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "task": {
      "_id": "5f9b0b7b7f0b9b0017f0b9b0",
      "status": "active",
      "description": "Description 1",
      "createdAt": "2023-07-19T15:08:27.000Z",
      "updatedAt": "2023-07-19T15:08:27.000Z",
      "__v": 0
    }
  }
}
```

#### Delete Task

##### Request

```http
DELETE /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Task deleted successfully"
}
```

## Author

- [Anhar Solehudin] (anhsbolic@gmail.com)



