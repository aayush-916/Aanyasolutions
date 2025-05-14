import React from "react";
import './Services.css'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Boxes, Palette, Layout, Code2, GaugeCircle } from "lucide-react";

function Services() {
  return (
    <motion.div
      className="service-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="services"
    >
      <h2 id="service" className="service-heading">
        Our <span>Services</span>
      </h2>
      <p className="service-description">
        We provide tailored business solutions such as back office and inventory management, compelling digital designs, scalable websites, and robust software tailored to your business goals.
      </p>

      <div className="service-grid">
        {/* Back Office Management */}
        <Link to="/BackOfficeDetail">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <FileText size={48} className="mx-auto text-blue-600 mb-4" /></div>
            <div className="rotating-ball"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Back Office Management</h3>
            <p className="service-card-text">
              We handle your Data Entry and back office tasks, so you can focus on growing your business efficiently.
            </p>
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>

        {/* Inventory Management */}
        <Link to="/InventoryManagement">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <Boxes size={48} className="mx-auto text-orange-600 mb-4" /></div>
            <div className="rotating-ball2"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Inventory Management</h3>
            <p className="service-card-text">
              Optimize stock levels, eliminate errors, and improve operational efficiency with our smart inventory solutions.
            </p>
            
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>

        {/* Graphic Designing */}
        <Link to="/GraphicDesigning">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <Palette size={48} className="mx-auto text-pink-600 mb-4" /></div>
            <div className="rotating-ball3"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Graphic Designing</h3>
            <p className="service-card-text">
              We create eye-catching visuals and branding that captivate your audience and communicate your vision clearly.
            </p>
            
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>

        {/* Website Designing */}
        <Link to="/WebsiteDesigning">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <Layout size={48} className="mx-auto text-green-600 mb-4" /></div>
            <div className="rotating-ball"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Website Designing</h3>
            <p className="service-card-text">
              Beautiful, responsive, and intuitive website designs that help you stand out online and convert more visitors.
            </p>
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>

        {/* Software Development */}
        <Link to="/SoftwareDevelopment">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <Code2 size={48} className="mx-auto text-purple-600 mb-4" /></div>
            <div className="rotating-ball2"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Software Development</h3>
            <p className="service-card-text">
              From planning to deployment, we build efficient, scalable, and secure software tailored for your operations.
            </p>
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>

        {/* Website Optimisation */}
        <Link to="/WebsiteOptimisation">
        <div className="service-card">
          <div className="icon-container">
            <div className="icon">
            <GaugeCircle size={48} className="mx-auto text-red-600 mb-4" /></div>
            <div className="rotating-ball3"></div>
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Website Optimisation</h3>
            <p className="service-card-text">
              Improve speed, SEO, performance, and user experience with our result-driven website optimization strategies.
            </p>
            
              <button className="button-87">Discover More ➜</button>
          </div>
        </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Services;
