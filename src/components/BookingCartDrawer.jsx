import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteData } from '../data/siteData';

export const CartButton = () => {
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      data-cursor="Cart"
      className="relative p-2.5 rounded-full bg-[#5A1226]/10 text-[#2B2B2B] hover:bg-[#5A1226] hover:text-[#C9A24B] transition-all flex items-center justify-center border border-[#C9A24B]/30"
      title="View Booking Cart"
    >
      <ShoppingBag size={18} />
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C9A24B] text-[#5A1226] font-bold text-[10px] flex items-center justify-center shadow-md animate-bounce">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

export const BookingCartDrawer = () => {
  const { cartItems, removeFromCart, clearCart, totalAmount, isCartOpen, setIsCartOpen } = useCart();

  const handleWhatsAppCheckout = () => {
    const itemsList = cartItems.map(i => `• ${i.name} (Rs. ${i.price})`).join('%0A');
    const message = `Hello Arfa's Salon Branch II,%0A%0AI have selected the following services for booking:%0A${itemsList}%0A%0A*Estimated Total:* Rs. ${totalAmount.toLocaleString()}%0A%0APlease confirm my appointment!`;
    window.open(`https://wa.me/${siteData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 max-w-md w-full bg-[#FFF9F3] shadow-2xl flex flex-col justify-between p-6 border-l border-[#C9A24B]/30 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#C9A24B]/20">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#5A1226]" />
                <h3 className="font-serif text-2xl font-bold text-[#5A1226]">Your Booking Cart</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full bg-[#5A1226]/10 text-[#5A1226] hover:bg-[#5A1226] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-[#2B2B2B]/60">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-30 text-[#C9A24B]" />
                  <p className="font-serif text-lg">Your cart is empty.</p>
                  <p className="text-xs font-poppins mt-1">Explore our services and add items to your booking.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card p-4 rounded-2xl flex items-center justify-between border border-[#C9A24B]/30"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#5A1226]">{item.name}</h4>
                      <span className="text-xs text-[#C9A24B] font-semibold">Rs. {item.price}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Total / Checkout */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-[#C9A24B]/20 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-sm text-[#2B2B2B]/70 uppercase tracking-wider">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-[#5A1226]">
                    Rs. {totalAmount.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 rounded-full bg-[#25D366] text-white font-poppins font-bold text-sm shadow-xl hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} fill="white" />
                  <span>Send Booking to WhatsApp</span>
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 rounded-full text-xs font-semibold text-[#2B2B2B]/60 hover:text-red-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
