import fs from 'fs';
const host = process.env.DB_HOST;
const db = 
{
    "dev": {
        "driver": "mysql",
        "host": `${host}`,
        "user": "root",
        "password": "root",
        "database": "my_db"
    }
}

const jsonData = JSON.stringify(db, null, 2);

fs.writeFile("database.json", jsonData, 'utf-8', (err) => {
    if(err) {
        console.error('Error writing to file', err);
    }
    console.log('Data Written to file.');
});