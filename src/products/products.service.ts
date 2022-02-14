import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getManager, getRepository, Repository } from 'typeorm';
import { GetProductArgs } from './args/get-product.args';
import { CreateProductInput } from './dto/create-product.input';
import { DeleteProductInput } from './dto/delete-product-input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) { }

    // INSERT INTO products 
    createProduct(createProductData: CreateProductInput): Promise<Product> {
        const newProduct = this.productsRepository.create(createProductData); // newProduct = new Product(); new.name = input.name...
        return this.productsRepository.save(newProduct)
    }

    // SELECT * FROM product;
    async getProducts(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    // SELECT * FROM product WHERE product.id = id;
    getProduct(getProductArgs: GetProductArgs): Promise<Product> {
        return this.productsRepository.findOneOrFail(getProductArgs.id);
    }

    //DELETE
    async deleteProduct(deleteProductData: DeleteProductInput): Promise<Product> {
        const product = await this.getProduct(deleteProductData);
        return this.productsRepository.remove(product);
    }

    // OUT OF STOCK
     getProductOutOfStock(): Promise<Product[]> {
        return  this.productsRepository.createQueryBuilder("product").where("product.amount < :amount", { amount: 5 }).getMany();
    }

    // LESS STOCK: sort from smallest to largest and print the first one
     getProductLessStock(): Promise<Product> {
        return  this.productsRepository.createQueryBuilder("product").orderBy("amount", 'ASC').getOne();
    }

    // HIGHEST STOCK: sort from  to largestsmallest and print the first one
     getProductHighestStock(): Promise<Product> {
        return  this.productsRepository.createQueryBuilder("product").orderBy("amount", 'DESC').getOne();
    }

    // UPDATE 
    async updateProduct(updateProductData: UpdateProductInput): Promise<Product>{
        const product = await this.getProduct(updateProductData);
        Object.assign(product, updateProductData);
        return this.productsRepository.save(product); 
    }

    // PRODUCTS COUNT 
    async productsCount(): Promise<any> {
        const products = await this.productsRepository.find();
        return products.length;;
    }
}

