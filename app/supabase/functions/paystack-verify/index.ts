import { createClient } from "@supabase/supabase-js";

export default async function handler(req: Request) {
  try {
    const { reference, amount, user_id } = await req.json();

    if (!reference || !amount || !user_id) {
      return new Response(
        JSON.stringify({ error: "Missing parameters" }),
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const paystackData = await paystackRes.json();

    if (paystackData.data?.status !== "success") {
      return new Response(
        JSON.stringify({ error: "Payment not successful" }),
        { status: 400 }
      );
    }

    await supabase.rpc("credit_wallet", {
      p_user_id: user_id,
      p_amount: amount,
      p_reference: reference,
      p_description: "Wallet funding",
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
