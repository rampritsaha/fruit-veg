"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
  const { userId, isSignedIn } = useAuth();
  const router = useRouter();

  const handleCheckout = () => {
    if (!isSignedIn) {
      // Redirect to login if not signed in
      router.push(`/sign-in?redirect_url=/checkout`);
    } else {
      // Proceed to checkout page
      router.push("/checkout");
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleCheckout}
    >
      Go to Checkout
    </button>
  );
}
