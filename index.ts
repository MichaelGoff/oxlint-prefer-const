async function destroyItems() {
  return Promise.resolve(4);
}


async function myFunction() {
  let nItemsDestroyed: number;
  nItemsDestroyed = await destroyItems();
  nItemsDestroyed += await destroyItems();
  console.info(`destroyItem: ${nItemsDestroyed} items destroyed.`);
}

myFunction();
