// import React from "react";
// import UserContext from "../utils/UserContext";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInfo: {
//         name: "Dummy Name",
//         location: "US",
//         avatar_url: "",
//       },
//     };
//   }

//   async componentDidMount() {
//     // console.log(this.props.user + " ComponentDidMount is called");
//     const data = await fetch("https://api.github.com/users/sanjitSG");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     });
//   }

//   componentDidUpdate() {}

//   componentWillUnmount() {}

//   render() {
//     const { name, location, avatar_url } = this.state.userInfo;
//     return (
//       <div className="user-card">
//         <h3>Name: {name}</h3>
//         <h4>Location: {location}</h4>
//         <h4>Social: @SanjitGoa</h4>
//         <img
//           src={avatar_url}
//           alt={name}
//         />
//         <UserContext.Consumer>
//           {(data) => (
//             <h1 className="font-medium p-3 m-3 border inline bg-red-200">{data.loggedInUser}</h1>
//           )}
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }

// export default UserClass;