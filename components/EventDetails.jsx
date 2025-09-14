import { useParams } from "react-router-dom";
import useFetch from "../src/useFetch";
import Headers from "./Headers";

const EventDetails=()=>{
    const {eventId}= useParams();
    const {data,loading,error}= useFetch(`https://events-backend-seven.vercel.app/events/${eventId}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching event details</p>;
    if (!data) return <p>No event found</p>;


    return(
        <>
            <div className="container p-2">
                <Headers />
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-2 mt-3">{data.title}</h2>
                        <div>Hosted By:</div>
                        <h6 className="mb-4">{data.hostedBy}</h6>
                        <img src={data.imageUrl} width="400" height="350" />
                        <h4 className="mt-3 mb-3">Details:</h4>
                        <p>{data.details}</p>
                        <h4 className="mt-3 mb-3">Additional Information:</h4>
                        <p className="fw-semibold mb-1">Dress Code: <span className="fw-normal">{data.dressCode}</span></p>
                        <p className="fw-semibold mb-1">Age Restrictions: <span className="fw-normal">{data.ageRestrictions}</span></p> 
                        <h4 className="mt-3 mb-3">Event Tags:</h4>
                        {/* <button className="btn btn-danger">{data.eventTags}</button> */}
                        {data.eventTags.map((tag, index) => (
                        <button key={index} className="btn btn-danger btn-sm">
                            {tag}
                        </button>
                        ))}
                    </div>
                    <div className="col-md-6 mt-5 p-4 justify-content-center">
                        <div className="card p-4" style={{ width: "18rem", height: "12rem" }}>
                            <p>{data.createdAt}</p>
                            <p>Marketing City, 789 Marketing Avenue, City</p>
                            <p>$3000</p>
                        </div>

                        <div className="fs-4 fw-bold">
                            <h4 className="mt-3">Speakers:</h4>
                            <div className="row">
                                {data.author && data.author.length > 0 ? (
                                data.author.map((speaker) => (
                                <div className="col-md-4" key={speaker._id}>
                                <img src={speaker.imageUrl} width="100" height="100" />
                                <p className="mt-2 mb-0">{speaker.name}</p>
                                <div className="fw-normal fs-6 ">{speaker.speakerType}</div>
                            </div>
                        ))
                        ) : (
                        <p>No speakers assigned</p>
                        )}
                            </div>
                        </div>

                        {/* <div className="fs-4 fw-bold p-3">
                            <p>Speakers:</p>
                            {data.author ? (
                                <>
                                <p>{data.author.name}</p>
                                <img src={data.author.imageUrl} width="100" height="100" alt={data.author.name} />
                                <p>{data.author.speakerType}</p>
                                </>
                            ) : (
                                <p>No speaker assigned</p>
                            )}
                        </div> */}
                    </div> 
                </div>
            </div>
        </>
    )
}

export default EventDetails;




