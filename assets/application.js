// Put your applicaiton javascript here
$(document).ready(function() {

    let
      onQuantityButtonClick = function(event){
        let
        $button = $(this),
        $form = $button.closest('form'),
        $quantity = $form.find('.js-quantity-field'),
        quantityValue = parseInt($quantity.val())
        max = $quantity.attr('max') ? parseInt($quantity.attr('max')) : null;

        if($button.hasClass('plus') && (max === null || quantityValue + 1 <= max)){
          $quantity.val(quantityValue + 1).change()
        }
        else if ($button.hasClass('minus')){
          $quantity.val(quantityValue - 1).change()
        }
       },

      onQuantityFieldChange = function(event){
        let
          $field = $(this),
          $form = $field.closest('form'),
          $quantityText = $form.find('.js-quantity-text'),
          shouldDisableMinus = parseInt(this.value) === 1,
          $minusbutton = $form.find('.js-quantity-button.minus'),
          shouldDisableplus = parseInt(this.value) === parseInt($field.attr('max')),
          $plusbutton =$form.find('.js-quantity-button.plus');

          $quantityText.text(this.value);

        if (shouldDisableMinus){
          $minusbutton.prop('disabled', true);
        }
        else if ($minusbutton.prop('disabled') === true) {
          $minusbutton.prop('disabled', false);
        }


        if (shouldDisableplus){
          $plusbutton.prop('disabled', true);
        }
        else if ($plusbutton.prop('disabled') === true) {
          $plusbutton.prop('disabled', false);
        }

      },
      onVariantRadioChange = function(event){
        let
          $radio = $(this),
          $form = $radio.closest('form'),
          max = $radio.attr('data-inventory-quantity'),
          $quantity = $form.find('.js-quantity-field'),
          $addtoCartButton = $form.find('#add-to-cart-button');

          if ( $addtoCartButton.prop('disabled') === true){
            $addtoCartButton.prop('disabled', false);
          }

          $quantity.attr('max', max);

          if(parseInt($quantity.val()) > max){
            $quantity.val(max).change()
          }

      };

    $(document).on('click', '.js-quantity-button', onQuantityButtonClick);

    $(document).on('change', '.js-quantity-field', onQuantityFieldChange);

    $(document).on('change', '.js-variant-radio', onVariantRadioChange);


});
