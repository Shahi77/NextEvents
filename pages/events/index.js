import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <Fragment>
            <EventsSearch />
            <EventList items={events} />
        </Fragment>
    )

}

export default AllEventsPage;