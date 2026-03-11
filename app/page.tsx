"use client";

import React, { useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

export default function EriShopWebsite() {
  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const whatsappNumber = "628124627770";

  const products = [
    {
      id: 1,
      title: "Kaos Art by Erry",
      desc: "Kaos premium dengan desain ilustrasi original.",
      price: 185000,
      image: "/kaos.jpg",
    },
    {
      id: 2,
      title: "Totebag Japanese Girl",
      desc: "Totebag eco-friendly dengan artwork eksklusif.",
      price: 150000,
    },
    {
      id: 3,
      title: "Tumbler Artwork",
      desc: "Tumbler custom dengan desain kreatif Erry.",
      price: 120000,
    },
    {
      id: 4,
      title: "Notebook Art Series",
      desc: "Notebook cover ilustrasi inspiratif.",
      price: 95000,
    },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    const productList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.title} - Rp ${item.price.toLocaleString("id-ID")}`,
      )
      .join("\n");

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const message = `
Halo ERISHOP 👋

Saya ingin memesan:

${productList}

Total: Rp ${totalPrice.toLocaleString("id-ID")}

Nama:
Alamat:
Metode Pembayaran:

Terima kasih 🙏
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-orange-600">ERISHOP</h1>
          <div className="flex gap-6 text-sm">
            <a href="#profil">Profil</a>
            <a href="#karya">Karya</a>
            <a href="#produk">Produk</a>
            <a href="#marketing">Marketing</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Setiap Karya Punya Cerita</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ERISHOP adalah platform resmi untuk menampilkan dan menjual karya
          inspiratif dari Erry.
        </p>
      </section>

      {/* PROFIL */}
      <section id="profil" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Profil Erry</h3>
          <p className="text-gray-600 leading-relaxed">
            Erry adalah seniman berbakat yang mengekspresikan iman, imajinasi,
            dan perjalanan hidup melalui ilustrasi penuh warna dan makna.
            Karyanya membawa pesan harapan dan inspirasi.
          </p>
        </div>
      </section>

      {/* KARYA */}
      <section id="karya" className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Karya Erry</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">Ilustrasi Original</h4>
              <p className="text-sm text-gray-600">
                Gambar karakter unik dengan warna ekspresif dan penuh makna.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">Merchandise Artwork</h4>
              <p className="text-sm text-gray-600">
                Kaos, totebag, tumbler, dan notebook desain eksklusif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold mb-2">Custom Design</h4>
              <p className="text-sm text-gray-600">
                Pesanan desain khusus untuk event atau komunitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Produk Erry
          </h3>

          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block mb-10 p-3 border rounded-xl"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 p-6 rounded-2xl shadow"
              >
                <h4 className="font-semibold mb-2">{product.title}</h4>

                <p className="text-sm text-gray-600 mb-2">{product.desc}</p>

                <p className="font-bold mb-4">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-orange-500 text-white py-2 rounded-xl"
                >
                  Tambah ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART */}
      {cart.length > 0 && (
        <section className="bg-orange-100 py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart size={20} />
              Keranjang ({cart.length})
            </h3>

            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-3 bg-white p-3 rounded-xl"
              >
                <span>
                  {item.title} - Rp {item.price.toLocaleString("id-ID")}
                </span>
                <button onClick={() => removeFromCart(index)}>
                  <Trash2 size={18} className="text-red-500" />
                </button>
              </div>
            ))}

            <p className="font-bold mt-4">
              Total: Rp {total.toLocaleString("id-ID")}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={checkoutWhatsApp}
                className="bg-green-500 text-white px-6 py-2 rounded-xl"
              >
                Checkout WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="bg-gray-400 text-white px-6 py-2 rounded-xl"
              >
                Kosongkan
              </button>
            </div>
          </div>
        </section>
      )}

      {/* MARKETING */}
      <section id="marketing" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Strategi Jual & Promo Online
          </h3>
          <ul className="text-gray-600 space-y-3 text-left">
            <li>• Posting rutin di Instagram & TikTok</li>
            <li>• Gunakan storytelling tentang perjalanan Erry</li>
            <li>• Buat limited edition</li>
            <li>• Kolaborasi komunitas</li>
            <li>• Giveaway & promo launching</li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ERISHOP
      </footer>
    </main>
  );
} 
