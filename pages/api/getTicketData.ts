import axios from "axios";

const ITICKET_BASEURL = process.env.NEXT_PUBLIC_ITICKET_BASEURL;

// GET EVENTS

// GET ALL EVENTS
export const getAllEvents = async () => {
  const allEventsResponse = await axios.get(ITICKET_BASEURL + "events");

  return allEventsResponse.data;
};

// GET An event

export const getAnEvent = async (id: number) => {
  const anEventResponse = await axios.get(ITICKET_BASEURL + `events/${id}`);

  return anEventResponse.data;
};

// GET GAAREAS

// GET ALL GAAREAS
export const getAllGaAreas = async () => {
  const allGaAreasResponse = await axios.get(ITICKET_BASEURL + "ga-areas");

  return allGaAreasResponse.data;
};

// GET An GAarea
export const getAnGaAreas = async (id: number) => {
  const anGaAreasResponse = await axios.get(ITICKET_BASEURL + `ga-areas/${id}`);

  return anGaAreasResponse.data;
};

// GET PRICES
export const getAllPricesType = async () => {
  const getPricesResponse = await axios.get(ITICKET_BASEURL + `prices`);

  return getPricesResponse.data;
};

export const getAPrice = async (id: number) => {
  const aPriceResponse = await axios.get(ITICKET_BASEURL + `prices/${id}`);

  return aPriceResponse.data;
};
