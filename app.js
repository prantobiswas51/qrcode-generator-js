let imgBox = document.getElementById("imgBox");
let qrtext = document.getElementById("textToQr");
let qrImage = document.getElementById("qrImage");


function generateQr(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}