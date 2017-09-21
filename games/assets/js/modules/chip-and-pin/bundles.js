/*jslint plusplus: true, indent: 4 */
/*globals window,document,console,define */
define('modules/chip-and-pin/bundles', function () {
    'use strict';
    var data,
        bundles = {
            "spc.checkoutTitle": "Secure checkout",
            "spc.checkout.subTitle": "Select your delivery option, complete everything that's mandatory and press \"Pay now\"",
            "spc.chipAndPin.loginTitle": "Add your Clubcard details",
            "spc.chipAndPin.login.scanCardTitle": "Scan",
            "spc.chipAndPin.login.scanCard": "You can scan a Clubcard with a barcode",
            "spc.chipAndPin.login.typeTitle": "Type",
            "spc.chipAndPin.login.typeNumber": "Or you can type any Clubcard number",
            "spc.chipAndPin.login.enterClubcardButton": "Go",
            "spc.chipAndPin.login.skipLogin": "Continue without Clubcard",
            "spc.chipAndPin.login.postcode.heading": "Speed up your purchase by verifying your Clubcard",
            "spc.chipAndPin.login.postcode.intro": "Enter the postcode registered to the card.",
            "spc.chipAndPin.login.postcode.verifyPostcode": "Go",
            "spc.chipAndPin.login.postcode.skipPostcode": "Skip, I don't know the postcode",

            "spc.chipAndPin.login.validation.required": "Please enter a number.",
            "spc.chipAndPin.login.validation.inValid": "Please check the number you've entered is correct.",
            "spc.chipAndPin.login.validation.enterAPostCode": "Enter a postcode",

            "spc.chipAndPin.userDetails.heading": "Please enter your details",
            "spc.chipAndPin.userDetails.titleLabelText": "Title",
            "spc.chipAndPin.userDetails.firstNameLabelText": "First name",
            "spc.chipAndPin.userDetails.surnameLabelText": "Surname",
            "spc.chipAndPin.userDetails.emailLabelText": "Email",
            "spc.chipAndPin.userDetails.contactNumberLabelText": "Contact number",
            "spc.chipAndPin.userDetails.emailPlaceholderText": "Optional",
            "spc.chipAndPin.userDetails.contactNumberPlaceholderText": "Enter your mobile number and get text updates",
            "spc.chipAndPin.userDetails.footerMessage": "We will only use your contact details to update you on your order.",
            "spc.chipAndPin.userDetails.ageRestrictionDOBMessage": "We need you to enter your date of birth as your order contains an age restricted product",
            "spc.chipAndPin.userDetails.continueBtnText": "Continue",

            "spc.chipAndPin.delivery.storeFinderOverlayHeader": "Find a store",
            "spc.chipAndPin.delivery.storeFinderLabelText": "Enter a postcode or town to find a store",
            "spc.chipAndPin.delivery.matchingStoresOverlayHeader": "Select a store",
            "spc.chipAndPin.delivery.openingTimesHeader": "Opening hours",
            "spc.chipAndPin.delivery.storeAddressHeader": "Address",
            "spc.chipAndPin.delivery.selectStoreBtnText": "Select",
            "spc.chipAndPin.delivery.selectNotStoreBtnText": "Not available",
            "spc.chipAndPin.delivery.cncResErrorMSG": "Sorry,this item cannot be collected from store",
            "spc.chipAndPin.delivery.findAnotherStoreBtnText": "Find a different store",
            "spc.chipAndPin.delivery.sectionTitle": "Select a delivery option",
            "spc.chipAndPin.delivery.sectionTitle.multiple": "Select delivery options",
            "spc.chipAndPin.delivery.freeReturns": "FREE returns on most Tesco products (exceptions apply).",
            "spc.chipAndPin.delivery.reviewMessage": "You will be able to change your selection(s) when you review your order.",
            "spc.chipAndPin.delivery.delayWarning": "Sometimes it takes longer to deliver items to Northern Ireland, the Isle of Man, the Isles of Scilly, Orkney, Shetland and other Scottish islands. See Delivery Information for more details.",
            "spc.chipAndPin.delivery.warningModal.heading": "If you go back you'll need to re-enter all your previously selected options. Is this OK?",
            "spc.chipAndPin.delivery.warningModal.yesButton": "YES, GO BACK",
            "spc.chipAndPin.delivery.warningModal.noButton": "NO, I'LL LEAVE IT",
            "spc.chipAndPin.delivery.postcodeError": "Please enter a postcode or town",
            "spc.chipAndPin.delivery.homeDelivery.noResultsFound": "Sorry, we can't find a match for that postcode. Please try another postcode or select another delivery type.",
            "spc.chipAndPin.delivery.homeDelivery.blockedPostcode": "Sorry, we can't deliver to this postcode. Please enter a different postcode or select another delivery type.",
            "spc.chipAndPin.delivery.homeDelivery.findAddressHeading": "Find an address",
            "spc.chipAndPin.delivery.homeDelivery.savedAddress": "Please select an address for delivery",

            "spc.chipAndPin.review.heading": "Review your order before you pay",
            "spc.chipAndPin.review.addVouchersButton": "Add Clubcard Vouchers",
            "spc.chipAndPin.review.addECouponsButton": "Add eCoupons",
            "spc.chipAndPin.review.payGiftCardButton": "Add a Gift Card",
            "spc.chipAndPin.review.termsAndConditions.messageText": "By Paying Now you are agreeing to Tesco",
            "spc.chipAndPin.review.termsAndConditions.linkText": "terms and conditions",
            "spc.chipAndPin.review.termsAndConditions.headerText": "Terms and Conditions",
            "spc.chipAndPin.review.privacyPolicy.headerText": "Privacy and cookies policy",
            "spc.chipAndPin.review.privacyPolicy.btnText": "Privacy and cookies policy",
            "spc.chipAndPin.review.privacyPolicy.backBtnText": "Back",
            "spc.chipAndPin.review.proofOfDeliveryMessage": "This delivery will require an adult to sign for it.",

            "spc.delivery": "Delivery",
            "spc.checkoutPayment.defaultSelectYear": "YYYY",
            "spc.checkoutPayment.maxEndYear": "2049",
            "spc.checkoutPayment.addNewAddress": "new address",
            "spc.checkoutPayment.nickname": "Nickname",
            "spc.checkoutPayment.postcode": "Postcode",
            "spc.checkoutPayment.address": "Address",
            "spc.checkoutPayment.selectAddress": "Select Address",
            "spc.checkoutPayment.addressNotFound": "My address was not found",
            "spc.ageRestricted.product": "Your order contains an age restricted product.",
            "spc.enter.dob": "Please enter your date of birth",
            "spc.item.sold.by": "Sold by",
            "spc.catalogue.no": "Catalogue number",
            "spc.basket.details.header.quantity": "Qty",
            "spc.subTotal": "Subtotal",
            "spc.promotional.savings": "Promotion",
            "spc.staff.discount": "Staff Discount",
            "spc.fuelSaver": "Clubcard fuel savings",
            "spc.giftcard": "Gift Card",
            "spc.vouchers": "Vouchers",
            "spc.total.to.pay": "Total to pay",
            "spc.pay.now.buttonText": "Pay now",
            "spc.clubcard.points": "Total Clubcard points",
            "spc.extra.clubcard.points": "Extra Clubcard points",
            "ageMessage": "You must be {0} or over to buy this item.",
            "spc.delivery.deliveryOptions": "Delivery options",
            "spc.delivery.details": "Delivery details",
            "spc.delivery.address": "Delivery address",
            "spc.delivery.noStoreCollection": "These items can only be delivered.",
            "spc.delivery.noHomeDelivery": "These items can only be collected.",
            "spc.delivery.deliverToMoreThanOne": "Send to different addresses",
            "spc.delivery.noDeliveryMethods": "Sorry, we couldn't find delivery options.Please choose different address.",
            "spc.add.ecoupon.voucher": "Enter the code exactly as it appears on your voucher - including hyphens",
            "spc.add.ecoupon.voucher.clubcard": "Add eCoupons and Clubcard vouchers",
            "spc.view.saved.ecoupon.clubcard.link": "View my saved eCoupons and Clubcard vouchers",
            "spc.delivery.charge.free": "FREE",
            "spc.eCoupon": "eCoupon",
            "spc.no.saving": "no saving",
            "spc.place.your.order": "Pay now",
            "spc.delivery.weWillCallYou": "We will call you in 48 hours",
            "spc.delivery.split.title": "Send your items to different addresses",
            "spc.delivery.split.save": "Save",
            "spc.delivery.split.cancel": "Cancel",
            "spc.delivery.split.new.address": "New address",
            "spc.delivery.method": "Delivery type",
            "spc.delivery.instructions": "Courier instructions",
            "spc.delivery.noCourierInstructions": "No courier instructions",
            "spc.delivery.leavingWithNeighbour": "Instructions for leaving with neighbour",
            "spc.delivery.edit": "edit",
            "spc.nickname.tooltip": "Enter a nickname to describe the delivery address<br/> e.g. work, home",
            "clickAndCollect.collectionDetails": "Collection details",
            "clickAndCollect.collectionMessage": "You'll need to show proof of ID when you collect this order.",
            "clickAndCollect.collectionFromStore": "Collect from store",
            "delivery.hdrtext": "Delivery",
            "delivery.noDeliveryMethod": "Sorry, we couldn't find delivery options.Please choose different address.",
            "singlePageCheckout.couponsVouchers.applied": "eCoupon and Clubcard vouchers",
            "spc_couponsVouchers.delete": "Delete will remove the eCoupon from your account. Take a note of the code if you want to use it later",
            "spc_couponsVouchers.notapplied": "If your eCoupon has not applied, please check it in the list below",
            "spc.couponsVouchers.notApplied": "Stored eCoupons for future orders",
            "spc.couponsVouchers.Vouchers.applied": "eCoupons and Clubcard vouchers",
            "spc_vouchers.delete": "Delete will remove the eCoupon from your account. Take a note of the code if you want to use it later",
            "spc.vouchers.notApplied": "Stored voucher. Vouchers can only be used with items sold by Tesco",

            "spc.chipAndPin.vouchers.addVoucherHeading": "Add a Clubcard voucher code",
            "spc.chipAndPin.vouchers.addVoucherIntro": "Clubcard is our way of saying thank you. When you shop at Tesco you collect points, which we turn into Clubcard vouchers. Right now, there are no vouchers in your account. If you have a Clubcard, make sure the Clubcard number has been added to Your Account. If you don't, it's easy to join at Tesco.com/Clubcard.]",
            "spc.chipAndPin.vouchers.addVoucherLabel": "Enter the voucher code exactly as it appears - including any spaces",
            "spc.chipAndPin.vouchers.skipPostcode": "Close",
            "spc.chipAndPin.vouchers.buttonAdd": "Add",
            "spc.chipAndPin.vouchers.addClubcardVouchersTitleBeggining": "Add Clubcard vouchers",
            "spc.chipAndPin.vouchers.addClubcardVouchersTitleEnd": "available",
            "spc.chipAndPin.vouchers.addClubcardVouchersAmountSelected": "selected",
            "spc.chipAndPin.vouchers.voucherItemExpiryText": "expires",
            "spc.chipAndPin.vouchers.footerButtonIHaveAVoucherCode": "I have a voucher code",
            "spc.chipAndPin.vouchers.footerTextSelected": "selected",
            "spc.chipAndPin.vouchers.footerButtonAdd": "Update",
            "spc.chipAndPin.vouchers.footerButtonCancel": "Cancel",
            "spc.chipAndPin.vouchers.kmfIOselectedVouchersTitle": "Cancel Clubcard Voucher Items?",
            "spc.chipAndPin.vouchers.kmfIOselectedVouchers": "You have selected vouchers but not added them to your order. Are you happy to continue without adding them?",

            "spc.chipAndPin.eCoupon.addECouponHeading": "Add an eCoupon code (exactly as it appears, including any hyphens)",
            "spc.chipAndPin.eCoupon.eCouponListHeading": "Here are your eCoupons",

            "spc.chipAndPin.discounts.viewDiscountsListHeading": "Here's a breakdown of all your savings",
            "spc.chipAndPin.discounts.viewDiscountsEmptyMessage": "There are currently no discount savings applied to this order",

            "spc.chipAndPin.giftCards.addGiftCardsHeading": "Pay with a Giftcard",
            "spc.chipAndPin.giftCards.giftCardsListHeading": "Here are your Giftcards",

            "spc.add.giftcard.message": "Enter your Gift Card code and PIN",
            "spc.add.giftcard.code": "Gift Card code",
            "spc.add.giftcard.pin": "Gift Card Pin",
            "spc.add.giftcard.remove": "Remove Gift Card",
            "spc.eCoupon.added.checkout": "eCoupon added to checkout.",
            "spc.eCoupon.not.added": "eCoupon not added.",
            "spc.eCoupon.applicable.but.not.added": "eCoupon applicable, but not added.",
            "spc.voucher.added.checkout": "Clubcard voucher added to checkout",
            "spc.eCoupon.mutuallynotapplicable": "Applicable but not added. This eCoupon cannot be used with the applied eCoupon. Delete the applied eCoupon if you want to use this one.",
            "spc.eCoupon.Clubcard.voucher.code": "eCoupon or Clubcard voucher code",
            "spc.mobile.phone": "Mobile phone number",
            "spc.mobile.alternate.phone": "Alternative telephone number",
            "spc.mobile.phone.txt": "I don't have a mobile phone",
            "spc.mobile.alternate.phone.txt": "Your mobile number is safe with us - we only use it to contact you about your order.",
            "spc.mobile.alternate.phone.txt.line2": "If you don't have a mobile, please enter an alternative number here.",
            "spc.delivery.address.notfound.message": "Sorry, we can only deliver to addresses held on our systems.<br/> Please use an alternative delivery address or call 0845 600 44 11",
            "spc.splititems.togetfaster": "This delivery includes a delayed item. Split your delivery to get some items faster",
            "spc.combineitems.togetcheaper": "You can save money by combining this with another delivery",

            "spc.chipAndPin.payment.paymentDeclinedText": "Unfortunately your card payment has been declined. What would you like to do?",
            "spc.chipAndPin.payment.paymentDeclinedRetryButton": "PAY AGAIN",
            "spc.chipAndPin.payment.paymentDeclinedCancelButton": "CANCEL ORDER",
            "spc.chipAndPin.payment.instructionsMessage": "Insert your card in the<br/><strong>Chip and PIN</strong> reader to pay",
            "spc.chipAndPin.payment.cardsMessage": "Pay for your item(s) with"
        };

    if (window.TescoData && window.TescoData.ChipAndPin) {
        data = window.TescoData.ChipAndPin;
    }

    if (data && data.init && data.init.messages) {
        bundles = data.init.messages;
    }

    return bundles;
});