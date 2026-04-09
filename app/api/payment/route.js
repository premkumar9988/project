import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
   
    const body = await request.json();
    const { amount, currency } = body;

    
    if (!amount || !currency) {
      return NextResponse.json(
        { message: "Amount and currency required" },
        { status: 400 }
      );
    }

     const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: "Book Purchase",
            },
            unit_amount: amount, 
          },
          quantity: 1,
        },
      ],

      
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    
    return NextResponse.json({
      url: session.url,
    });

  } catch (error) {
    console.error("STRIPE ERROR:", error);

    return NextResponse.json(
      { message: "Payment failed" },
      { status: 500 }
    );
  }
}