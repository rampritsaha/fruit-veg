import { Container } from "@/components/layout/Container";
import { stripe } from "@/lib/stripe";
import { CheckCircle } from "lucide-react";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}) {
  if (!searchParams.session_id) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(
    searchParams.session_id
  );

  return (
    <Container className="py-12">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-4">
          Your payment was successful. We&rsquo;ll send you an email
          confirmation shortly.
        </p>
        <p className="text-sm text-muted-foreground">
          Order ID:{" "}
          {typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || "N/A"}
        </p>
      </div>
    </Container>
  );
}
