
const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <div className="form-group my-2">
     
      <ul class="list-group d-flex">
        <li className="list-group-item">
          <div className="">
            <span className="">{appointment.patientName}</span>
          </div>
          <div>
            <b>Age:</b> {appointment.patientAge}
          </div>
          <div>
            <b>Date:</b> {appointment.aptDate}
          </div>
          <div>{appointment.aptNotes}</div>
          <div className="card-header">
            <button
              onClick={() => onDeleteAppointment(appointment.id)}
              type="button"
              className="btn btn-sm btn-outline-danger ml-auto"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AppointmentInfo;
