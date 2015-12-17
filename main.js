var lastPrice;

function refreshLastPrice() {
  $lastPrice = $('#lastPrice');
  $lastPrice.html("");
  $.get("https://vip.bitcoin.co.id/api/btc_idr/ticker")
    .then(function (data) {
      lastPrice = JSON.parse(data).ticker.last
      $lastPrice.html(lastPrice);
  });
}

refreshLastPrice();

$('#btc').keyup(function() {
    btcVal = parseFloat($(this).val());
    if (btcVal) {
      idrVal = btcVal * lastPrice
      $('#idr').val(parseInt(idrVal));
    }
});

$('#idr').keyup(function() {
    idrVal = parseInt($(this).val());
    if (idrVal) {
      btcVal = idrVal / lastPrice;
      $('#btc').val(btcVal.toFixed(8));
    }
});