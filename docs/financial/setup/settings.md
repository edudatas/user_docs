# Settings

Under the <%= link_to('Settings', settings_path) %> Menu or the <%= link_to('New Year Wizard', details_new_school_setup_path) %>, you will find the settings to configure the Financial Module.

- Child number, first is
  - For some of the discounts, you can apply them to the second, third, etc., student.
                You can choose **Oldest** of you want the oldest student to be considered the first one.
                You could choose **Youngest** to start counting from the youngest.
- Default tuition type
  - Choose from the Tuition Types that you have already created.
- Default payment plan
  - Choose from the Payment Plans that you have already created.
- Accounts
  - Choose the Financial Account that will keep track of the totals for each of the following
    - Tuition account
    - Discount account
    - Payment account
    - Course fee account
    - Previous credit account
    - Previous debit account

- Posting detail level
  - When creating the Line Items from the Setup Charges, you can choose how much detail to show the parents.
    - **Net Balance Only:** Will only create one line item per pay period.
    - **Net Charges and Discounts:** Will create up to two line items per pay period (One for the charges and on for the discounts).
    - **Net Charges, Detailed Discounts:** Will create one net total charges but will create a line item for each discount that the family received.
    - **Detailed Charges, Net Discount:** Will create a line item for each charge for each student but only one net total discounts that the family received.
    - **Detailed Charges and Discounts:** Will create a line item for each charge for each student and a line item for each discount that the family received.

- Prorate Generated Items
  - When a family starts the school year partially through the year, if this option is set to **yes**, only the line items of the upcoming payments will be created. If set to **no**, the line items will be created for the whole year.
- Can Notify Financial
  - If set to **yes**, the parents would have access to the financial information when they log in to EDUDATAS. If they are set to receive emails, the financial information would also be included.

- Restrict ...
  - If the family is not up-to-date in their payments, the Family status can be changed to restricted or blocked. If set to blocked, they will not be able to access any of the information. If marked as restricted, they will only have access based on your choices for the following.
    - Restrict attendance
    - Restrict discipline
    - Restrict grades
    - Restrict schedules
    - Restrict transcripts

- Restriction message
  - If the family's account has been restricted, they will be shown this message when they log in. You could include the information necessary for them to contact the school office for further details.
