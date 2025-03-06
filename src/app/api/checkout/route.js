// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

//   try {
//     const { roomName, roomPrice } = req.body;
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [{
//         price_data: {
//           currency: "eur",
//           product_data: { name: roomName },
//           unit_amount: (Number(roomPrice) + 35) * 100,
//         },
//         quantity: 1,
//       }],
//       mode: "payment",
//       success_url: `${req.headers.origin}/reservation/success`,
//       cancel_url: `${req.headers.origin}/reservation/cancel`,
//     });

//     res.status(200).json({ id: session.id });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
