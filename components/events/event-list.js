// it will hold event list component

import EventItem from "./event-items";

function EventList(props) {            //responsible for rendering a list of events
    const { items } = props;
    return
    <ul>
        {items.map(event => <EventItem />)}

    </ul>

}
export default EventList;
