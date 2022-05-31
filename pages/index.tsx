import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { getAllEvents } from "./api/getTicketData";
import Link from "next/link";
import { EventTypes } from "../utils/types";
const Home = ({
  eventsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>iTICKET</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/* Display the list of events here */}
        {eventsData.map((event, index) => (
          <p
            key={index}
            className="mb-8 mt-8 cursor-pointer text-center text-xl font-semibold transition duration-700 hover:text-pink-600"
          >
            {/* Have a link */}
            <Link href={`/event/${event.id}`}>{event.name}</Link>
          </p>
        ))}
      </main>

      {/* Footer */}
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          href="https://www.iticket.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/iTICKET.svg" alt="iTICKET Logo" width={32} height={32} />
        </a>
      </footer>
    </div>
  );
};

export default Home;

// fetch data using getStaticProps in Nextjs;
export async function getStaticProps() {
  const eventsData: EventTypes[] = await getAllEvents();
  return {
    props: { eventsData },
  };
}
