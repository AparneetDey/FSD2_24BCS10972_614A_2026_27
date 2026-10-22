import express, { urlencoded } from "express";

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(urlencoded({extended: true, limit: "16kb"}));

let data = [
    {
        "id": 1,
        "name": "Aman",
        "salary": 35000,
        "department": "IT"
    },
    {
        "id": 2,
        "name": "Priya",
        "salary": 45000,
        "department": "HR"
    },
    {
        "id": 3,
        "name": "Rahul",
        "salary": 40000,
        "department": "IT"
    }
]

app.get("/", (req, res) => {
    res
    .status(200)
    .json("Server is running")
})

app.get("/api/v1/employees", (req, res) => {
    res
    .status(200)
    .json(data);
})

app.get("/api/v1/employees/:id", (req, res) => {
    const {id} = req.params;

    if(!id || id?.trim() === "") {
        res
        .status(400)
        .json("Employee id is required")
    }

    const employee = data.filter((emp) => emp.id === Number(id));
    console.log(employee)

    if(employee.length === 0) {
        res
        .status(404)
        .json("Employee not found")
    }

    res
    .status(200)
    .json(employee[0])
})

app.post("/api/v1/employees", (req, res) => {
    const {id, name, salary, department} = req.body;

    if([id, name, salary, department].some(field => !field || field?.trim() === "")) {
        res
        .status(400)
        .json("All fields are required")
    }

    if(data.some(emp => emp.id === Number(id))) {
        res
        .status(400)
        .json("Employee of this id exists")
    }

    const newEmp = {
        id: Number(id),
        name,
        salary: Number(salary),
        department
    }

    data.push(newEmp);

    res
    .status(201)
    .json(
        {
            newEmp,
            message: "New employee created successfully"
        }
    )
})

app.put("/api/v1/employees/:id", (req, res) => {
    const {id} = req.params;
    const {name, salary, department} = req.body;

    if(!id || id?.trim() === "") {
        res
        .status(400)
        .json("Id is required")
    }
    if(!data.some(emp => emp.id === Number(id))) {
        res
        .status(404)
        .json("Employee does not exist")
    }
    if([name, salary, department].some(field => !field || field?.trim() === "")) {
        res
        .status(400)
        .json("No field can be empty")
    }

    data = data.map(emp => {
        if(emp.id === Number(id)) {
            emp.name = name;
            emp.salary = Number(salary);
            emp.department = department;
        }

        return emp;
    })

    const updatedEmp = data.filter(emp => emp.id === Number(id));

    res
    .status(200)
    .json({
        employee: updatedEmp[0],
        message: "Employee updated successfully"
    })
})

app.delete("/api/v1/employees/:id", (req, res) => {
    const {id} = req.params;

    if(!id || id?.trim() === "") {
        res
        .status(400)
        .json("Id is required")
    }

    if(!data.some(emp => emp.id === Number(id))) {
        res
        .status(404)
        .json("Employee does not exist")
    }

    data = data.filter(emp => emp.id !== Number(id))

    res
    .status(200)
    .json({
        message: "Employee deleted successfully"
    })
})

app.get("/api/v1/employees/department/:department", (req, res) => {
    const {department} = req.params;

    if(!department || department?.trim() === "") {
        res
        .status(400)
        .json("Department is required")
    }

    const departmentData = data.filter(emp => emp.department === department);

    res
    .status(200)
    .json({
        department: departmentData,
        message: "All employees of department fetched"
    })
})

app.get("/api/v1/employees/sort/salary", (req, res) => {
    const sorted = data.toSorted((a, b) => a.salary - b.salary);

    res
    .status(200)
    .json({
        sortedEmployee: sorted,
        message: "Employees sorted with salary"
    })
})

export {app};