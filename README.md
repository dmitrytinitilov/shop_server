This is simple shop imitation for ajax-requests training

Don't forget to make 
```
npm install
```
after cloning project


To start server run

```cli
node server.js
```

To access add products interface type in address bar

```
localhost:8081/catalog
```

There are two api requests:

1. To get JSON of all products in catalog

```
/api/catalog
```

2. To add product by name,description and price use
```
/api/add_product
```


3. To get information about product with current id

```
/api/get_product?id=5fghjjkkl
```

4. To remove product by id use
```
/api/remove_product?id=5fghjjkkl
```

