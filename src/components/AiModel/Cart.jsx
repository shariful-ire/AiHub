const Cart = ({ cart, setCart }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="sticky top-24">

      <h1 className="text-4xl font-bold mb-8">
        Your Cart
      </h1>

      <div className="space-y-5">

        {cart.map((item) => (

          <div
            key={item.id}
            className="border rounded-2xl p-4 flex justify-between items-center"
          >

            <div className="flex gap-4">

              <img
                src={item.image}
                className="w-16 h-16 rounded-lg"
              />

              <div>

                <h2 className="font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  ${item.price}/month
                </p>

              </div>

            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-xl"
            >
              ✕
            </button>

          </div>

        ))}

      </div>

      <div className="bg-black text-white rounded-2xl p-6 mt-8 flex justify-between">

        <h2 className="text-2xl font-bold">
          Total
        </h2>

        <h2 className="text-2xl font-bold text-red-500">
          ${total}
        </h2>

      </div>

      <button
        className="w-full mt-8 bg-red-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-red-700"
      >
        Proceed To Checkout
      </button>

    </div>
  );
};

export default Cart;