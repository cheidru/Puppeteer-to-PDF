const startBTN = document.getElementById('start-conversion');
const pdfFormat = document.getElementById('paper-format');
const webPageAddress = document.getElementById('web-page-address');
const pdfFileName = document.getElementById('pdf-file-name');

const startBTNAnable = {
    addressAvl: false,
    fileNameAvl: false
};

webPageAddress.addEventListener('change', () => {
    startBTNAnable.addressAvl = webPageAddress.textContent.length > 0 ? true : false;
    checkBTN();
})

pdfFileName.addEventListener('change', () => {
    startBTNAnable.fileNameAvl = pdfFileName.textContent.length > 0 ? true : false;
    checkBTN();
})

function checkBTN() {
    if(startBTNAnable.addressAvl && startBTNAnable.fileNameAvl) {
        startBTN.removeAttribute('disabled');
    } else {
        startBTN.setAttribute('disabled');
    }
}