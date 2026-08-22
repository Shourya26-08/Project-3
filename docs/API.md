# Project 3 API quick reference

All protected routes require `Authorization: Bearer <JWT>`.

## Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

## Projects
- POST `/api/projects`
- GET `/api/projects`
- GET `/api/projects/:id`
- POST `/api/projects/:id/members`
- DELETE `/api/projects/:id`

## Tasks
- POST `/api/tasks`
- GET `/api/tasks/project/:projectId`
- PUT `/api/tasks/:id`
- PATCH `/api/tasks/:id/status`
- DELETE `/api/tasks/:id`

## Comments
- GET `/api/comments/task/:taskId`
- POST `/api/comments`

## Notifications
- GET `/api/notifications`
- PATCH `/api/notifications/:id/read`