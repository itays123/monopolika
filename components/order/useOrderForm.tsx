import Order from "../../interfaces/Order";
import useFormStages from "../../utils/forms/useFormStages";
import ProductStage from "./ProductStage";

const useOrder = () => {
  return {
    doFetch: (order: Order) => {
      return new Promise<void>((res) => {
        setTimeout(() => {
          res();
        }, 700);
      });
    },
  };
};

export default function useOrderForm() {
  const { doFetch } = useOrder();
  return useFormStages([new ProductStage()], doFetch);
}
