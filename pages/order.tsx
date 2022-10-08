import useOrderForm from "../components/order/useOrderForm";

export default function OrderPage() {
  const [currentStage, previousStages] = useOrderForm();
  return (
    <div>
      {previousStages}
      {currentStage}
    </div>
  );
}
