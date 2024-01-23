const connection = require('../config/db');

exports.candidateAlreadyExistOrNot = async (emailId) => {
    const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
    const query = `SELECT * FROM ${tableName} WHERE Email = '${emailId}'`;

    try {
        const queryResult = await new Promise((resolve, reject) => {
            connection.query(query, (err, results, fields) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log(queryResult);
        return queryResult;
    } catch (error) {
        // Handle error
        console.error('Error:', error);
        throw error;
    }
}

exports.candidateScore = (experienceWithReactJS, experienceWithNodeJS) => {
    let reactJSScore, nodeJSScore;
    if(experienceWithReactJS < 1){
        reactJSScore = 1;
    }else if(experienceWithReactJS <= 2){
        reactJSScore = 2;
    }else {
        reactJSScore = 3;
    }

    if(experienceWithNodeJS < 1){
        nodeJSScore = 1;
    }else if(experienceWithNodeJS <= 2){
        nodeJSScore = 2;
    }else {
        nodeJSScore = 3;
    }

    return (reactJSScore + nodeJSScore);
}