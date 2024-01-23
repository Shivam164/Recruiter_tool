const connection = require('../config/db');
const { candidateAlreadyExistOrNot, candidateScore} = require('../utils/candidate');

exports.addCandidate = async function(req, res, next){
    const {name, emailId, phone, reactJS, nodeJS, expected_salary, current_status } = req.body;

    try{
        const result = await candidateAlreadyExistOrNot(emailId);
        const candidateAlreadyExist = result.length !== 0;

        if(candidateAlreadyExist){
            res.status(400).json({"message": "Email id is already taken"});
        }else{
            const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
            const score = candidateScore(reactJS, nodeJS);

            const insertQuery = `INSERT INTO ${tableName} (Name, Email, Phone, ReactJS, NodeJS, Score, Expected_Salary, Current_Status)
                                VALUES ('${name}', '${emailId}', '${phone}', ${reactJS}, ${nodeJS}, ${score}, ${expected_salary}, '${current_status}')`;

            connection.query(insertQuery, function(err, results, fields){
                if(err){
                    throw err;
                }
                res.status(200).json({"message": "Candidate added!"})
            })
        }
    }catch(err){
        next(err);
    }
}

exports.updateCandidate = async function(req, res, next){
    const {name, emailId, phone, reactJS, nodeJS, expected_salary, current_status } = req.body;
    try{
        const result = await candidateAlreadyExistOrNot(emailId);
        const candidateAlreadyExist = result.length !== 0;

        if(candidateAlreadyExist){
            const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
            const score = candidateScore(reactJS, nodeJS);
            
            const updateQuery = `UPDATE ${tableName}
                                SET Name = '${name}',
                                Phone = '${phone}',
                                ReactJS = ${reactJS},
                                NodeJS = ${nodeJS},
                                Score = ${score},
                                Expected_Salary = ${expected_salary},
                                Current_Status = '${current_status}'
                                WHERE Email = '${emailId}'`;

            connection.query(updateQuery, function(err, resuts, fields){
                if(err){
                    throw err;
                }
                res.status(200).json({"message": "Details updated!"})
            })

        }else{
            res.status(400).json({"message": "Bad requeset"});
        }

    }catch(err){
        next(err);
    }
}

exports.deleteCandidate = async function(req, res, next){
    const {emailId} = req.body;
    try{
        const result = await candidateAlreadyExistOrNot(emailId);
        const candidateAlreadyExist = result.length !== 0;

        if(candidateAlreadyExist){
            const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
            
            const deleteQuery = `DELETE FROM ${tableName} WHERE Email = '${emailId}'`;

            connection.query(deleteQuery, function(err, results, fields){
                if(err){
                    throw err;
                }
                res.status(200).json({"message": "Candidate removed"})
            })

        }else{
            res.status(400).json({"message": "Bad requeset"});
        }

    }catch(err){
        next(err);
    }
}

exports.getSingleCandidate = function(req, res, next){
    const applicantID = req.query.id;
    try{
        const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
        const getCandidateQuery = `SELECT * FROM ${tableName} WHERE ApplicantID = '${applicantID}'`;

        connection.query(getCandidateQuery, function(err, results, fields){
            if(err){
                throw err;
            }
            res.status(200).json({"candidate": results});
        })
    }catch(err){
        next(err);
    }
}

exports.getAllCandidates = async function(req, res, next){
    try{
        const tableName = `${process.env.CANDIDATE_TABLE_NAME}`;
        const getCandidatesQuery = `SELECT * FROM ${tableName}`;

        connection.query(getCandidatesQuery, function(err, results, fields){
            if(err){
                throw err;
            }
            res.status(200).json({"candidates": results});
        })
    }catch(err){
        next(err);
    }
}