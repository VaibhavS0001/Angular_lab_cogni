export interface Events {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageURL: string;
  location: { address: string; city: string; country: string };
  sessions: {
    id: number;
    name: string;
    presenter: string;
    duration: string;
    level: string;
    voter: Array<string>;
  };
}
