"use client"

import { useState } from 'react';
import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function CheckoutButton() {
  const { userId, isSignedIn } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { items } = useCart();

  const handleCheckout = async () => {
    if (!isSignedIn) {
      router.push(`/sign-in?redirect_url=/cart`);
    }
    try {
      // setLoading(true);
      // const response = await fetch("/api/checkout", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ items }),
      // });
      // const { sessionId } = await response.json();
      // const stripe = await stripePromise;
      // await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading || items.length === 0}
      className="w-full"
    >
      {loading ? "Processing..." : "Proceed to Checkout"}
    </Button>
  );
}