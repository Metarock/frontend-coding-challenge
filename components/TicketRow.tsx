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
      {/* Loop through the ticket row using the seating capacity */}
      <div>
        {[...Array(seatCapacity)].map((_, index) => (
          // Display it now as a row instead of column
          <p key={index}>${getPriceData?.price}</p>
        ))}
      </div>
    </div>
  );
};

export default TicketRow;
