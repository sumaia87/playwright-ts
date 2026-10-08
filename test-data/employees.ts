export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  salary: string;
  department: string;
}

export const newEmployee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
  age: '30',
  salary: '50000',
  department: 'QA',
};