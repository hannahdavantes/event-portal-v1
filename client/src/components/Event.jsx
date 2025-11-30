import { Link, Form } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import Wrapper from "../assets/wrappers/Event";
import { formatDateForInput, formatTimeTo12Hour } from "../utils/dateUtils.js";

const Event = ({ event, showActions, showJoinAction }) => {
  const {
    _id,
    title,
    description,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
    image,
  } = event;

  return (
    <Wrapper>
      <h1 className="card-title">{title}</h1>

      <div className="card-content">
        <div className="card-img-container">
          <img
            src={image ? image : "/default-event-image.jpg"}
            alt={title}
            className="card-img"
          />
        </div>

        <div className="card-details">
          <p className="card-description">{description}</p>

          <p className="card-datetime">
            <span>Start Date:</span> {formatDateForInput(startDate)}
          </p>
          <p className="card-datetime">
            <span>End Date:</span> {formatDateForInput(endDate)}
          </p>
          <p className="card-datetime">
            <span>Time:</span> {formatTimeTo12Hour(startTime)} to{" "}
            {formatTimeTo12Hour(endTime)}
          </p>

          <p className="card-datetime">
            <span>Location:</span> {location}
          </p>

          {showActions && (
            <div className="card-actions">
              <>
                <Link
                  to={`/events/edit/${_id}`}
                  className="btn-action btn-warn"
                >
                  <FiEdit size={16} /> Edit
                </Link>
                <Form method="post" action={`/events/delete/${_id}`}>
                  <button type="submit" className="btn-action btn-danger">
                    <FiTrash2 size={16} /> Delete
                  </button>
                </Form>
                <Form method="post" action={`/events/${_id}/notify`}>
                  <button type="submit" className="btn-action btn-danger">
                    <HiSpeakerphone size={16} /> Notify
                  </button>
                </Form>
              </>
            </div>
          )}

          {showJoinAction && (
            <div className="card-actions">
              <Link to={`/events/${_id}/join`} className="btn-action btn-warn">
                <IoPersonAdd size={16} /> Join Event
              </Link>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Event;
