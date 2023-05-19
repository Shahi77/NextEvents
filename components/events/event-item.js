import Link from "next/link";

function EventItem(props) {    //using props because dat should be passed in from outside
    const { title, image, date, location, id } = props;     //object destructuring to pull out that data from props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = location.replace(',', '\n');
    const exploreLink = `/events/&{id}`;

    return (
        <li>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>

        </li>
    )
}


export default EventItem;