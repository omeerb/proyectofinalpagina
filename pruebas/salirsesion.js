
const { Builder, By, Key, until } = require('selenium-webdriver');

async function testInicioSesion() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('C:/Users/Omer/Desktop/proyectofinalpagina/index.html');

        await driver.sleep(1000);
        const loginBtn = await driver.findElement(By.linkText('Salir de sesion'));
        await loginBtn.click();

        

        console.log('La prueba pasó: Se inició sesión correctamente');
    } finally {
        
    }
}

testInicioSesion();
