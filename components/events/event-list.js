// it will hold event list components

import EventItem from "./event-item";
//import classes from "./event-list.module.css";

const EventList = (props) => {
    const { items } = props;

    return (
        <ul >
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </ul>
    );
};

export default EventList;