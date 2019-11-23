'use strict'

const AWS = require('aws-sdk');

const Resource = require('../model/resource');

module.exports.handler = (event,context,callback) => {

  s3upload(event, context)
    .then((result) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    })
    .catch((error) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      });
    });


}

function s3upload(event,context){


  return new Promise((resolve,reject)=>{

    console.log(event.body);
    console.log("くる");

    const requestBody = event.body;

    console.log("だいじ？");



    const [ head , body ] = requestBody.img.split(",");

    const [contentType,ext] = ((head) => {
      head = head.replace("jpeg","jpg");
      head = head.replace(";base64","");

      const [,type] = head.split(":");
      const [ext] = ["jpg","jpeg","png","gif"].filter( ext => {
        return new RegExp(ext).test(head);
      })
      return [type,ext]
    })(head);
    
    const img = Buffer.from(body,"base64");




    const resource = new Resource();

    const params = {
      Bucket: resource.getBucketName(),
      Key: `${requestBody.name}.${ext}`,
      Body: img,
      ContentType: contentType
    };


    resource.savePromiseForS3(params).then(resolve());

  })
}