export interface User {
  name: string
  email: string
  image: string
  id: string
}

export interface Chat {
  id: string
  messages: Message[]
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  text: string
  timestamp: number
}


export interface DoctorData extends User {
  specialty: string;
  description:string;
  details:string;
  rating:number;
  cost:number;
}

export interface DoctorTimeSheets {
  id:string;
  doctorId:string;
  dates:TimeSheetData[];
}

export interface TimeSheetData {
  date:string;
  times: string[];
}

export interface PaymentData {
  doctorId:number;
  date:string;
  time:string;
  userId:number;
  amount:number;
}

export interface Appoinment{
  id:number;
  doctorId:number;
  specialty:string;
  doctorName:string;
  date:string;
  time:string;
}
