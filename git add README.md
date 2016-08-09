	A small JavaScript web application, and a contact form based on the following scenario.

	The Zedland Health Authority are concerned about the rise in diabetes in their country. To help indenify potential sufferers, they want to develop an online tool which will assess an individual’s risk of developing the disease, and give him/her advice based on their level of risk. If an individual’s risk is identified as being high, individuals will be given the option of contacting the Zedland Health Authority by submitting their details via an online contact form.

	-The Diabetes Risk Assessment Tool
	-Two contact forms 
		-using vanila JavaScript
		-using JQery
		
		Before submitting the form, it is  validated on the following criteria.
		1) All mandatory fields have been completed.
		2) The name fields have more than one character, and do not contain numbers
		or other non-allowed alphabetic characters. The only character the last name
		field should legitimately contain is a hyphen (e.g. Whittaker-Jones).
		3) A valid email has been entered.
		4) A valid Zedland Health Authority Number has been entered. Zedland Health
		Authority numbers are in the form of a six-digit integer prefixed with the letters
		ZHA (e.g. ZHA346783).
		5) If a telephone number is entered, then it should contain only numbers, not
		letters, or other disallowed characters. A valid Zedland telephone number has
		11 digits (no spaces), the same as a UK telephone number.