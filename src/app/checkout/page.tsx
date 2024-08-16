"use client";
import { Checkout, ProtectedRoute } from "@/components";

const CheckoutPage: React.FC = () => {
    return (
      <ProtectedRoute><Checkout/></ProtectedRoute>
    );
  };
  
  export default CheckoutPage;