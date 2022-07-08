import { useState, useEffect, useCallback } from "react";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Footer from "./components/Footer";
import logo from "./images/logo.png"; // gives image path
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("patientAge");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.patientAge.toLowerCase().includes(query.toLowerCase()) ||
        item.patientName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <img src={logo} alt="logo"/>
      <div className="row">
        <div className="col-lg-6">
          <AddAppointment
            onSendAppointment={(myAppointment) =>
              setAppointmentList([...appointmentList, myAppointment])
            }
            lastId={appointmentList.reduce(
              (max, item) => (Number(item.id) > max ? Number(item.id) : max),
              0
            )}
          />
        </div>
        <div className="col-lg-6">
          <Search
            query={query}
            onQueryChange={(myQuery) => setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChange={(mySort) => setOrderBy(mySort)}
            sortBy={sortBy}
            onSortByChange={(mySort) => setSortBy(mySort)}
          />
          <ul className="">
            {filteredAppointments.map((appointment) => (
              <AppointmentInfo
                key={appointment.id}
                appointment={appointment}
                onDeleteAppointment={(appointmentId) =>
                  setAppointmentList(
                    appointmentList.filter(
                      (appointment) => appointment.id !== appointmentId
                    )
                  )
                }
              />
            ))}
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default App;
