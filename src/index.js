import puppeteer from "puppeteer";

// Создать HTTP сервер для связи с веб интерфейсом

(async () => {
    // Запускаем браузер
    const browser = await puppeteer.launch();
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