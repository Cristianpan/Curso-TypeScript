interface User {
  name: string;
  startDate: Date;
}

interface Admin {
  name: string;
  permission: string[];
}

interface UserAdmin extends User, Admin {}

const doctor: UserAdmin = {
  name: "Mauricio",
  startDate: new Date(),
  permission: ["Ver Paciente"],
};

