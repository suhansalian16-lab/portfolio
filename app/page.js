

// // // // // function User (name,age,city) {
// // // // //   return (
// // // // //     <>
// // // // //     <p>hello {name}</p>
// // // // //     <p>age: {age}</p>
// // // // //     <p>city: {city}</p>
// // // // //     </>
// // // // //   )
// // // // // }
// // // // //  export default function Page() {
// // // // //   return(
// // // // //     <div>
// // // // //       <User name="John" age="25" city="New York" />
// // // // //       <User name="Jane" age="30" city="Los Angeles" />
// // // // //       <User name="Doe" age="35" city="Chicago" />
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // //const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// // // // // fruits.map(fruit => {
// // // // //   console.log(fruit);
// // // // // });
// // // // // export default function Page() {
// // // // //   const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// // // // //   return (
// // // // //     <div>
// // // // //       {fruits.map(fruit => (
// // // // //         <h1>{fruit}</h1>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // export default function page() {
// // // //   const students=[
// // // //     {id:1,name:"John",age:20,city:"New York"},
// // // //     {id:2,name:"Jane",age:22,city:"Los Angeles"},
// // // //     {id:3,name:"Doe",age:21,city:"Chicago"},
// // // //   ]
// // // //   return(
// // // //     <div>
// // // //       {students.map(student => (
// // // //         <div key={student.id}>
// // // //           <h1>{student.name}</h1>
// // // //           <p>Age: {student.age}</p>
// // // //           <p>City: {student.city}</p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }
// // // function Greeting({islogedIn}) {
// // //   let islogedIn=false
// // //   return (
// // //   <h1>{islogedIn ? "welcome" : "please log in"}
// // //   </h1>
// // //   );
// // // }

// // // export default function Page() {
// // //   return <Greeting islogedIn={false} />;
// // // }
// // const conferenceData = {
// //   name: "React Summit 2026",
// //   maxCapacity: 5,
// //   attendees: [
// //     { id: 1, name: "Alice", role: "Speaker", isCheckedIn: true, isVIP: true },
// //     { id: 2, name: "Bob", role: "Attendee", isCheckedIn: false, isVIP: false }
// //   ]
// // };

// // function ParticipantCard({ name, role, isVIP, isCheckedIn }) {
// //   return (
// //     <div>
// //       <h3>{name} {isVIP && "⭐"}</h3>
// //       <p>{role}</p>
// //       <p>{isCheckedIn ? "🟢 Checked In" : "🔴 Not Arrived"}</p>
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <div>
// //       <h1>{conferenceData.name}</h1>

// //       {conferenceData.attendees.length >= conferenceData.maxCapacity
// //         ? <p>⚠ Event is at capacity!</p>
// //         : null}

// //       {conferenceData.attendees.map((a) => (
// //         <ParticipantCard key={a.id} {...a} />
// //       ))}
// //     </div>
// //   );
// // }

// import state from './state';   
// export default function Page() {
//   return (
//     <>
//       <state />
//     </>
//   )
// }
// react.js 
// 1. comp basd stu
// 2. virtual dom : copy 
// 3. jsx : js + html
// import - export

//
// Props : (properties) Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
// function User({name , age , email}){
//   return (
//     <>
//     <p>hello, I'm {name}</p>
//     <p>my age : {age}</p>
//     <p>my email : {email}</p>
//     </>
//   )
// }


// Rendering Lists:
// Rendering a list = displaying multiple pieces of data from an array. :array , obj
// let arr = [23,24,25,26]
// Map, reduce, filter 

// const fruits = ["apple" , "Banana" , "orange"]
// fruits.map((i) => {
//   console.log(i);
// });

// ternary operator in js
// props : try basic questions
// Rendering lists
// Map function in js and react compo




// ======conditional operator
// let isLoggedIn = false
// function Greeting({ isLoggedIn }) {
//   return
//   (
//     <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
//   )
// }

// export default function Page() {
//   const students = [
//     { id: 1, name: "Rahul", age: 20, paased : true},
//     { id: 2, name: "Anita", age: 21, passed : false},
//     { id: 3, name: "Kiran", age: 19 , passed : true},
//   ];
//   return (
//     <div>
//       {/* Rendering Lists */}
//       {students.map((student) => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>Age: {student.age}</p>
//         </div>
//       ))}
//       {/* Conditional Operator */}
//       {students.passed ? (<p>Passed</p>) : (<p>Failed</p>)}
//     </div>
//   )
// }

//====kk

// export default function Page() {
//   const name = "Kashi"
//   return (
//     <div>
//     <Image 
//     src="/favicon.ico"
//     alt="img"
//     height="50"
//     width="50"
//     />
//     {/* jsx: js(fun) -> html(js) -> {} */}
//     <p>hi I'm {name}</p> 
//     <p>Developer</p>
//     <p>skills : Coding</p>
//     <p>Contact : 567-865</p>
//     </div>
//   )
// }


// const price = 50;
// const quantity = 4;
// ------------ display-------------
// Price: ₹50
// Quantity: 4
// Total: ₹200


//  export default function Page() {
//   const students = [
//     { id: 1, name: "Rahul", age: 20, passed: true },
//     { id: 2, name: "Anita", age: 21, passed: false },
//     { id: 3, name: "Kiran", age: 19, passed: true },
//   ];

//   return (
//     <div>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>Age: {student.age}</p>

//           {student.passed ? (
//             <p>Passed</p>
//           ) : (
//             <p>Failed</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }




// ==code - Activity
// function ParticipantCard({ name, role, isVIP, isCheckedIn }) {
//   return (
//     <div>
//       <h3>
//         {name}

//         {isVIP && <span> ⭐ VIP</span>}
//       </h3>

//       <p>Role: {role}</p>

//       <p>
//         {isCheckedIn
//           ? "🟢 Checked In"
//           : "🔴 Not Arrived"}
//       </p>
//     </div>
//   );
// }

// export default function Page() {
//   const attendees = [
//     {
//       id: 1,
//       name: "Alice",
//       role: "Speaker",
//       isCheckedIn: true,
//       isVIP: true,
//     },
//     {
//       id: 2,
//       name: "Bob",
//       role: "Attendee",
//       isCheckedIn: false,
//       isVIP: false,
//     },
//     {
//       id: 3,
//       name: "Charlie",
//       role: "Volunteer",
//       isCheckedIn: true,
//       isVIP: false,
//     },
//   ];

//   return (
//     <div>
//       <h1>React Summit 2026</h1>

//       {attendees.map((attendee) => (
//         <ParticipantCard
//           key={attendee.id}
//           name={attendee.name}
//           role={attendee.role}
//           isVIP={attendee.isVIP}
//           isCheckedIn={attendee.isCheckedIn}
//         />
//       ))}
//     </div>
//   );
// }











// ===========================================State Management 

// Props are data coming into a component. State is data managed by the component that can change over time.
// State is data that can change during the lifetime of a component, and when the state changes, React re-renders the component.


// import State from "./State"
// export default function Page() {
//   return (
//     <div>
//       <State/> 
//     </div>
//   )
// }




// comp, multiple comp, Props(properties)
// rend. list
// cond. ope
// cond. rend.

// State Managmnt. in react.js
// Hooks in react.js

// Props are data coming into a component. State is data managed by the component that can change over time.
// State is data that can change during the lifetime of a component, and when the state changes, React re-renders the component.
import state from './state'
import form from './form'
import Navbar from './navbar'
export default function Home(){
  return(
    <>
      <Navbar />  
    </>
  )
}