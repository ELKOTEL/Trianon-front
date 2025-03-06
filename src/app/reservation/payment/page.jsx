"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Banner from "../../../components/Banner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingDetails");
    if (savedBooking) {
      setBookingDetails(JSON.parse(savedBooking));
    }
  }, []);

  const handlePayment = async () => {
    if (!stripe || !elements || !bookingDetails) return;
    if (!agreeTerms) {
      alert("Vous devez accepter les conditions générales de vente.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingDetails),
    });

    const session = await res.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error);
      setLoading(false);
    }
  };

  if (!bookingDetails) return <p>Chargement des informations...</p>;

  return (
    <div>
      <Banner title="Informations de paiement" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-[#5C4033]">
          <h2 className="text-3xl font-bold mb-6">Votre séjour</h2>

          {/* Booking Summary */}
          <div className="bg-[#F4E1D2] p-6 rounded-lg mb-6">
            <p><strong>Arrivée:</strong> {bookingDetails.checkInDate} à 17:30</p>
            <p><strong>Départ:</strong> {bookingDetails.checkOutDate} à 11:15</p>
            <p><strong>Invités:</strong> {bookingDetails.numAdults} Adultes, {bookingDetails.numChildren} Enfants</p>
            <p><strong>Chambre:</strong> {bookingDetails.roomName}</p>
            <p><strong>Tarif:</strong> Non annulable</p>
          </div>

          {/* Pricing Details */}
          <div className="bg-[#E2C8A4] p-6 rounded-lg mb-6">
            <p>Hébergement: <strong>{bookingDetails.roomName}</strong></p>
            <p>Prix de la chambre: <strong>€{bookingDetails.roomPrice} / nuit</strong></p>
            <p>Parking: <strong>€35</strong></p>
            <p className="text-xl font-bold mt-4">Total: <strong>€{Number(bookingDetails.roomPrice) + 35}</strong></p>
          </div>

          {/* Gift Card Input */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Avez-vous une carte cadeau ?</label>
            <div className="flex">
              <input type="text" placeholder="Code cadeau" className="w-full p-3 rounded-l-lg border-2 border-[#E2C8A4]" />
              <button className="bg-[#F4E1D2] text-[#5C4033] px-4 py-3 rounded-r-lg font-semibold">Appliquer</button>
            </div>
          </div>

          {/* Payment Form */}
          <h2 className="text-2xl font-bold mb-4">Complétez les détails de vos paiements</h2>
          <p className="text-sm mb-4">100% du montant sera débité maintenant.</p>

          <div className="border p-4 rounded-lg bg-gray-100">
            <CardElement options={{ style: { base: { fontSize: "18px" } } }} />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="terms" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              J'accepte la <a href="/terms" className="text-[#5C4033] underline">politique de remboursement</a> et les <a href="/terms" className="text-[#5C4033] underline">conditions générales de vente</a>.
            </label>
          </div>

          {/* Pay Now Button */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full py-3 px-6 mt-6 ${loading ? "bg-gray-400" : "bg-[#F4E1D2] hover:bg-[#E2C8A4]"} text-[#5C4033] font-semibold rounded-lg shadow-lg transition duration-300`}
          >
            {loading ? "Traitement..." : `Payer maintenant €${Number(bookingDetails.roomPrice) + 35}`}
          </button>
        </div>
      </div>
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default Payment;
