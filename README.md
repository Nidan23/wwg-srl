# Node.js version -> v18.1.0

# Installation
 - Use `./run.bat` in project root 2 start app with docker
 - If you don't accept easy way go to `wwg-backend` & `wwg-frontend` & run `npm i` then `npm start` in both directories
 - No documentation 4 now I'll add it later, probably not, but use `./wwg-backend/src/type/requestBodyPropertiesType.ts` as documentation 4 Add & Update requests (POST & PATCH)
 - 2 remove endpoint use DELETE method & 2 get list use GET method -> see? Easy
 - DELETE endpoint requires only `protocol://host.domain/todo/delete/${todo_id}` and voila!
 - Frontend is in angular, I wanted 2 have some fun making this project so I decided 2 use it
 - Any further questions? Email me or sth
 - Oh! I almost forgot, CREATE/ADD (POST method endpoint) accepts only Array of data -> easier way 2 send a lot of data at once ;)
 - Same with UPDATE
 - Endpoint mapping is in `./wwg-backend/src/assets/variables/variables.json` in first few lines & in `./wwg-backend/src/controller/todo.controller.ts`
 - Basically it's `http://localhost:3000/todo/${action}` -> action is `["add", "get", "getAll", "update", "delete"]` & `3000` is default port, you can add `.env` in `./wwg-backend/src/assets/env/.env`
 - butt I decided otherwise, so no .env, but every (or almost every) preparation 4 this was already made
 - I tired 2 create sth similar 2 dependency injection in Nest.js apps, let me know how it went
 - Hope 2 hear feedback from you soon