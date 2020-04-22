// Put your applicaiton javascript here
$(document).ready(function() {
  $(document).on('click', '.js-quantity-button', function(event){
    let
      $button = $(this),
      $form = $button.closest('form'),
      $quantity = $form.find('.js-quantity-field'),
      quantityValue = parseInt($quantity.val())
      max = $quantity.attr('max') ? parseInt($quantity.attr('max')) : null;

      if($button.hasClass('plus')){
        $quantity.val(quantityValue + 1).change()
      }
      else if ($button.hasClass('minus')){
        $quantity.val(quantityValue - 1).change()

      }

    $(document).on('change', '.js-quantity-field', function(event){
      let
        $field = $(this),
        $form = $field.closest('form'),
        $quantityText = $form.find('.js-quantity-text'),
        shouldDisableMinus = parseInt(this.value) === 1,
        $minusbutton = $form.find('.js-quantity-button.minus');

        $quantityText.text(this.value);

      if (shouldDisableMinus){
        $minusbutton.prop('disabled', true);
      }
      else if ($minusbutton.prop('disabled') === true) {
        $minusbutton.prop('disabled', false);
      }

    });



  });
});
