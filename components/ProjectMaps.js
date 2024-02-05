import React, { useEffect, useRef } from 'react';
import { projects } from '../database/projects';

const ProjectMaps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      mapRef.current = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapRef.current);

      if (projects) {
        projects.forEach((project) => {
          L.marker([project.latitude, project.longitude])
            .addTo(mapRef.current)
            .bindPopup(
              `<b>${project.project_name}</b><br>${project.description}`,
            );
        });
      }

      return () => {
        mapRef.current.remove();
      };
    }
  }, []);

  return <div id="map"></div>;
};

export default ProjectMaps;
