# Node.js version -> v18.1.0

# Installation
 - Use `./run.bat` in project root 2 start app with docker
 - If you don't accept easy way go to `wwg-backend` & `wwg-frontend` & run `npm i` then `npm start` in both directories
 - No documentation 4 now I'll add it later, probably not, but use `./wwg-backend/src/type/requestBodyPropertiesType.ts` as documentation 4 Add & Update requests (POST & PATCH)
 - 2 remove endpoint use DELETE method & 2 get list use GET method -> see? Easy
 - DELETE endpoint requires only `protocol://host.domain/todo/delete/${todo_id}` and voila!
 - Frontend is in angular, I wanted 2 have some fun making this project so I decided 2 it
 - Any further questions? Email me or sth
 - Oh! I almost forgot, CREATE/ADD (POST method endpoint) accepts only Array of data -> easier way 2 send a lot of data at once ;)
 - Same with UPDATE