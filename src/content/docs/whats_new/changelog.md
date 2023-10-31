---
title: LBT Portal Updates
description: A log of changes
lastUpdated: 2023-10-30
---


## October 2023
### Quote updates
- Added subtotal to Open Orders page
- Enabled editing of quotes.
- Enabled deletion of quotes.
- Enabled saving quotes as orders.
- Added discount codes.


## September 2023
### Quotes launched
- Enabled quotes.
  - This allows users to work on different orders as they come through without having to finalize each one before starting the next. 
  <img src="/docs/assets/images/quotes_details_example_02.png" alt="none" style="border: 2px solid  gray;">
- Enabled printing of quotes and orders.
  - Users are able to send printouts to clients for approval or as confirmations.
  <hr>
- Added error pages.
  - Error 403
    - User does not have sufficient permissions to view resources. 
  - Error 404
    - Resource was not found. 
  - Error 500
    - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  - Error 503
    - The server cannot handle the request (because it is overloaded or down for maintenance).


## August 2023
- Added delete option to lot images.
  - The only place this has been implemented is under the Lot Images page. Users cannot delete images from the Product page.
  <img src="/docs/assets/images/image_delete_example.png" alt="none" style="border: 2px solid  gray;">
- Added option to add notes to lot image uploads.
  - Users can now write lot-relevent information into a notes input box instead of editing images to display text.
  <img src="/docs/assets/images/image_notes_example.png" alt="none" style="border: 2px solid  gray; max-height: 525px; max-width: 100%;">
  <hr>
- Added <i>What's New</i> section.
- Miscellaneous Shopping Cart improvements.


## July 2023
### Lot images
- Enabled lot image uploads.
  - Users can now upload images from the product page.
<img src="/docs/assets/images/lot_image_example_01.png" alt="none" style="border: 1px solid  gray;">
  - Links to lot images can be shared with customers.
<img src="/docs/assets/images/lot_image_example_02.png" alt="none" style="border: 1px solid  gray;">

### ETA info
- Added ETA breakdown for backordered material.
  - Users can now expand ETA section to show multiple quantities and ETAs from the Product page and Stock Check page. This is an improvement over showing a single ETA.

Stock Check            |  Product Page
:-------------------------:|:-------------------------:
![title](/docs/assets/images/bo_image_example_02.png)  |  ![title](/docs/assets/images/bo_image_example_01.png)

   <hr>

- Added exclusivity filter.
  - Exclusivity filter allows for stock checks to be pre-filtered by private material only, private + regular material, or regular inventory only. This is per dealer.


## June 2023
- Added timestamp for data refresh on multiple pages.
  - If changes were made on our ERP system (GP), users sometimes wondered why their updates weren't immediately reflected in the portal.
<img src="/docs/assets/images/data_refresh_example.png" alt="none" style="border: 1px solid  gray;">


## May 2023
### Shipment Tracking
- Enabled shipment tracking on Invoices page.
  - Users can now, if available, click on a tracking number link which takes them directly to the carrier's tracking page.
<img src="/docs/assets/images/invoice_tracking_example.png" alt="none" style="border: 1px solid  gray;">

### Item Specs 
- Added item specifications to product page.
  - While mounting type, thickness, weight, etc can be looked up in a pricelist, finding that information on the Portal is more efficient.
<img src="/docs/assets/images/specifications_example.png" alt="none" style="border: 1px solid  gray; max-height:250px; max-width: 100%;">
  <hr>
- Added PA stock.
  - Stock checks were previously limited to CA inventory only. This slowed down CSRs when they need to provide inventory levels to east coast customers.
- Updated quantities to selling unit of measure.
  - There should be consistency between the units of measure used on the Portal and the pricelist.

## April 2023
### Release
- Unveiled Portal to CSRs.
  - The Portal provides CSRs with alternative and additional functionality to Dynamics GP.
### Invoices
- Added Invoices page.
  - This page provides a way for users to search invoices by their tracking number.
<img src="/docs/assets/images/invoices_example.png" alt="none" style="border: 1px solid  gray;">
### Orders
- Added Open Orders page.
<img src="/docs/assets/images/open_orders_example.png" alt="none" style="border: 1px solid  gray;">
- Enabled consolidation information on Open Orders page.
  - Users can now click on consolidation links within the <i>CONS.</i> column. This takes them to a printable consolidation list page which streamlines the order fulfillment process.
