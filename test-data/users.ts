export interface TextBoxUser {
  fullName: string;
  email: string;
  currentAddress: string;           //this information entered in the form will be displayed  here
  permanentAddress: string;
}

export const validUser: TextBoxUser = {
  fullName: 'John Doe',
  email: 'john@test.com',
  currentAddress: 'Dhaka',
  permanentAddress: 'Chittagong',
};