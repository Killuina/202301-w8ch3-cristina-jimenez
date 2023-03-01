# Data layer

## Data

### Clients:

- isLogged
- username
- email
- address
- List of drinks
- List of orders

### Drinks:

- id
- name
- brand
- description
- price
- stock

### Orders

- id
- status: received, in process, completed

## Data modifications

### Clients

- Log in
- Log out

- Add an order to user's orders list
- Remove product from product list

### Drinks

- Load drink data
- Modify price
- Set isAvailable
- Unset isAvailable
- Add new drink

### Orders

- Load order
- Add order to order list
- Set order status
