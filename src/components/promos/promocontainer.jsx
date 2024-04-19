import "./promo.css";
import { LeftPromo } from "../../components/promos/leftpromo";
import { RightPromo } from "../../components/promos/rightpromo";

export const PromoContainer = () => {
  return (
    <div className="promo">
      <LeftPromo />
      <RightPromo />
    </div>
  );
};
