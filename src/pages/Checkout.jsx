import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name required";
    if (!form.lastName) newErrors.lastName = "Last name required";

    if (!form.email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone) newErrors.phone = "Phone required";
    if (!form.address) newErrors.address = "Address required";
    if (!form.city) newErrors.city = "City required";
    if (!form.zip) newErrors.zip = "ZIP required";

    return newErrors;
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[1280px] mx-auto px-4 flex">

      {/* LEFT: FORM */}
      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        {/* First + Last */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`border p-2 rounded w-full ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`border p-2 rounded w-full ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className={`border p-2 rounded w-full ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mt-4">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`border p-2 rounded w-full ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="mt-4">
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className={`border p-2 rounded w-full ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* City */}
        <div className="mt-4">
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className={`border p-2 rounded w-full ${
              errors.city ? "border-red-500" : ""
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city}</p>
          )}
        </div>

        {/* ZIP */}
        <div className="mt-4">
          <input
            name="zip"
            value={form.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
            className={`border p-2 rounded w-full ${
              errors.zip ? "border-red-500" : ""
            }`}
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip}</p>
          )}
        </div>
      </div>

      {/* RIGHT: SUMMARY */}
      <div className="bg-white p-6 rounded shadow h-fit sticky top-4">
        <h2 className="text-xl font-bold mb-4">Your Order</h2>

        {items.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>${totalAmount}</span>
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;