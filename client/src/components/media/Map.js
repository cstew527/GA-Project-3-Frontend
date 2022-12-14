// import * as React from 'react';
// import Map, {NavigationControl , GeolocateControl, Marker, Popup} from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// function App() {
//     const currentUser = 'Jaime'
//         const [posts, setPosts] = useState([]);
//         const [currentPin, setCurrentPin] = useState(null);
//         const [newLocation, setNewLocation] = useState(null);
//         useEffect(() => {
//                     const getPosts = async () => {
//                         try {
//                             const allPosts = await axios.get('https://project3-backend-jamie-chris.herokuapp.com/posts');
//                             setPosts(allPosts.data);
//                         } catch (err) {
//                             console.log(err);
//                         }
//                     };
//                     getPosts();
//                 }, []);
//                 const markerClick = (id) => {
//                     setCurrentPin(id)
//                 }
//   return (
//     <div className="App">
//       <Map mapLib={maplibregl}
//         initialViewState={{
//           longitude: -74,
//           latitude: 41,
//           zoom: 6
//         }}
//         style={{width: "100%", height: " calc(100vh - 77px)"}}
//         mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MRoU2XD906he5O5xSCyJ"
//       >
//         <GeolocateControl
//                     positionOptions={{ enableHighAccuracy: true }}
//                     trackUserLocation={true}
//                     onGeolocate={(position) => {
//                         // get latitude and longitude of user current location
//                         // setNewLocation([position.posts.lat, position.post.long]);
//                     }}
//                 />
//         <NavigationControl position="top-left" />
//         {posts.map((p) => {
//                     return (
//                         <Marker
//                             longitude={p.long}
//                             latitude={p.lat}
//                         >
//                             <Room
//                                 style={{
//                                     color: p.username === currentUser ? "red" : "blue",
//                                     cursor: "pointer"
//                                 }}
//                                 onClick={() => markerClick(p._id)}
//                             />
//                             {p._id === currentPin && (
//                                 <Popup
//                                     longitude={p.long}
//                                     latitude={p.lat}
//                                     anchor="top"
//                                     closeButton={true}
//                                     closeOnClick={false}
//                                     onCLose={() => setCurrentPin(null)}
//                                 >
//                                     <div className='card'>
//                                         <label>Place</label>
//                                         <h4>{p.postName}</h4>
//                                         <label>Comment</label>
//                                         <p>{p.comment}</p>
//                                         <label>Info</label>
//                                         <span className='username'>{p.username}</span>
//                                         <span>{p.long}</span>
//                                         <span>{p.lat}</span>
//                                         {/* <span className='date'>{format(p.createdAt)}</span> */}
//                                     </div>
//                                 </Popup>
//                             )}
//                         </Marker>
//                     )
//                 })}
//       </Map>
//     </div>
//   );
// }
// export default App;
