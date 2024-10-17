import { gql } from "@apollo/client";

export const loadVYXVehicles = gql`
  query {
    vehicles(codespaceId: "VYX") {
      line {
        publicCode
        lineName
      }
      lastUpdated
      location {
        latitude
        longitude
      }
    }
  }
`;
export const loadOSTVehicles = gql`
  query {
    vehicles(codespaceId: "OST") {
      line {
        publicCode
        lineName
      }
      lastUpdated
      location {
        latitude
        longitude
      }
    }
  }
`;

export const loadNSBVehicles = gql`
  query {
    vehicles(codespaceId: "NSB") {
      line {
        publicCode
        lineName
      }
      lastUpdated
      location {
        latitude
        longitude
      }
    }
  }
`;

export const loadVYBVehicles = gql`
  query {
    vehicles(codespaceId: "VYB") {
      line {
        publicCode
        lineName
      }
      lastUpdated
      location {
        latitude
        longitude
      }
    }
  }
`;
