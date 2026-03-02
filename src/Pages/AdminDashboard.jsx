import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings,
  LogOut
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const inquiries = [
    {
      name: "Rahul Pharma",
      email: "rahul@email.com",
      message: "Need 10,000 printed mono cartons."
    },
    {
      name: "ABC Bakery",
      email: "abc@bakery.com",
      message: "Looking for custom cake boxes."
    }
  ];

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">
          Admin <span className="text-blue-600">Panel</span>
        </h2>

        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Package size={18} />
            <span>Products</span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <MessageSquare size={18} />
            <span>Inquiries</span>
          </button>

          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-600">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8">

        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
                <h3 className="text-lg font-semibold">Total Products</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
                <h3 className="text-lg font-semibold">New Inquiries</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
                <h3 className="text-lg font-semibold">Monthly Orders</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">18</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow mb-6">
              <h3 className="font-semibold mb-4">Add New Product</h3>

              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 mb-4"
              />

              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add Product
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
              <h3 className="font-semibold mb-4">Existing Products</h3>
              <ul className="space-y-2">
                <li>Printed Mono Cartons</li>
                <li>Laminated Cartons</li>
                <li>Pharma LBL Cards</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "inquiries" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Customer Inquiries</h1>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-700">
                    <th className="py-3">Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq, index) => (
                    <tr key={index} className="border-b border-slate-200 dark:border-slate-800">
                      <td className="py-3">{inq.name}</td>
                      <td>{inq.email}</td>
                      <td>{inq.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;