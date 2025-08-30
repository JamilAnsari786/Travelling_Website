import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./TipDetails.css";
import WhatsAppButton from "../../whatsaapbutton/WhatsAppButton";

const tripDetails = {
  2: {
    title: "Chopta - Tungnath - Chandrashila (2N/3D)",
    days: [
      {
        day: "Day 1",
        plan: [
          "Meet at Akshardham Metro Station, Delhi (evening departure)",
          "Stop for dinner on the way",
          "Early morning Ganga Aarti at Haridwar",
          "Drive via Devprayag & Maa Dhari Devi Temple",
          "Arrive Chopta, check-in rooms/camps",
          "Dinner & overnight stay",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Breakfast in Chopta",
          "Trek to Tungnath Temple (world’s highest Shiva temple)",
          "Trek further to Chandrashila Peak for 360° Himalayan views",
          "Return to campsite, bonfire & games",
          "Dinner & overnight stay",
        ],
      },
      {
        day: "Day 3",
        plan: [
          "Breakfast with scenic views",
          "Head to Sari Village, trek to Deoriatal",
          "Return trek & depart for Delhi (stop at Rishikesh)",
          "Arrive Delhi early morning with memories",
        ],
      },
    ],
    inclusions: [
      "Delhi–Delhi transportation",
      "All toll & taxes",
      "2 breakfasts, 2 dinners",
      "Tour coordinator",
      "All sightseeing as per itinerary",
      "Music & Bonfire",
      "No hidden charges",
    ],
    exclusions: [
      "Personal expenses",
      "Lunch",
      "Entry/activity fees",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
    pdf: "https://drive.google.com/file/d/1XctMncRUzrquuQNAXz7Zk764XH0hIzo_/view?usp=sharing",
  },

  1: {
    title: "Tirthan – Jibhi – Jalori Pass (3N/4D)",
    days: [
      {
        day: "Day 1",
        plan: [
          "Meet at Delhi metro station (evening departure)",
          "Depart from Delhi to Jibhi",
          "Stop for dinner on the way",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Reach Jibhi in the morning, check-in to homestay & rest",
          "Explore Mini Thailand & nearby attractions",
          "Click pictures of Jibhi Valley",
          "Return to homestay/hotel for bonfire",
          "Dinner & overnight stay",
        ],
      },
      {
        day: "Day 3",
        plan: [
          "Wake up early, have breakfast & head to Jalori Pass",
          "Enjoy stunning 360° view of the Great Himalayas & Kullu Valley",
          "Optional trek to Serolsar Lake or Raghupur Fort",
          "Return to camps/homestay for bonfire & music",
          "Dinner & overnight stay",
        ],
      },
      {
        day: "Day 4",
        plan: [
          "Breakfast with mesmerizing view",
          "Depart for Tirthan Valley",
          "Visit Tirthan Valley & Chhoie Waterfall",
          "Depart for Delhi in evening",
          "Arrive Delhi early morning with lifetime memories",
        ],
      },
    ],
    inclusions: [
      "Delhi–Delhi transportation",
      "All toll & taxes",
      "2 breakfasts, 2 dinners",
      "Tour coordinator",
      "All sightseeing as per itinerary",
      "Bonfire & Music",
      "No hidden charges",
    ],
    exclusions: [
      "Personal expenses",
      "Lunch",
      "Any activity fees",
      "Entry fees",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
    pdf: "https://drive.google.com/file/d/1SaEr6J2G29Lvskxie24TdDBYLR65AaMF/view?usp=sharing",
  },

  3: {
    title: "Manali – Rohtang – Kasol (3N/4D)",
    days: [
      {
        day: "Day 1",
        plan: [
          "Evening departure from Delhi/Chandigarh by Volvo/Tempo Traveller",
          "Dinner enroute",
          "Overnight journey to Manali",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Arrive Manali in the morning, pickup from bus stand",
          "Hotel check-in & freshen up",
          "Local sightseeing: Hadimba Devi Temple, Mall Road, Club House, Van Vihar, Monastery",
          "Explore Old Manali cafes & Mall Road",
          "Dinner & overnight stay in hotel",
        ],
      },
      {
        day: "Day 3",
        plan: [
          "Breakfast at hotel",
          "Full-day sightseeing: Solang Valley, Nehru Kund & Rohtang Pass",
          "Adventure & snow activities",
          "Return to hotel, dinner & overnight stay",
        ],
      },
      {
        day: "Day 4",
        plan: [
          "Breakfast & hotel checkout",
          "Head to Kullu (river rafting & paragliding options)",
          "Proceed to Kasol, check-in camp/hotel",
          "Explore local markets & cafes",
          "Bonfire, music party, dinner & overnight stay",
        ],
      },
      {
        day: "Day 5",
        plan: [
          "Breakfast & checkout",
          "Visit Manikaran Gurudwara",
          "Explore Kasol local market & Chalal Village trek",
          "Drop at Bhuntar/Kasol bus stand",
          "Evening departure to Delhi/Chandigarh",
        ],
      },
      {
        day: "Day 6",
        plan: ["Arrive back in Delhi/Chandigarh early morning with memories"],
      },
    ],
    inclusions: [
      "Delhi–Delhi transportation",
      "All toll & taxes",
      "3 breakfasts, 3 dinners",
      "Tour coordinator",
      "All sightseeing as per itinerary",
      "Music & Bonfire",
      "No hidden charges",
    ],
    exclusions: [
      "Personal expenses",
      "Lunch",
      "Any activity/entry fees",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
    pdf: "https://drive.google.com/file/d/1yDbehjlXnxOASMSQc6JzRahNv6u79GHh/view?usp=sharing",
  },

  4: {
    title: "Udaipur – Kumbalgarh (4N/5D)",
    days: [
      {
        day: "Day 1",
        plan: [
          "Pickup from Delhi/Gurgaon",
          "Depart overnight for Udaipur via Aravalli ranges & Rajasthani villages",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Arrive Udaipur & check-in to hotel",
          "Visit Lake Pichola, City Palace, Jagdish Temple, Bagore ki Haveli",
          "Return to hotel, dinner & overnight stay",
        ],
      },
      {
        day: "Day 3",
        plan: [
          "Breakfast at hotel",
          "Udaipur sightseeing: Saheliyon ki Bari, Vintage Car Museum, Bada Bazaar, Maharana Pratap Memorial, Badi Lake",
          "Return to hotel, dinner & overnight stay",
        ],
      },
      {
        day: "Day 4",
        plan: [
          "Breakfast & hotel checkout",
          "Drive to Kumbhalgarh",
          "Visit Kumbhalgarh Fort & Nathdwara Temple (if time permits)",
          "Overnight return journey starts",
        ],
      },
      {
        day: "Day 5",
        plan: [
          "Arrive back in Delhi early morning",
          "Trip concludes with memories",
        ],
      },
    ],
    inclusions: [
      "Delhi–Delhi transportation (AC bus/traveller)",
      "Accommodation (4-star hotel)",
      "2 breakfasts, 2 dinners",
      "Tour guide",
      "All sightseeing as per itinerary",
      "Toll tax & driver allowance",
      "Pool party & games",
    ],
    exclusions: [
      "All entry tickets",
      "Lunch",
      "Personal expenses",
      "Taxi/jeep/auto fare from parking to monuments",
      "Anything not mentioned in inclusions",
    ],
    pdf: "https://drive.google.com/file/d/11ZxNZ-XluCznOKKauaMOeXHYCwYCl4Zq/view?usp=sharing",
  },
};

const TripDetails = () => {
  const { id } = useParams();
  const details = tripDetails[id];

  if (!details)
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        ❌ Trip not found!
      </h2>
    );

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <div className="trip-details">
        <h2>{details.title}</h2>

        <h3>Itinerary</h3>
        {details.days.map((day, i) => (
          <div key={i} className="day-block">
            <h4>{day.day}</h4>
            <ul>
              {day.plan.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <h3>✔ Inclusions</h3>
        <ul>
          {details.inclusions.map((inc, i) => (
            <li key={i}>{inc}</li>
          ))}
        </ul>

        <h3>❌ Exclusions</h3>
        <ul>
          {details.exclusions.map((exc, i) => (
            <li key={i}>{exc}</li>
          ))}
        </ul>

        <h3>Download Full PDF</h3>
        <a href={details.pdf} download target="_blank" className="download-btn">
          📥 Download Itinerary PDF
        </a>
      </div>

      <Footer />
    </>
  );
};

export default TripDetails;