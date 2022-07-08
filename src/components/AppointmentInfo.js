import { BiTrash } from "react-icons/bi"

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl leading-tight">{appointment.patientName}</span>
        </div>
        <div><b className="leading-tight">Age:</b> {appointment.patientAge}</div>
        <div><b className="leading-tight">Date:</b> {appointment.aptDate}</div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
      <button onClick={() => onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 ml-5 border-radius:50% text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
    </li>
  )
}

export default AppointmentInfo