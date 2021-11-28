var $ = function (id) {
  return document.getElementById(id);
};
const uploadFile = (e) => {
  $("result").innerText = e.target.value;

  // handle file : file : e.target.value
};

const uploadFileToS3 = (e) => {
  // handle send to S3
};
window.onload = function () {
  $("upload").onchange = uploadFile;
  $("uploadS3").onchange = uploadFileToS3;
};
