
const { Builder, By, Key, until } = require('selenium-webdriver');


async function testAgregarProductoAlCarrito() {
    
    const driver = await new Builder().forBrowser('chrome').build();
    
    try {
        
        await driver.get('C:/Users/Omer/Desktop/proyectofinalpagina/index.html'); 

        
        await driver.wait(until.elementLocated(By.id('product-container')), 5000);

       
        const addToCartBtn = await driver.findElement(By.css('.add-to-cart-btn'));
        await addToCartBtn.click();

       
        await driver.sleep(1000); 

       
        const cartCount = await driver.findElement(By.id('cart-count')).getText();
        if (cartCount !== '1') {
            console.error('La cantidad de productos en el carrito no es la esperada después de agregar un producto');
            return;
        }

        console.log('La prueba pasó: Se agregó un producto al carrito correctamente');

        
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFileSync('screenshot.png', image, 'base64');
            }
        );
    } finally {
        
        
    }
}


testAgregarProductoAlCarrito();
