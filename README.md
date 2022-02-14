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

