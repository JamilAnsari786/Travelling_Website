import React from "react";
import "./Trips.css";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const trips = [
  {
    id: 1,
    title: "Tirthan - Jibhi - Jalori Pass",
    location: "Himachal, India",
    duration: "3 Days",
    description:
      "A refreshing offbeat getaway to the Great Himalayan National Park region. Explore Jibhi’s Mini Thailand, trek to Serolsar Lake or Raghupur Fort, enjoy bonfire nights, and visit the pristine Tirthan Valley & Chhoie Waterfall.",
    price: 1499, // booking starts from this, rest collected before boarding
    image:
      "https://tse1.mm.bing.net/th/id/OIP.lU4mJMpegRkyRM_9wQn8IAHaE8?pid=Api&P=0&h=180",
  },
  {
    id: 2,
    title: "Chopta - Tungnath - Chandrashila",
    location: "Uttarakhand, India",
    duration: "3 Days",
    description:
      "A magical Himalayan journey through Chopta’s lush meadows, the sacred Tungnath (world’s highest Shiva temple), and the breathtaking Chandrashila summit offering 360° views of Nanda Devi, Trishul, and Kedar peaks. Perfect blend of spirituality, trekking, and nature.",
    price: 1999, // booking starts from this, rest collected before boarding
    image:
      "https://enchanttours.com/wp-content/uploads/2021/03/chopta-tungnath-chandrashila-trek-01-enchant-tours.jpg",
  },
  {
    id: 3,
    title: "Manali - Rohtang - Kasol",
    location: "Himachal, India",
    duration: "4 Days",
    description:
      "A scenic Himalayan escape covering Manali’s Hadimba Temple, Mall Road & Old Manali cafes, adventure & snow fun at Solang Valley and Rohtang Pass, river rafting & paragliding in Kullu, and the soulful vibes of Kasol with Manikaran Sahib & Chalal Village trek.",
    price: 1999, // booking starts from this, rest collected before boarding
    image: "https://tourcrafts.com/wp-content/uploads/2022/09/kasol-4.jpg",
  },
  {
    id: 4,
    title: "Udaipur - Kumbhalgarh",
    location: "Rajasthan, India",
    duration: "5 Days",
    description:
      "Discover the royal charm of Rajasthan with Udaipur’s City Palace, Lake Pichola, Jagdish Temple, Saheliyo ki Bari, Vintage Car Museum and Badi Lake. Continue to Kumbhalgarh to explore its majestic fort and spiritual Nathdwara Temple. A perfect blend of history, culture, and architecture.",
    price: 1999, // booking starts from this, rest collected before boarding
    image:
      "https://tse4.mm.bing.net/th/id/OIP.WS70irBeJdN81MmVfi3m2QHaFj?pid=Api&P=0&h=180",
  },
];


const Trips = () => {
  const navigate = useNavigate();

  const handleInquiry = (trip) => {
    const message = `Hello, I want to inquire about the ${trip.title} trip (${trip.duration}) priced at ₹${trip.price}.`;
    window.open(
      `https://wa.me/919643296976?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleDetails = (tripId) => {
    // scroll to top before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/details/${tripId}`);
  };

  return (
    <>
      <h2 id="packages" className="packages-heading">
        ✨ Popular Packages
      </h2>
      <div className="trips-container">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <div className="trip-image">
              <img src={trip.image} alt={trip.title} />
              <span className="duration">{trip.duration}</span>
            </div>
            <div className="trip-content">
              <h3>{trip.title}</h3>
              <p className="location">{trip.location}</p>
              <p className="description">{trip.description}</p>
              <div className="trip-footer">
                <span className="price">
                  From <strong>₹{trip.price}</strong>
                </span>
                <div className="trip-actions">
                  <button
                    onClick={() => handleInquiry(trip)}
                    className="inquiry-btn"
                  >
                    <FaWhatsapp className="whatsapp-icon" /> Inquiry
                  </button>
                  <button
                    onClick={() => handleDetails(trip.id)}
                    className="details-btn"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trips;
