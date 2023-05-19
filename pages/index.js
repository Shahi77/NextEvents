import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";


function HomePage() {
    const FeaturedEvents = getFeaturedEvents;
    return (
        <div>
            <EventList items={FeaturedEvents} />
        </div>
    )

}

export default HomePage;


