'use client'

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { ReactElement } from "react";

import Map from "./map.component";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <p>Error occurred!</p>;
  return <p>...Loading</p>;
};

const MapWrapper = (props: { apiKey: string|undefined }) => {
  const mapLatLong = { lat: 41.38712968898533, lng: -81.90403228425451 };
  const zoom = 19;

  return (
    <>
      {props.apiKey && (
        <Wrapper apiKey={props.apiKey} render={render}>
          <Map center={mapLatLong} zoom={zoom} />
        </Wrapper>
      )}
    </>
    
  )
}

export default MapWrapper;

