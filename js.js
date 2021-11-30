var $ = function (id) {
  return document.getElementById(id);
};
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

var bucketName = 'sangnc1-aws-test';
var bucketRegion = 'us-west-2';
var IdentityPoolId = IDENTITY_POOL_ID;

AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });

const uploadFile = (e) => {
  $("result").innerText = e.target.value;

  // handle file : file : e.target.value
};

const uploadFileToS3 = (e) => {
  // handle send to S3 
   var files = document.getElementById('fileUpload').files;
   if (files) 
   {
     var file = files[0];
     var fileName = file.name;
     var filePath = 'my-first-bucket-path/' + fileName;
     var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-    first-bucket/' +  filePath;
     s3.upload({
        Key: filePath,
        Body: file,
        ACL: 'public-read'
        }, function(err, data) {
        if(err) {
        reject('error');
        }
        alert('Successfully Uploaded!');
        }).on('httpUploadProgress', function (progress) {
        var uploaded = parseInt((progress.loaded * 100) / progress.total);
        $("progress").attr('value', uploaded);
      });
   }
};
window.onload = function () {
  $("upload").onchange = uploadFile;
  //$("uploadS3").onchange = uploadFileToS3;
};
