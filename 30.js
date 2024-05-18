




const usePrompt = (message) => {
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Debes escribir un mensaje a consultar");
  }
  const value = prompt(message);
  if (value === null || value.trim().length === 0) {
    alert("El valor ingresado no puede estar vacío");
    return usePrompt(message);
  }
  return value;
};

const askForHowManyEmployees = () => {
  const employees = usePrompt("¿Cuántos pasantes van a ser dados de alta?");
  if (isNaN(employees) || employees <= 0) {
    alert("Debes ingresar un número mayor a 0");
    return askForEmployees();
  }
  return employees;
};

const calculateSalary = (hours) => {
  const salary = hours * 500;
  if (salary >= 15000) {
    const discount = salary * 0.05;
    return salary - discount;
  }
  return salary;
};

const askForEmployeeData = (number) => {
  if (isNaN(number) || number < 0) {
    throw new Error("Debes ingresar un número mayor a 0");
  }
  const name = usePrompt(`Ingrese el nombre del pasante ${number + 1}`);
  const hours = usePrompt(`Ingrese la cantidad de horas a trabajar de ${name}`);
  if (isNaN(hours) || hours <= 0 || hours > 48) {
    alert("Debes ingresar un número mayor a 0 y menor o igual a 48");
    return askForEmployeeData(number);
  }
  const salary = calculateSalary(hours);
  return { name, hours, salary };
};

const main = () => {
  const employees = askForHowManyEmployees();
  const employeesData = [];
  for (let i = 0; i < employees; i++) {
    employeesData.push(askForEmployeeData(i));
  }

  const msg = employeesData.map((employee) => {
    return `${employee.name} trabajó ${employee.hours} horas y cobró $${employee.salary}`;
  });

  alert(msg.join("\n"));
};

main();