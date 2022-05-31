import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { useEffect, useState } from "react";
import TicketRow from "../../components/TicketRow";
import { EventTypes, GaAreaTypes } from "../../utils/types";
import { getAllGaAreas, getAnEvent } from "../api/getTicketData";

const Event = ({
  event,
  gaArea,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // useStates
  const [seats, setSeats] = useState<string[]>([""]);
  const [seatsAvailable, setSeatsAvailable] = useState([""]);
  const [seatsNotAvailable, setSeatsNotAvailable] = useState([""]);

  const getEvent = event;
  const getGaArea = gaArea;
  const bookingLimit = event.bookingLimit;

  console.log("booking", bookingLimit);
  console.log("ga area", getGaArea);

  //   TO DO
  // 1. Display the name of the ga name
  return (
    <div>
      Event
      <h1>{event.name}</h1>
      <p>{event.type}</p>
      <p>{event.bookingLimit}</p>
      {/* display the GaArea */}
      {getGaArea.map((value, index) => (
        <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
          {/* Display the Ga Area name */}
          <h1>{value.name}</h1>
          {/* Then loop through the price */}
          <div>
            {value.priceIds.map((priceId) => (
              <TicketRow priceId={priceId} seatCapacity={value.capacity} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;

// get the url PARAM as the prop
export const getServerSideProps = async (context: any) => {
  const urlId = parseInt(context.params?.id as string);
  const event: EventTypes = await getAnEvent(urlId);

  // if its ga

  const gaArea: GaAreaTypes[] = await getAllGaAreas();
  return {
    props: { event, gaArea },
  };
};
