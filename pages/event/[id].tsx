import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { useEffect } from "react";
import { EventTypes } from "../../utils/types";
import { getAllGaAreas, getAnEvent } from "../api/getTicketData";

const Event = ({
  event,
  gaArea,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // useStates
  console.log("in event", event);
  console.log("gaArea", gaArea);
  return (
    <div>
      Event
      <h1>{event.name}</h1>
      <p>{event.type}</p>
      <p>{event.bookingLimit}</p>
    </div>
  );
};

export default Event;

// get the url PARAM as the prop
export const getServerSideProps: GetServerSideProps = async (context) => {
  const urlId = parseInt(context.params?.id as string);
  const getEvent: EventTypes = await getAnEvent(urlId);

  // if its ga

  let getGaArea = null;
  if (getEvent.type === "generalAdmission") {
    getGaArea = await getAllGaAreas();
  }
  return {
    props: { event: getEvent, gaArea: getGaArea },
  };
};
