exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('paypal_payments').del()
    .then(function () {
      // Inserts seed entries
      return knex('paypal_payments').insert([
        {
          PAYMENT_ID: '123456',
          AMOUNT: 100.00,
          NATIONAL_ID: 987654,
          PAYMENT_DATE: '2024-08-15', // Format YYYY-MM-DD
          PAYMENT_METHOD: 'Credit Card',
          TRANSACTION_ID: 'TX1234567890',
          STATUS: 'Completed'
        },
        {
          PAYMENT_ID: '654321',
          AMOUNT: 200.00,
          NATIONAL_ID: 123456,
          PAYMENT_DATE: '2024-08-14',
          PAYMENT_METHOD: 'PayPal',
          TRANSACTION_ID: 'TX0987654321',
          STATUS: 'Pending'
        }
      ]);
    });
};
