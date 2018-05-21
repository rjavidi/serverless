'use strict';

var moment = require('moment');

exports.handler = (event, context, callback) => {

    callback(null, {
        "statusCode": 200,
        "body": '"sagi.png"',
        "headers":
        {
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Origin": "http://website-s3bucket-16hiz7ihxfyan.s3-website-us-east-1.amazonaws.com"
        }
    });
}

