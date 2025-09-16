import { useState } from "react";
import useFetch from "../src/useFetch";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Headers from "./Headers";


const Events=()=>{
    const [eventType, setEventType] = useState("All"); // filter by All/Online/Offline
    const [searchTerm, setSearchTerm] = useState("");   // the simple search text
    const {data = [],loading,error}= useFetch("https://events-backend-lime.vercel.app/events");              //("http://127.0.0.1:3000/events");

    const filteredEvent= eventType=== "All"? data: data.filter((event)=> event.eventType=== eventType)
    
    const finalEvents = filteredEvent.filter(event => {
    if (!searchTerm) return true; // when input is empty, include all (after type filter)

    const term = searchTerm.toLowerCase().trim();

    // normalize title
    const title = (event.title || "").toString().toLowerCase();

    // normalize tags: support both array or comma/string
    let tagsString = "";
    if (Array.isArray(event.eventTags)) tagsString = event.eventTags.join(" ").toLowerCase();
    else if (event.eventTags) tagsString = event.eventTags.toString().toLowerCase();

    // return true if term found in title OR tags
    return title.includes(term) || tagsString.includes(term);
  });

    return(
        data &&
        <div className="container p-4">
            <Headers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="d-flex justify-content-between align-items-center">
            <h2>Meetup Events</h2>
            <div className="dropdown">
                <button className="btn bg-light btn-sm dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Event type
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={(event)=> setEventType("All")} >All</a></li> 
                    <li><a className="dropdown-item" onClick={(event)=> setEventType("Online")}>Online</a></li> 
                    <li><a className="dropdown-item" onClick={(event)=> setEventType("Offline")}>Offline</a></li>
                </ul>
            </div>
            </div>
            <div className="row">
                {
                    finalEvents.map((event)=>(
                        <div className="col-md-4" key={event._id}>
                            <NavLink to={`/events/${event._id}`} >
                            <div className="card mt-3 position-relative" style={{ height: "350px" }} >
                                <img src={event.imageUrl} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px"}} />
                                <p className="mt-2 ms-2 p-1 position-absolute text-dark bg-light rounded">{event.eventType} Event</p>
                            </div>
                            </NavLink>
                            <div>
                                <p>{event.createdAt}</p>
                                <h5>{event.title}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Events;







