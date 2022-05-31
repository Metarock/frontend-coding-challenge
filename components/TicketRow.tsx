import React, { useEffect, useState } from "react";
import { getAPrice } from "../pages/api/getTicketData";
import { TicketTypes } from "../utils/types";

interface TicketRowProps {
  // it would get price ids
  //   get the maximum capacity
  //   price name
  // price age
  priceId: number;
  seatCapacity: number;
}

const TicketRow: React.FC<TicketRowProps> = ({ priceId, seatCapacity }) => {
  // Fetch the the price based on the id

  const [getPrice, setGetPrice] = useState<TicketTypes>();

  useEffect(() => {
    async function fetchTicket() {
      let response = await getAPrice(priceId);
      setGetPrice(response);
    }

    fetchTicket();
  }, []);

  console.log("price ", getPrice);

  return (
    <div>
      TicketRow
      <div className="grid grid-col-10 gap-4">
        <p>{getPrice?.price}</p>
      </div>
    </div>
  );
};

export default TicketRow;
