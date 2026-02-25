interface Product {
  id: number;
  name: string;
  price: number;
}

const products = [
  { id: 1, name: "ノートパソコン", price: 150000 },
  { id: 2, name: "スマートフォン", price: 80000 },
  { id: 3, name: "タブレット", price: 60000 },
];

for (const { name, price } of products) {
  console.log(`商品名: ${name} / 価格: ${price}円`);
}
