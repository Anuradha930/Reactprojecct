// src/AboutUs.jsx
import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";

function AboutUs() {
  const [metrics, setMetrics] = useState({
    ordersToday: 1240,
    activeUsers: 312,
    avgDeliveryMin: 28.4,
    fiveStarPct: 89,
    activeDrivers: 48,
    newSignups: 22,
    mealsServed: 5420,
  });

  const [team] = useState([
    { name: "Anu Radha", role: "Founder & CEO", experience: "10 yrs", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rajesh Kumar", role: "Head Chef", experience: "8 yrs", photo: "https://randomuser.me/api/portraits/men/35.jpg" },
    { name: "Sneha Patel", role: "Marketing Lead", experience: "6 yrs", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Vikram Singh", role: "Logistics Head", experience: "7 yrs", photo: "https://randomuser.me/api/portraits/men/52.jpg" },
    { name: "Priya Sharma", role: "Customer Relations", experience: "5 yrs", photo: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Arjun Mehta", role: "Delivery Supervisor", experience: "6 yrs", photo: "https://randomuser.me/api/portraits/men/22.jpg" },
  ]);

  const mounted = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mounted.current) return;

      setMetrics((m) => {
        const rnd = (n) => Math.round((Math.random() - 0.5) * n);
        return {
          ordersToday: Math.max(0, m.ordersToday + rnd(15)),
          activeUsers: Math.max(0, m.activeUsers + rnd(10)),
          avgDeliveryMin: Math.max(10, +(m.avgDeliveryMin + (Math.random() - 0.5) * 2).toFixed(1)),
          fiveStarPct: Math.min(100, Math.max(70, m.fiveStarPct + (Math.random() - 0.5) * 3)),
          activeDrivers: Math.max(10, m.activeDrivers + rnd(5)),
          newSignups: Math.max(0, m.newSignups + rnd(3)),
          mealsServed: Math.max(0, m.mealsServed + rnd(50)),
        };
      });
    }, 2000);

    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="aboutus-page">
      {/* Header */}
      <div className="aboutus-header">
        <h1>RoyalFood</h1>
        <p>
          RoyalFood delivers gourmet meals to your doorstep with speed, quality, and care.
          Trusted by thousands daily, we ensure freshness, taste, and happiness in every bite.
          Our platform connects chefs, delivery partners, and food lovers in real time.
        </p>
      </div>

      {/* Metrics */}
      <div className="metrics-marquee">
        <div className="marquee-content">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="metric-card">
              <span className="metric-value">
                {value}
                {key === "avgDeliveryMin" ? " min" : key === "fiveStarPct" ? "%" : ""}
              </span>
              <span className="metric-label">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())
                  .replace("Pct", " Reviews")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="aboutus-content">
        {/* Mission */}
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Deliver premium, flavor-forward meals with speed and care. Partnering with local farms,
            maintaining strict freshness standards, and obsessing over every detail so your meal feels royal every time.
          </p>
        </div>

        {/* Core Values */}
        <div className="values">
          <h2>Our Core Values</h2>
          <ul>
            <li>🍽️ Quality First – Chef-curated menus and fresh ingredients</li>
            <li>⚡ Fast & Reliable – Optimized delivery and live tracking</li>
            <li>🤝 Community – Supporting local farmers and businesses</li>
            <li>♻️ Sustainability – Eco-friendly packaging & waste reduction</li>
            <li>💡 Innovation – New flavors, seasonal menus, and tech-driven service</li>
          </ul>
        </div>

        {/* History */}
        <div className="history">
          <h2>Our Journey</h2>
          <ul>
            <li><b>2015:</b> Founded as a small kitchen</li>
            <li><b>2018:</b> Expanded to 3 major cities</li>
            <li><b>2021:</b> Reached 1M+ satisfied customers</li>
            <li><b>2024:</b> Awarded “Best Food Delivery Experience” nationwide</li>
            <li><b>2025:</b> Serving over 10,000 daily orders with live tracking</li>
          </ul>
        </div>

        {/* Team */}
        <div className="team">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <img src={member.photo} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <small>{member.experience} Experience</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
