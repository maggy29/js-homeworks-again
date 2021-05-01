// const cart = {
//   items: [
//     { id: 1, name: "parka" },
//     { id: 2, name: "cat" },
//   ],
//   add(name, callback) {
//     setTimeout(() => {
//       const item = { id: Date.now(), name };
//       this.items.push(item);
//       callback(item);
//     }, 2000);
//   },
//   remove(id, callback) {
//     setTimeout(() => {
//       this.items = this.items.filter((item) => item.id !== id);
//       callback(id);
//     }, 2000);
//   },
// };

function updateUiAfterAdd(item) {
  console.log(`updated with item ${item.name} ID ${item.id} `);
}

function updateUiAfterRemove(id) {
  console.log(`item with ID ${id} removed`);
}

// cart.add("dog", updateUiAfterAdd);
// cart.remove(1, updateUiAfterRemove);

const cartPromises = {
  items: [
    { id: 1, name: "parka" },
    { id: 2, name: "cat" },
  ],
  add(name) {
    return new Promise((resolve) =>
      setTimeout(() => {
        const item = { id: Date.now(), name };
        this.items.push(item);
        resolve(item);
      }, 2000)
    );
  },
  remove(id) {
    return new Promise((resolve) =>
      setTimeout(() => {
        this.items = this.items.filter((item) => item.id !== id);
        resolve(id);
      }, 2000)
    );
  },
};

cartPromises
  .add("frame")
  .then((newItem) => updateUiAfterAdd(newItem))
  .catch((err) => console.error(err));

cartPromises
  .remove(1)
  .then(console.log(cartPromises.items))
  .then((newItem) => updateUiAfterRemove(newItem))
  .catch((err) => console.error(err));
