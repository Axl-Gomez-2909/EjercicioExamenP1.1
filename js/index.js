document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateDiscount();
  });
  
  function calculateDiscount() {
    const product1 = parseFloat(document.getElementById('product1').value);
    const product2 = parseFloat(document.getElementById('product2').value);
    const product3 = parseFloat(document.getElementById('product3').value);
    const product4 = parseFloat(document.getElementById('product4').value);
    const product5 = parseFloat(document.getElementById('product5').value);
  
    if (isNaN(product1) || isNaN(product2) || isNaN(product3) || isNaN(product4) || isNaN(product5)) {
      showAlert('danger', 'Por favor, ingresa solo números en los campos de productos.');
      return;
    }
  
    const subtotal = product1 + product2 + product3 + product4 + product5;
    const discount = calculateDiscountPercentage(subtotal);
    const total = subtotal - (subtotal * discount);
  
    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('discount').value = `Descuento ${discount*100}%`;
    document.getElementById('total').value = total.toFixed(2);
  }
  
  function calculateDiscountPercentage(subtotal) {
    if (subtotal >= 0 && subtotal < 1000) {
      return 0;
    } else if (subtotal >= 1000 && subtotal < 5000) {
      return 0.1;
    } else if (subtotal >= 5000 && subtotal < 9000) {
      return 0.2;
    } else if (subtotal >= 9000 && subtotal < 13000) {
      return 0.3;
    } else {
      return 0.4;
    }
  }
  
  function clearFields() {
    document.getElementById('discountForm').reset();
    document.getElementById('subtotal').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('total').value = '';
  }
  
  function showAlert(type, message) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    const alert = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
    alertPlaceholder.innerHTML = alert;
  }