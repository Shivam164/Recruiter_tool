# Recruiter Tool

This tool helps recruiter to manage information realted to candidates.

## Preview

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


