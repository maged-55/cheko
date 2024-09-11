import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ModalCard from "../cards/modal-card/modal-card";
import "./mapbox.css";
import { useTheme } from "../hooks/theme-context";

mapboxgl.accessToken = "pk.eyJ1IjoibWFqZWQtNTUiLCJhIjoiY20wZ3o4a24wMDUyZTJqczlldTJweDh4MyJ9.nH_f3aFJKnZ_LWSuQXIgQQ";
mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.3.0/mapbox-gl-rtl-text.js"
);

interface Restaurant {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calorie: number;
  category: string;
  lat: number;
  lng: number;
}

interface MapBoxRestaurantProps {
  restaurants: Restaurant[];
}

const MapBox: React.FC<MapBoxRestaurantProps> = ({ restaurants }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [selectedItem, setSelectedItem] = useState<Restaurant | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [
          restaurants[0].lng !== undefined ? restaurants[0].lng : -95.1653,
          restaurants[0].lat !== undefined ? restaurants[0].lat : 64.7631,
        ],
        zoom: 6,
      });

      const map = mapRef.current;

      map.on("load", () => {
        restaurants.forEach((restaurant) => {
          const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
            .setHTML(`
            <div style="display: flex; width: 300px; padding: 10px; box-sizing: border-box;">
              <img 
                src="${restaurant.image || "placeholder-image-url"}" 
                alt="${restaurant.name}" 
                style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;"
              >
              <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 10px; flex-grow: 1;">
                <h3 style="margin: 0; font-size: 20px;${
                  isDarkMode ? "color:black" : ""
                }">${restaurant.name}</h3>
                <div 
                  class="icon-button" 
                  style="
                    background: #F4CBDF; 
                    width: 40px; 
                    height: 39px; 
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    margin-inline-start:60px
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </div>
          `);

          const marker = new mapboxgl.Marker()
            .setLngLat([restaurant.lng, restaurant.lat])
            .setPopup(popup)
            .addTo(map);

          marker.getElement().addEventListener("click", () => {
            popup.addTo(map);
          });

          popup.on("open", () => {
            document
              .querySelector(".icon-button")
              ?.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedItem(restaurant);
                setIsModalVisible(true);
              });
          });
        });
      });

      return () => {
        map.remove();
      };
    }
  }, [restaurants]);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        ref={mapContainerRef}
        className="map_container"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
      />
      {selectedItem && (
        <ModalCard
          isVisible={isModalVisible}
          onClose={handleModalClose}
          item={selectedItem}
          hideQuantity={true}
        />
      )}
    </>
  );
};

export default MapBox;
