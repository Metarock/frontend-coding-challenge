import React, { useEffect, useState } from "react";
import { getAPrice } from "../pages/api/getTicketData";
import { TicketTypes } from "../utils/types";

interface TicketRowProps {
  priceId: number;
  seatCapacity: number;
}

const TicketRow: React.FC<TicketRowProps> = ({ priceId, seatCapacity }) => {
  const [getPriceData, setGetPriceData] = useState<TicketTypes>();

  useEffect(() => {
    // Fetch the the price based on the id

    async function fetchTicket() {
      let response = await getAPrice(priceId);
      setGetPriceData(response);
    }

    fetchTicket();
  }, []);

  return (
    <div className="grid grid-col-10 gap-4">
      {getPriceData?.priceName}
      <div>
        {/* Loop through the ticket row using the seating capacity */}
        {[...Array(seatCapacity)].map((seat, index) => (
          // TODO
          // 1. Take into account of more than 10 items in a row
          //      -> Ex. if there 4000, there will be 400 rows
          <p key={index}>${getPriceData?.price}</p>
        ))}
      </div>
    </div>
  );
};

export default TicketRow;
