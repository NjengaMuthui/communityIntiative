interface Contact {
  label: string;
  link: string;
}

interface ManagerDetails {
  name: string;
  role: string;
  photoUrl?: string;
  bio?: string;
  contacts?: Contact[];
}
export interface Payment {
  accountNumber: string;
  amount: number;
}
export { Contact, ManagerDetails, Payment };
