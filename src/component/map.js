import React, { Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import '../index.css';
import styled from 'styled-components'

const Wrapper = styled.div `
 width : ${props => props.width};
 height: ${props => props.height};
`;

class MapComponent extends Component {

    componentDidMount() {
        this.drawChart(3.1390, 101.6869)
    }

    drawChart(lat, lng) {

        let myIcon = L.icon({
            iconUrl: 'img/map-marker.png',
          //  iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            // shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });

        this.map = L.map('map', {
            center: [lat, lng],
            zoom: 18,
            zoomControl: false,
            dragging : true,
            mapId : "map",
            zoomAnimation : true,
            scrollWheelZoom : true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 25,
            // maxNativeZoom: 17
        }).addTo(this.map)

        L.marker([lat, lng], {icon: myIcon}).addTo(this.map);
    }

    getDetails(data) {

        if (data !== 'init') {

            this.map.off();
            this.map.remove();
            this.drawChart(data.location.lat, data.location.lng)

        }
    }

    render() {
        this.getDetails(this.props.valueFromParent)
        return <Wrapper width = "100%"
        height = "720px"
        id = "map" / >
    }

};


export default MapComponent;