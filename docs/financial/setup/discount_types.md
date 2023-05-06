# Discount Types

Many schools offer some sorts of discounts to the families. Some discounts may apply automatically to all
families based on certain criteria such as multiple child discounts, while other discounts may only apply
to certain families. EDUDATAS can help determine the discounts and apply them to the family line items.


- Financial account
  - Choose the account that you want to use to keep track of the discounts that have been applied.

- Name
  - Give the discount a name that will indicate the type of discount.

- Child
  - Indicates if the discount is to be applied to the tuition amount of the child or to the tuition amount of the family. This is primarily important if you indicate that the discount is a percent discount.

- Child number
  - If this is a child discount, indicate the number of the child for which this discount will be applied. In the **Settings**, you will determine if you start counting the family's children with the oldest being number 1 or the youngest.

- Percent
  - Indicates if the discount is a percentage discount or a flat amount.

- Percent off balance
  - If the discount is a percentage discount, this option indicates if the percentage should be calculated off of the total charges or off the balance once other discounts are calculated. For example, if a family had total charges of 1000, and two discounts of 20%, if this option is not selected, the family would receive two discounts of 200 for a total discount of 400. With the option selected, the first 20% discount would be for 200 while the next 20% would be for 160 (20% of the 1800 balance) for a total discount of 360.

- Amount
  - This should be the flat amount of the discount or the percentage number of the discount.

- Automatic
  - Indicates if EDUDATAS should automatically apply the discount when calculating the family's charges if it applies to the student or family.

- Discount limitations
  - Each of the discounts can be limited to only apply to certain school levels or school grades. To do so,
    - Click on the number under this column.
    - Click on <%= create_new_button %> for the Discount Limitations
    - Choose either **School Level** or **School Grade** from the **Discountable type**.
    - Choose the corresponding **School Level** or **School Grade** from your school's options.
    - Click on <%= create_button %>
    - Repeat steps 2-5 as necessary.

- Family setup charges
  - The number of items that have been calculated for a family of this discount type. To see all of them, click on the number shown under this column.

- Family line items
  - The number of items that have been created of this discount type. To see all the discounts, click on the number shown under this column.
