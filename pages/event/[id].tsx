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
  eventData,
  getGaAreaData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // useStates
  //   NOTE TO FUTURE: Probably use a state management library to prevent prop drilling with the seat states
  const [seats, setSeats] = useState<string[]>([""]);
  const [seatsAvailable, setSeatsAvailable] = useState([""]);
  const [seatsNotAvailable, setSeatsNotAvailable] = useState([""]);

  // TODO
  // 1. Get the GaArea Data
  // 2. Display the Areas and Price
  return (
    <div>
      Event
      <h1>{eventData.name}</h1>
      <p>{eventData.type}</p>
      <p>{eventData.bookingLimit}</p>
      {/* display the GaArea */}
      {getGaAreaData.map((value, index) => (
        <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
          {/* Display the Ga Area name */}
          <h1>{value.name}</h1>
          {/* Then loop through the price */}
          <div>
            {value.priceIds.map((priceId) => (
              // Get the minimum number based on the event booking limit and the ga's seat Capacity
              <TicketRow
                priceId={priceId}
                seatCapacity={Math.min(value.capacity, eventData.bookingLimit)}
              />
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
  const eventData: EventTypes = await getAnEvent(urlId);

  // if its ga

  const getGaAreaData: GaAreaTypes[] = await getAllGaAreas();
  return {
    props: { eventData, getGaAreaData },
  };
};
