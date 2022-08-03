// notes.js

// state management

// has only been one way to keep track of changes in our application (client -front)
// state => class basecond state={ } setState
// functional => useState
// store
// context API (is what redux was written) -> relationship between consumer and prov

// test as documentation
// are a english or verbal form of what should or should not happen with any piece of code

// TDD 
// devlopment lifecycle wherin you right your test first => we use those test to infer what code we should be writing

// FPR (Fail Pass Refactor)

// plaining phase of PSP
// write a test for the smallest unit of functionality you canf in (unit tests) -> singular function, singular functionality, or a singualr interaction
// integration tests and E2E (end to end tests)
// 1 tests youw rite should fail 
// 2 write minimal amount of code to make that test pass 
// 3 refactor your code [always run teh tests one mroe time to ensure they still pass]


// AAA














// react dashboard series of code along final review
// on install 
// chromium (playwright package) -> stopping the entire node module install from happening
// no package-lock.json and no node_modules

// non ssl download


// to just not DL playwright (remove the refernce to that package [package.json]) => force pin a PW version to something way lower
// npm install 

// CORS (cross orgin resource sharing) -> denial of access to a server
// Access to XMLHttpRequest at 'https://dashboard.mthree.academy/daily//kpis' from origin 'http://localhost:3000' 
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// fix it in your server code (API)
// with JPA/springboot 

// frontend/ client code
// fetch the data in a different way (axios: https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js
// cors configruation

// browser
// extensions (LM VM will not alloow you to download or isntall these extensions)

// 200, 300, 400, 500

// if you fixed the cors errors and still not able to fetch data ... then you go to postman and data still coming 
// The certificate issue has something to do with the setup of the students' VDEs.  They're not finding local certificate root.  
// Workaround found by students is to hit the API in the browser, click "allow anyway" when you get the 
// certificate warning from "responsible-defenders.pages".  This convinces Windows to trust the API site for a 
// few minutes - repeat as necessary.


// relational db (RDbMS) -> SQL based 
// a way for us to persist data wherin that data is structured collective and rogranized via specifically pre-defined relationships 
// table, column, row, key
// simlar groupings of data are stored in tables (row & column based organizational tool)
// row -> singular thign (so user to the users table)
// column -> characteristic of more detailed piece of data on that row item (user row === UN c, pw c, adm, ID[key])
// keys = unique identifier for each row data (for each user) -> create relationships

// relations
// 1 to 1 relationship
// many to 1
// 1 to many
// many to many 
// snowflake


// transaction
// A database transaction is one or more SQL statements that are executed as a sequence of operations that form a single 
// logical unit of work. Transactions provide an "all-or-nothing" proposition, meaning that the entire transaction must 
// complete as a single unit and be written to the database or none of the individual components of the transaction should go 
// through. In the relation database terminology, a transaction results in a COMMIT or a ROLLBACK. 
// Each transaction is treated in a coherent and reliable way independent of other transactions. (stateless)

// ACID 
// banking monetary
// data integrtiryt -> overall complleteness, acuracy,a nd consistency of data
// keys, foreign keys, nont null, checks, defaults, unique (also custom configurations)
// Atomicity -> all or nothing
// Consistency
// Isolation (concurency control)
// Durability -> any change to DB is perminaent 

// non-relational (MongoDB -> u can now use sql and you can now create relationship, ACID based transcations)
// BASE
// basically avilable
// soft state
// eventually consistent


// Normalization (enforces uniformity)
// standardization of the data in your organization system 

// data sanitization is not the same (coming from the input of the form on the client before it even makes it to the DB)

// ERD
// entity relation diagram


// DDL
// script languages used to setup DB (can be exported from mysql workbench after creating an ERD model)


// SPrint 2 day 4 session 4
// Create/Deploy/Monitor a SQL Database on Marketplace
// organization needs to be ITT Curriculum 2022 NOT what is pictured (June 2022)