<img src="/docs/assets/images/consolidation_example.png" alt="none" style="border: 1px solid  gray;">    
    A caveat of this process is that Requested Ship Dates must be consistent in order for orders to display on the same consolidation.

### Sharepoint
- Added SharePoint links to Invoices page.
  - Clicking on the link provided in the <i>PO Number</i> column takes the user to a prefilled SharePoint search page which lists files associated with the purchase order.


## March 2023
### Pricing
- Pricing has been added to various pages on the Portal.
  - Adding MSRP and pricing per pricelevel provides an alternative to flipping through a pricelist and allows for future implementation of shopping features.
  <hr> 
- Enabled checkout confirmation emails.
<img src="/docs/assets/images/checkout_confirmation.png" alt="none" style="border: 1px solid  gray; max-height:665px; max-width: 100%;">
- Added illustrations. 
<img src="/docs/assets/images/images_example.png" alt="none" style="border: 1px solid  gray; max-height:320px; max-width: 100%;">
- Enabled quantity calculations in cart.
  - Users can now input quantities in one of two units of measure when applicable. Amounts are corrected to match increment quantities. E.G., 3.00sf -> 3.27sf. 
<img src="/docs/assets/images/quantity_calculation_example.png" alt="none" style="border: 1px solid  gray;">
### Global Search
- Added quantities to Global Search.
  - For users that know the exact material they want information on, the global search is often faster than using the Stock Check page.
<img src="/docs/assets/images/global_search_quantity_example.png" alt="none" style="border: 1px solid  gray;">
  <hr>
### Lots
- Added lot breakdowns for items.
  - For add-ons, must-be-sampled items, or replacement material, users need to know stock levels for individual lots.
<img src="/docs/assets/images/lot_breakdown_example.png" alt="none" style="border: 1px solid  gray;">
  <hr>
- Added Material ETAs.
  - While ETA info has been added, this is limited to a single ETA per item.
- Added bin page.
  - This could be useful to the warehouse in the future as an alternative lookups in Dynamics GP.

## February 2023
### Shopping Cart
- Shopping Cart functionality enabled 
  - The addition of the shopping cart makes it possible for sales reps to directly enter orders.
<img src="/docs/assets/images/shopping_cart_example_02.png" alt="none" style="border: 1px solid  gray; max-height:340px; max-width: 100%;">
  <hr>
- Added Google Analytics.

## December 2022
- Added Tommy Bahama and Johathan Adler filter to Dealer Locator.
<img src="/docs/assets/images/tmb_ja_dealer_locator_example.png" alt="none" style="border: 1px solid  gray; max-width:300px">

## November 2022
### Dealer locator 
- Enabled dealer locator
  - Users no longer have to go solely through GP to look for an appropriate dealer.
<img src="/docs/assets/images/dealer_locator_example_old.png" alt="none" style="border: 1px solid  gray;">
### Documentation
- Added material documentation.
  - Expandable section provides users with a practical way to view additional information on products.
  <img src="/docs/assets/images/documentation_example.png" alt="none" style="border: 1px solid  gray;">
### Backend
 - Various backend improvements and additions enabled further Portal functionality.
   - Added customers to database.
   - Added customer addresses to database 
   - Added collections to database.
   - Added customer price levels.
   - Added user roles.

## October 2022
- Added search by item number.
- Added user authentication.
- Added size and color variations to product page.
- Added bin and lot quantity information to database.
- Improved Global Search.
- Removed inactive series.
- Added breadcrumb.
  - This allows users to easily go back to a parent section. E.G., if they're on an Agate 1X1 product page, they can click on <i>1x1 Mosaic</i> or <i>Agate</i> to go back to the 1x1's page or the Agate page respectively.
  <img src="/docs/assets/images/breadcrumb_example.png" alt="none" style="border: 1px solid  gray;">
- Enabled product images.

### Launch
Initial launch
<img src="/docs/assets/images/high-five.png" style="max-width:300px">



<script src="/docs/assets/scripts/custom.js"></script>