import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GetProductArgs } from './args/get-product.args';
import { CreateProductInput } from './dto/create-product.input';
import { DeleteProductInput } from './dto/delete-product-input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver(of => Product)
export class ProductsResolver {
    constructor(private productsService: ProductsService) { }


    // INSERT INTO
    @Mutation(returns => Product)
    createProduct(@Args('createProductData') createProductData: CreateProductInput): Promise<Product> {
        return this.productsService.createProduct(createProductData);
    }

    // SELECT *
    @Query(returns => [Product])
    getProducts(): Promise<Product[]> {
        return this.productsService.getProducts();
    }

    // SELECT ONE
    @Query(returns => Product)
    getProduct(@Args() getProductArgs: GetProductArgs): Promise<Product> {
        return this.productsService.getProduct(getProductArgs);
    }

    // OUT OF STOCK
    @Query(returns => [Product])
    getProductOutOfStock(): Promise<Product[]> {
        return this.productsService.getProductOutOfStock();
    }

    // LESS STOCK
    @Query(returns => Product)
    getProductLessStock(): Promise<Product> {
        return this.productsService.getProductLessStock();
    }

    // HIGHEST STOCK
    @Query(returns => Product)
    getProductHighestStock(): Promise<Product> {
        return this.productsService.getProductHighestStock();
    }

    // DELETE
    @Mutation(returns => Product)
    deleteProduct(@Args('deleteProductData') deleteProductData: DeleteProductInput): Promise<Product> {
        return this.productsService.deleteProduct(deleteProductData);
    }

    // UPDATE
    @Mutation(returns => Product)
    updateProduct(@Args('updateProductData') updateProductData: UpdateProductInput): Promise<Product>{
        return this.productsService.updateProduct(updateProductData);
    }

    // PRODUCTS COUNT
    @Query(() => Number)
    productsCount(): Promise<any> {
        return this.productsService.productsCount();
    }
}
