'use strict';

const AWS = require("aws-sdk");
const S3 = new AWS.S3();

module.exports = class Resource {

  getBucketName () {
    return process.env.service_name + ".input";
  }
  promiseForTakeOverData (object) {
    return new Promise((resolve,reject) => {
      resolve(object);
    })
  }

  // S3　リソースを参照
  loadPromiseForS3 (bucketName,key) {
    return new Promise((resolve,reject)=>{
      S3.getObject({
        Bucket: bucketName,Key: key
      },(err,data) => {
        if(err){
          reject(err);
        }
        resolve(data.Body);
      })
    })
  }

  // S3 保存
  savePromiseForS3 (params) {
    return new Promise((resolve,reject) => {
      S3.putObject(params,err=>{
        if(err){  
          reject(err)
        }else{
          resolve();
        }
      })
    })
  }

}