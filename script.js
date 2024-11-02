const puppeteer = require("puppeteer");

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

(async () => {
    // Запускаем браузер
    const browser = await launch();
    const page = await browser.newPage();

    // Загрузка нужного URL
    await page.goto(webPageAddress.textContent, { waitUntil: 'networkidle2' });
    // await page.goto('https://example.com', { waitUntil: 'networkidle2' });

    // Сохранение страницы в PDF
    await page.pdf({
        path: pdfFileName.textContent,  // Название выходного файла
        // path: 'page.pdf',            // Название выходного файла
        format: pdfFormat.textContent,  // Формат (можно настроить)
        // format: 'A4',                // Формат (можно настроить)
        printBackground: true,       // Включаем фоновое изображение
        scale: 1,                    // Масштабируем страницу
        preferCSSPageSize: true,     // Используем CSS размеры страницы (если доступны)
    });

    await browser.close();
    console.log('Страница сохранена в page.pdf');
})();

// Этот скрипт загрузит указанную веб-страницу, создаст её полное изображение и сохранит в формате PDF.
// Puppeteer подходит лучше всего, так как позволяет гибко настраивать качество, формат, и точность отображения веб-контента в PDF. 