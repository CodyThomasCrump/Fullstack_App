const secrets = {
    //The URL that we use to connect to the MongoDB Atlas Cluster 
    dbUrl: 'mongodb+srv://Cody_Crump:3fvEiG9s3wcJ92Z@cluster1-ns6c8.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;