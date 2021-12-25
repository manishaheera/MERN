const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


const createUser = () => ({
    
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    number: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
})

console.log(createUser())

const createCompany = () => ({
    id: faker.datatype.uuid(),
    companyName: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        Country: faker.address.country(),
    }
})

console.log(createCompany())

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get("/api/company/new", (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get("/api/company/user/new", (req, res) => {
    const company = createCompany();
    const user = createUser();
    const responseObject = {
        newUser:  user,
        newCompany: company,
    }
    res.json(responseObject);
});


app.listen( port, () => console.log(`port 8000`) );



