# Invoice editor

Sample application written in React, Redux, ES7 to allow a user to add/delete/edit arbitrary items in an invoice form,
showing misc dynamically updated content like the cost of each item and subtotal/grand total.

<img src="http://www.benjaminkeen.com/wp-content/uploads/2017/04/invoice-editor.png" border="1" />

### How to run

- Clone the repo!
- run `yarn install` or `npm install`
- run `npm start` to start 'er up, and load up http://localhost:3000 in a web browser.

### Tests

- run `npm test`. The tests are very thin! I only added some for the `items` reducer, and not full code coverage. 
Enough to show. :)

### Notes

- I use the [react-number-format](https://github.com/s-yadav/react-number-format) react component for the currency 
fields. The UX feels a bit iffy to me when specifying formatting with cents (as here), but I left it in anyway.
- I included [styled-components](https://github.com/styled-components/styled-components) for individual component
styling.
- I used [reselect](https://github.com/reactjs/reselect) to efficiently compute derived data (subtotal, tax, total) 
from the normalized Redux store. 
- One of the various dependencies hasn't been updated for the prop-types change, so you'll see a warning thrown in the 
browser.
- I was going to make it responsive but it took a little longer than thought, so it's only for desktop-sized screens.
