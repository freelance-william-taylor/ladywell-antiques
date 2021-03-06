
import { Injectable } from "@angular/core";

const randomElement = <T>(items: any[T]): T => {
    return items[Math.floor(Math.random() * items.length)];
}

export class Category {
    uniqueIdentifier: number;
    wildcard: boolean;
    name: string;

    constructor(id: number, nm: string, wildcard?: boolean) {
        this.uniqueIdentifier = id;
        this.wildcard = wildcard;
        this.name = nm;
    }
}

export class Item {
    description: string;
    category: Category;
    title: string;
    price: number;
    img: string;

    constructor(title: string, img: string, desc: string, cat: Category, price: number) {
        this.category = cat;
        this.description = desc;
        this.price = price;
        this.title = title;
        this.img = img;
    }
}

export function randomCategories(): Category[] {
    let categories: Category[] = [];
    let defaults = ["Gold", "Silver", "Bronze"];
    let length = 3;

    for (let i = 0; i < length; i++) {
        categories.push(new Category(i, defaults[i]));
    }

    return categories;
}

const descPlaceholder = `
    This silver cup is from 1945 and is in great condition. 
    Made by XX it was created specifically as part of a set.
`

export function randomItems(length: number, categories: Category[]): Item[] {
    let items: Item[] = [];
    let title = "Product";
    let image = "images/silver.jpg";
    let desc = descPlaceholder;
    let price = 10.0;

    for (let i = 0; i < length; i++) {
        const randomCategory = randomElement<Category>(categories);
        items.push(new Item(title, image, desc, randomCategory, price));
    }

    return items;
}

@Injectable()
export class Model {
    items: Item[];
    categories: Category[];

    constructor() {
        this.categories = randomCategories();
        this.items = randomItems(6, this.categories);
        this.categories.unshift(new Category(this.categories.length, "All", true));
    }

    itemsWithCategory(category: Category): number {
        let occurances = 0;
        this.items.forEach(item => {
            occurances += item.category == category ? 1 : 0;
        });
        return occurances;
    }

    wildcardCategory(): Category {
        let wildcard = null;

        this.categories.forEach(category => {
            if (category.wildcard) {
                wildcard = category;
            }
        });

        return wildcard;
    }
}
