import axios from "axios";
import { useState, useEffect } from "react";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    itemCode: "",
    title: "",
    price: "",
    category: "",
    quantity: 0,
  });

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/items");
        setMenuItems(res.data);
      } catch {
        console.log("something wrong occured");
      }
    };
    getItems();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddition = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/items/admin/menu",
        formData,
      );
      setMessage(res.data.message);
      setFormData({
        itemCode: "",
        title: "",
        price: "",
        category: "",
        quantity: 0,
      });
      setMenuItems([...menuItems, res.data]);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete("http://localhost:3000/items/admin/menu", {
        data: { itemCode: formData.itemCode },
      });
      setMessage(res.data.message);
      setMenuItems(
        menuItems.filter((item) => item.itemCode !== formData.itemCode),
      );
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <div className="min-h-screen text-white p-4">
      {/* Top Buttons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 my-6">
        <button
          className={`px-4 py-2 rounded-lg border transition ${
            showAdd
              ? "bg-green-600 border-green-600"
              : "border-white hover:bg-green-700"
          }`}
          onClick={() => {
            setShowAdd(true);
            setShowDelete(false);
          }}
        >
          Add Item
        </button>

        <button
          className={`px-4 py-2 rounded-lg border transition ${
            showDelete
              ? "bg-red-600 border-red-600"
              : "border-white hover:bg-red-700"
          }`}
          onClick={() => {
            setShowDelete(true);
            setShowAdd(false);
          }}
        >
          Delete Item
        </button>
      </div>

      {showAdd && (
        <form
          onSubmit={handleAddition}
          className="max-w-5xl mx-auto mt-6 bg-black px-6 py-5 rounded-2xl shadow-xl border border-green-800"
        >
          <div className="flex flex-wrap justify-between items-center gap-3">
            <input
              type="text"
              name="itemCode"
              placeholder="Item Code"
              value={formData.itemCode}
              onChange={handleChange}
              required
              className="border rounded-sm px-3 py-1"
            />

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border rounded-sm px-3 py-1"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
              className="border rounded-sm px-3 py-1"
            />

            <select
              id="category"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border rounded-sm px-3 py-1"
            >
              <option value="Sweets">Sweets</option>
              <option value="Cakes">Cakes</option>
              <option value="Chocolates">Chocolates</option>
            </select>

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="border rounded-sm px-3 py-1"
            />
          </div>

          {message && (
            <p className="text-center mt-3 text-red-400 text-sm">{message}</p>
          )}

          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-green-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-500 transition">
              Submit
            </button>

            <button
              type="button"
              onClick={() => setShowAdd(false)}
              className="border border-red-500 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              Back
            </button>
          </div>
        </form>
      )}

      {showDelete && (
        <form
          onSubmit={handleDelete}
          className="max-w-md mx-auto bg-black/80 p-6 rounded-xl shadow-xl"
        >
          <input
            type="text"
            name="itemCode"
            placeholder="Enter Item Code"
            value={formData.itemCode}
            onChange={handleChange}
            required
            className="input w-full"
          />

          {message && (
            <p className="text-center mt-3 text-red-500 font-semibold">
              {message}
            </p>
          )}

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-500 transition">
              Delete
            </button>

            <button
              type="button"
              onClick={() => setShowDelete(false)}
              className="border border-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Back
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto mt-10">
        <table className="min-w-[700px] w-full text-center border border-gray-600 bg-black rounded-lg overflow-hidden">
          <thead className="bg-black text-yellow-400">
            <tr>
              <th className="p-3">Item Code</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => (
              <tr
                key={item._id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-2">{item.itemCode}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td
                  className={
                    item.quantity > 0 ? "text-green-400" : "text-red-400"
                  }
                >
                  {item.quantity > 0 ? item.quantity : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMenu;
