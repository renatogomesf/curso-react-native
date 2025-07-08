import { createContext, useState } from 'react';

export const ProductContext = createContext<any>({});

export default function ProductProvider({ children }: any) {
  const [productAdded, setProductAdded] = useState<any>([]);

  function addProductOnList(item: any) {
    const exists = productAdded.find((element: any) => element.id == item.id);

    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    };

    if (exists == undefined || exists == null) {
      setProductAdded([...productAdded, product]);
      return;
    } else {
      const index = productAdded.findIndex(
        (element: any) => element.id == item.id
      );
      productAdded[index].amount++;
      return;
    }
  }

  const products = [
    {
      id: '1',
      name: 'coca cola',
      price: 19.9,
    },
    {
      id: '2',
      name: 'chocolate',
      price: 6.5,
    },
    {
      id: '3',
      name: 'queijo 500g',
      price: 15,
    },
    {
      id: '4',
      name: 'batata frita',
      price: 23.9,
    },
    {
      id: '5',
      name: 'guarana lata',
      price: 6.0,
    },
  ];

  return (
    <ProductContext.Provider
      value={{ products, addProductOnList, productAdded, setProductAdded }}
    >
      {children}
    </ProductContext.Provider>
  );
}
