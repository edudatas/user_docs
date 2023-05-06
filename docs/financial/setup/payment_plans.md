# Payment Plans

By setting up payment plans, EDUDATAS will be be able to calculate how to subdivide the annual tuition
charges throughout the year. Most schools will have monthly payment plan. Some will also have an annual
plan or semiannual plan,

- Name
  - The name of the plan.
- Number of payments
  - The number of payments used to subdivide the charges.
- Message
  - A message which can be used to describe the payment plan on a from provided to the family.
- Frequency period
  - The number of times in a period that a payment will be due.
- Frequency type
  - Defines the period of time to be one of the following options.
    - Days
    - Weeks
    - Half-months
    - Months
    - Years
  - EDUDATAS will use this information to divide the charges into equal payments. For example, if the **Number of payments** is 10, and **Frequency period** is set to 1, and **Frequency type** is set to Months, the family will be charged the equal payments once a month for 10 months.

- Start date
  - The date of the first payment.
- Families
  - The list of families that have this payment plan assigned.
- Due Dates
  - The list of due dates for this payment plan. From the list view, you can use the <%= member_macros_button %> and choose **Generate Due Dates** to have EDUDATAS generate the default due dates based on the **Start date** and the rest of the information mentioned above. When the end of year rollover is run, these dates will automatically be advanced one year. You can go into the list of due dates and change the dates if there are special reasons for doing so.

- Add Year to Dates
  - EDUDATAS will automatically add one year to all of the due dates when doing an end of year rollover. If you need to do it manually, you can choose this option.
