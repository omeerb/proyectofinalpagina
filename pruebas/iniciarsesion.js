const { Builder, By, Key, until } = require('selenium-webdriver');

async function iniciarSesion() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
   
    await driver.get('C:/Users/Omer/Desktop/proyectofinalpagina/login.html');

    
    await driver.findElement(By.id('email')).sendKeys('correo@example.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('password')).sendKeys('contraseña123', Key.RETURN);
    await driver.sleep(3000);

    
    await driver.wait(until.urlContains('C:/Users/Omer/Desktop/proyectofinalpagina/index.html'), 5000);
    await driver.sleep(1000);

  
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('C:/Users/Omer/Desktop/proyectofinalpagina/index.html')) {
      console.log('Inicio de sesión exitoso!');
      await driver.sleep(1000);
    } else {
      console.log('Fallo al iniciar sesión');
      await driver.sleep(5000);
    }
  } finally {
    
    await driver.quit();
  }
}

iniciarSesion();
