import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";

function AllEventsPage() {
    const events = getAllEvents();
    return (
        <Fragment>
            <EventsSearch />
            <EventList items={events} />
        </Fragment>
    )

}

export default AllEventsPage;