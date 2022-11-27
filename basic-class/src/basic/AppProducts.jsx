import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  const client = useQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
      <button
        onClick={() => {
          client.invalidateQueries(["products"]);
        }}
      >
        버튼
      </button>
    </QueryClientProvider>
  );
}
