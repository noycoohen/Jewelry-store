import mongoose from "mongoose";

//type of user:
export type Name = {
  first: string;
  middle: string;
  last: string;
};

export type Address = {
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
};

export type Image = {
  url: string;
  alt: string;
};

export type User = {
  name: Name;
  isBusiness: boolean;
  phone: string;
  email: string;
  password: string;
  address: Address;
  image: Image;
  isAdmin?: boolean;
};

export type cardInput = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: Image;
  address: Address;
};

export type Card = cardInput & {
  bizNumber: number;
  likes: string[];
  user_id: mongoose.Types.ObjectId;
  createdAt: Date;
};

export type Login = {
  email: string;
  password: string;
};
