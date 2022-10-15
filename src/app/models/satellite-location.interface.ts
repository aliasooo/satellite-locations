export interface Trace {
  latitude: number;
  longitude: number;
  height: number;
}

export interface Path {
  asAt: string;
  trace: Trace;
}

export interface Orbit {
  satId: number;
  healthCode: number;
  eccentricity: number;
  deltaInclination: number;
  rootOfSemiMajorAxis: number;
  a0: number;
  a1: number;
  omega0: number;
  omega: number;
  m0: number;
  omegaDot: number;
  gpsSeconds: number;
  gpsWeek: number;
  isHealthy: boolean;
}

export interface SatelliteLocation {
  path: Path[];
  orbit: Orbit;
  id: number;
  prn: number;
  constellation: string;
  displayName: string;
}
