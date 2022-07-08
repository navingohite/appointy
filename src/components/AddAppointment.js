import { useState } from "react";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    patientName: "",
    patientAge: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      patientName: formData.patientName,
      patientAge: formData.patientAge,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div className="form-group my-2">
      <div className="card-header bg-info">
        <button
          onClick={() => {
            setToggleForm(!toggleForm);
          }}
          className={`btn btn-light ${
            toggleForm ? "rounded-t-md" : "rounded-md"
          }`}
        >
          <div> Add Appointment</div>
        </button>
      </div>

      {toggleForm && (
        <div>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <div>
              <input
                type="text"
                name="patientName"
                id="patientName"
                onChange={(event) => {
                  setFormData({ ...formData, patientName: event.target.value });
                }}
                value={formData.patientName}
                className="form-control"
              />
            </div>
          </div>

          <div>
            <label htmlFor="patientAge">Age</label>
            <div className="form-group">
              <input
                type="text"
                name="patientAge"
                id="patientAge"
                onChange={(event) => {
                  setFormData({ ...formData, patientAge: event.target.value });
                }}
                value={formData.patientAge}
                className="form-control"
              />
            </div>
          </div>

          <div>
            <label htmlFor="aptDate">Appointment Date</label>
            <div className="form-group">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                onChange={(event) => {
                  setFormData({ ...formData, aptDate: event.target.value });
                }}
                value={formData.aptDate}
                className="form-control"
              />
            </div>
          </div>
          <div>
            <label htmlFor="aptTime">Appointment Time</label>
            <div className="form-group">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                onChange={(event) => {
                  setFormData({ ...formData, aptTime: event.target.value });
                }}
                value={formData.aptTime}
                className="form-control"
              />
            </div>
          </div>
          <div>
            <label htmlFor="aptNotes">Signs and symptoms</label>
            <div className="form-group">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                onChange={(event) => {
                  setFormData({ ...formData, aptNotes: event.target.value });
                }}
                value={formData.aptNotes}
                className="form-control"
              ></textarea>
            </div>
          </div>
          <br></br>
          <button
            type="submit"
            onClick={formDataPublish}
            className="btn btn-sm btn-info"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
