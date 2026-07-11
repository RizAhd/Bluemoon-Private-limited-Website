import type { TrackRecordItem } from "./types";

/**
 * Real completed contracts from the company's Record of Work.
 * Government clients are named; private individuals are anonymised for privacy
 * (shown by project type, location, and value only).
 */
export const trackRecord: TrackRecordItem[] = [
  {
    project: "Primary Learning Resources Centre, B/Ganapathi Tamil Vidyalaya",
    client: "Dep. Chief Secretary (Eng. Services), Uva Provincial Council",
    clientType: "government",
    category: "Education",
    valueLKR: 13094510,
    year: "2025",
  },
  {
    project: "Commercial Building, Helabogan (Bandarawela)",
    client: "Local Government, Badulla",
    clientType: "government",
    category: "Commercial",
    valueLKR: 9400000,
    year: "2024",
  },
  {
    project: "Building Construction, Boragas",
    client: "Private client",
    clientType: "private",
    category: "Building",
    valueLKR: 17201170,
    year: "2021",
  },
  {
    project: "Shopping Hall — wall & floor finishing",
    client: "Private client",
    clientType: "private",
    category: "Finishing",
    valueLKR: 18740925,
    year: "2021",
  },
  {
    project: "Maternity-ward staff washrooms, Nuwara Eliya Hospital",
    client: "Ministry of Health",
    clientType: "government",
    category: "Health",
    valueLKR: 5658062,
    year: "2023",
  },
  {
    project: "Playground development — Welimada Vijaya & Muslim Vidyalaya",
    client: "Provincial Department of Education",
    clientType: "government",
    category: "Education",
    valueLKR: 4413730,
    year: "2021",
  },
  {
    project: "House repair, Silmiyapura",
    client: "Private client",
    clientType: "private",
    category: "Renovation",
    valueLKR: 4285850,
    year: "2021",
  },
  {
    project: "Retaining wall, Silmiyapura",
    client: "Private client",
    clientType: "private",
    category: "Civil Works",
    valueLKR: 3754660,
    year: "2021",
  },
  {
    project: "Roofing project, Walimada",
    client: "Private client",
    clientType: "private",
    category: "Finishing",
    valueLKR: 2371707,
    year: "2021",
  },
  {
    project: "Renovation, B/Al Murshid Maha Vidyalaya",
    client: "Uva Provincial Department of Education",
    clientType: "government",
    category: "Education",
    valueLKR: 2200000,
    year: "2024",
  },
  {
    project: "Welanvita Clinic Centre — roof & ceiling repair",
    client: "Provincial Ministry / Department of Health",
    clientType: "government",
    category: "Health",
    valueLKR: 2065725,
    year: "2021",
  },
  {
    project: "Girls' toilets & sanitary unit, Bogahakubura M.V.",
    client: "Provincial Department of Education",
    clientType: "government",
    category: "Education",
    valueLKR: 1218927,
    year: "2021",
  },
];
