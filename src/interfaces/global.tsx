export interface DoctorData {
  id:number;
  image:string;
  name: string;
  specialty: string;
  description:string;
  details:string;
  rating:number;
  cost:number;
}

export interface DoctorTimeSheets {
  id:number;
  doctorId:number;
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
