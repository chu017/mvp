var aws = require('aws-sdk');
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY
  secretAccessKey: AWS_SECRET_KEY
});

exports = module.exports = {
  sign: function(filename, filetype) {
      var s3 = new aws.S3();

      var params = {
          Bucket: SOME_BUCKET,
          Key: filename,
          Expires: 60,
          ContentType: filetype
      };

      s3.getSignedUrl(‘putObject’, params, function(err, data) {
          if (err) {
              console.log(err);
              return err;
          } else {
              return data;
          }
      });
  }
};

// https://SOME_BUCKET.s3.amazonaws.com/filename.jpg?AWSAccessKeyId=AKIAJDTJA3OMXXXXXXXX&Content-Type=image%2Fjpeg&Expires=1436472979&Signature=%2Fy5LRLwSH%2FzqD1nK5Jjxxxxx84%3D
