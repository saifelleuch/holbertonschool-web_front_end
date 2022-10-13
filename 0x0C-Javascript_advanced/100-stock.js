var stock = {
    macbook: 2,
    iphone: 4,
  };
  function processPayment(itemName) {
    var itemlower = itemName.toLowerCase();
    stock[itemlower] = stock[itemlower] - 1;
    console.log('Payment is being processed for item ' + itemName);
  }
  function processError(itemName) {
    var itemlower = itemName.toLowerCase();
    console.log('No more ' + itemlower + ' in stock');
    console.log('Payment is not being processed');
  }
  function processOrder(itemName, callbackPayment, callbackError) {
    var itemlower = itemName.toLowerCase();
    console.log('Verifying the stock of ' + itemName);
    if (stock[itemlower] > 0) {
      callbackPayment(itemName);
    } else {
      callbackError(itemName);
    }
  }
  var msg = prompt(
    'Please enter the item you would like to purchase (Macbook, iPhone)'
  );
  processOrder(msg, processPayment, processError);