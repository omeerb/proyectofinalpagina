const { Builder, By, Key, until } = require('selenium-webdriver');

async function registrarUsuario() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
   
    await driver.get('file:///C:/Users/Omer/Desktop/proyectofinalpagina/register.html');

    
    await driver.findElement(By.id('name')).sendKeys('Nombre de Usuario');
    await driver.findElement(By.id('email')).sendKeys('correo@example.com');
    await driver.findElement(By.id('password')).sendKeys('contraseña123', Key.RETURN);

   
    await driver.wait(until.urlContains('file:///C:/Users/Omer/Desktop/proyectofinalpagina/index.html'), 5000);

    
    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('file:///C:/Users/Omer/Desktop/proyectofinalpagina/index.html')) {
      console.log('Registro de usuario exitoso!');
    } else {
      console.log('Fallo al registrar usuario');
    }
  } finally {
   
    await driver.quit();
  }
}

registrarUsuario();
