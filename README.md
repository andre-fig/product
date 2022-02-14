## Create table
```bash
CREATE TABLE product( 
  id int (11) AUTO_INCREMENT PRIMARY KEY not null,
  name VARCHAR(255) not null,
  producer VARCHAR (255),
  amount int (11),
  price decimal (8,2));
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# production mode
$ npm run start:prod
```

## Access
```bash
http://localhost:3000/graphql
```

### Create product

```bash
mutation{
  createProduct(createProductData: {
    name: "Test",
    producer: "",
    amount: 1,
    price: 2.50
  }) {
    id
    name
    producer
    price
  }
}
```

### Get products 
```bash
{
  getProducts {
    id,
    name,
    amount,
    producer,
    price
  }
}
```

### Get product by ID
```bash
{
  getProduct (id : 1) {
    id,
    name,
    producer,
    amount,
    price
  }
}
```

### Update product
```bash
mutation{
  updateProduct(updateProductData: {
    id: 1,
    name: "Update test",
  	producer: "Producer"
    amount: 15,
    price: 25
  }) {
    id
    name
    producer
    amount
    price
  }
}
```

### Delete product
```bash
mutation {
  deleteProduct(deleteProductData: { id: 1 }) {
    name,
    producer,
    amount,
    price
  }
}
```

### Out of stock products (less than 5 items)
```bash
{
  getProductOutOfStock{
    id,
    name,
    amount,
    producer,
    price
  }
}
```

### Product with less stock 
```bash
{
  getProductLessStock{
    id,
    name,
    price,
    producer,
  	amount
  }
}
```


### Product with the highest stock
```bash
{
  getProductHighestStock{
    id,
    name,
    price,
    producer,
  	amount
  }
}
```

### Quantity of products 
```bash
{
	productsCount
}
```
