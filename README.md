# Recruiter Tool

This tool helps recruiter to manage information realted to candidates.

## Preview
https://recruiter-tool-rzg2.onrender.com

## Steps to deploy the application

1. Start with creating account on [Render](https://render.com) using GitHub. Make sure the GitHub account that is being used on the Render platform, it should have the repository of the application we are going to deploy.

    > **Note:** We First need to deploy backend part of the application.

2. Start by clicking on the `New` button on the dashboard page and choose `Web Service`.

3. Choose the repository of the application.

4. You will be prompted with set of details you need to fill. Fill as shown below.

    ```
    Name: <NAME_FOR_THE_SERVICE> // Can be anything
    Region: <REGION_WHERE_SERVICE_WILL_BE_HOSTED>
    Branch: master
    Root Directory: ./backend
    Runtime: Node
    Build Command: npm install
    Start Command: node server.js
    ```

5. In the `Environment Variable` section add two variables along with value.

    ```
    DATABASE_URL=<LINK_TO_SQL_DATABASE>
    CANDIDATE_TABLE_NAME=<TABLE_NAME>
    ```

    > **Note:** Client side of the application will be deployed now.

6. Start by clicking on the `New` button on the dashboard page and choose `Static Site`.

7. Choose the repository of the application.

8. You will be prompted with set of details you need to fill. Fill as shown below.

    ```
    Name: <NAME_FOR_THE_SITE> // Can be anything
    Region: <REGION_WHERE_SERVICE_WILL_BE_HOSTED>
    Branch: master
    Root Directory: ./client
    Runtime: Node
    Build Command: npm run build
    Start Command: npm start
    ```

9. In the `Environment Variable` section add two variables along with value.

    ```
    REACT_APP_API_URL=<LINK_TO_SERVER>
    ```

## Steps to setup the project localy

1. Start with cloning the repository locally.
    ```
    git clone <REPO_LINK>
    ```

2. Install all the dependencies using following command in both the folder.
    ```
    npm install
    ```
3. Create config.env file in backend folder and .env file in client folder to store some credentials.

    `./backend/config.env`
    ```
    DATABASE_URL=<LINK_TO_SQL_DATABASE>
    PORT=<PORT_TO_RUN_SERVER>
    CANDIDATE_TABLE_NAME=<TABLE_NAME>
    ```

    `./client/.env`
    ```
    REACT_APP_API_URL=<LINK_TO_SERVER>
    ```

4. Run the application.
    ```
    npm start ./client && node backend/server.js
    ```


