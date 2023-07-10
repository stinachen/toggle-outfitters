import { useShoppingCart } from "use-shopping-cart";
import { useRef, useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { RocketIcon } from "@radix-ui/react-icons";
import {slate} from "@radix-ui/colors";
import {
    ToastViewport,
    ToastRoot,
    ToastTitle,
  } from '../component-library';
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from 'lucide-react';


const AddToCartButton = ({ product, errorTesting, experimentData }: any) => {
  const { addItem } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const timerRef = useRef(0);
  
  async function clickRunner() {
    try {
      const val = await errorTesting();
      if (val == 502) {
          throw { message: "API IS DOWN"}    
      } else {
        await addItem(product);
        await experimentData();
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setOpen(true);
        }, 10);
      }
    } catch (err: any) {
      setError(err.message);
    }
  }

  if (error) {
    return <div className="text-white font-sohnemono">Error: {error}</div>;
  }

  return (
    <>
    {product && 
    <Toast.Provider key={product.id} swipeDirection="left">
      <Button variant="addcart" className="mt-2" key={product.id}
        onClick={() => {
          clickRunner();
        }}><ShoppingCartIcon className="mr-2" color="white" size={24} />
        Add to Cart
        </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Added to Cart!</ToastTitle>
        <RocketIcon
          color={slate.slate1}
          style={{ height: "30", width: "30" }}
        />
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
}
    </>
  );
};

export default AddToCartButton;
