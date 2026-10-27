// `1.1 What is API`
//     // API means 
//         // Application Programming Interface.

//     // An API is a set of rules (a programming contract) that lets one software system communicate with another software system.
    
//     // in Short
//         // API is an intermediary.
//         // it allows two applications to talk to each other 
//         // it usually works through requests and responses.

// `In Technical Terms`
//     // An API usually:
//         // Exposes endpoint(URLs)
//         // Accepts HTTP methods like GET, POST, PUT, DELETE
//         // Returns data in JSON(JavaScrip Object Notation)
//         // May require authenthication (API key or token)
// `Type of APIs`
//     `Private (internal)`
//         // Used inside one company
//         // Usually for internal service
//         // Not public
//     `Partner (Shared)`
//         // Shared with selected external partners
//         // Controlled access by agreemet/contract
//         // Not open to everyone
//     `Public (External)`
//         // Available to external developer
//         // Often requires registration and API key
//         // Can be free, paid or quota-limited


// `1.2 What is JSON`
//     // JSON
//         // JavaScript Object Notation.
//     // its a lightweight format for exhanging data b/n client and server.

//     // Why JSON is Preferred:
//         // Human readable
//         // Easy for JavaScript to parse
//         // Language independent
//         // Common outpit format for APIs

//             // {
//             //   "name": "John Doe",
//             //   "age": 30,
//             //   "email": "john@example.com",
//             //   "address": {
//             //     "street": "123 Main St",
//             //     "city": "New York",
//             //     "zip": "10001"
//             //   },
//             //   "hobbies": [
//             //     "reading",
//             //     "coding",
//             //     "hiking"
//             //   ],
//             //   "active": true
//             // }

// `1.3  API Key andy YouTube API key setup`
//     `What is API Key`
//         // An API key is unique string used to identify your app when it calls an API.
//         // It helps Providers
//             // Identify who is calling
//             // Control access
//             // Track usage and quota
//             // Protect APIs from abuse
//     `Steps to create a YouTube API key`
//         // 1. open Googel Cloud Console
//             // https://console.cloud.google.com/
//         // 2, Create a new project.
//         // 3, Go to APIs and Services => Credentials
//         // 4, Enable YouTube Data APIv3
//         // 5, Create API Key
//         // 6, Restrict the key (recommended):
//                 // Application restriction (HTTP refferre)
//                 // API restriction (YouTube Data API v3)
//             // https://developers.google.com/youtube/data/getting-started



// `1.4 Requesting JSON data from YouTube`
//     `Root domain for YouTube data API v3`
//         // https://developers.google.com/youtube/data/reference/rest/v3/search

//         // GET https://www.googleapis.com/youtube/v3/search
//     `Getting a channel ID`
//         // UCE_M8A5yxnLfW0KghEeajjw
//         // 







// //     {
// //   "kind": "youtube#searchListResponse",
// //   "etag": "oQGLNLZMQ5fbaM-JORvMrVLeWfo",
// //   "nextPageToken": "CAoQAA",
// //   "regionCode": "ET",
// //   "pageInfo": {
// //     "totalResults": 276,
// //     "resultsPerPage": 10
// //   },
// //   "items": [
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "gWj5buxaVFcMWXi5_2MLOnYYjOA",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "QeQAXuQpGEA"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-13T13:29:22Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "The new Apple HomeView: Keep the whole home connected, entertained, and in the know.",
// //         "description": "The new Apple HomeView is designed for life at home, with privacy built in to keep personal data private — for everyone who ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/QeQAXuQpGEA/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/QeQAXuQpGEA/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/QeQAXuQpGEA/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/QeQAXuQpGEA/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/QeQAXuQpGEA/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-13T13:29:22Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "RVFVZiMcTJAKRUOnKS8HHRq9c1s",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "bNdmGYamiWM"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-13T13:23:03Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "The new Apple TV 4K: The ultimate cinematic experience.",
// //         "description": "Apple TV 4K delivers the ultimate cinematic experience with 4K picture in Dolby Vision and HDR10+. The new, more powerful Siri ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/bNdmGYamiWM/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/bNdmGYamiWM/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/bNdmGYamiWM/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/bNdmGYamiWM/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/bNdmGYamiWM/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-13T13:23:03Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "12xNHBeMgM-exB4eVinc9NPH32I",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "xLL4UnrLNWs"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-13T13:16:22Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "The new HomePod mini 2: Rich, room-filling sound in a compact design.",
// //         "description": "HomePod mini 2 delivers rich, detailed, room-filling sound. Siri Al brings personal, powerful assistance — managing tasks and ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/xLL4UnrLNWs/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/xLL4UnrLNWs/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/xLL4UnrLNWs/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/xLL4UnrLNWs/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/xLL4UnrLNWs/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-13T13:16:22Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "eVdNP1ahgYNp0KwPruiKivVRpww",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "hkrYiZ_g9tw"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-13T13:12:01Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Welcome Apple HomeView: Designed for life at home.",
// //         "description": "The new Apple HomeView is designed to help you stay connected, entertained, and in the know. Built-in speakers with Spatial ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/hkrYiZ_g9tw/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/hkrYiZ_g9tw/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/hkrYiZ_g9tw/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/hkrYiZ_g9tw/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/hkrYiZ_g9tw/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-13T13:12:01Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "AXRVu1fH8pl4fVnf0m9BjOhRUyM",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "iUr53gDq380"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-12T19:25:32Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Safari Helps Keep Distractions Hidden",
// //         "description": "With Distraction Control built into the browser, Safari lets you hide distractions and remembers to keep them hidden next time you ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/iUr53gDq380/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/iUr53gDq380/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/iUr53gDq380/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/iUr53gDq380/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/iUr53gDq380/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-12T19:25:32Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "Ay4nrL2yMBrVokYUWCCFbDe4PbM",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "a110BjghioM"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-12T19:25:26Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Safari Helps Keep Trackers Away",
// //         "description": "A browser with built-in Intelligent Tracking Prevention, Safari helps block data trackers from following you around the internet.",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/a110BjghioM/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/a110BjghioM/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/a110BjghioM/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/a110BjghioM/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/a110BjghioM/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-12T19:25:26Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "G3ZTDu3JDkKJN7LVI0nMtuaaZxs",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "S0bSWTBtTD8"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-10-12T17:01:49Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Apple Vision Pro: Remnants Real Life Reactions",
// //         "description": "See real reactions from people experiencing, Remnants, Apple's first immersive horror film. Watch as they step inside Woldmere ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           },
// //           "uhd": {
// //             "url": "https://i.ytimg.com/vi/S0bSWTBtTD8/uhddefault.jpg",
// //             "width": 3840,
// //             "height": 2160
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-10-12T17:01:49Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "w15fkUepXWxZODzZMxE_E6WWQUc",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "mHXELsEResE"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-09-24T16:15:20Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "New Apple child safety features help parents keep kids safe online",
// //         "description": "Parents can now help keep kids even more safe on iPhone, iPad, and Mac with easier and more intuitive child safety features.",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/mHXELsEResE/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/mHXELsEResE/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/mHXELsEResE/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/mHXELsEResE/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/mHXELsEResE/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-09-24T16:15:20Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "lFiR6T_CUXU2e4ToL_ydAV_EPWU",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "c43tABiPIyQ"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-09-23T15:50:53Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Apple Games: Behind the Scenes of Stop-Motion Animation",
// //         "description": "Go behind the scenes to see how the team behind the Apple Games campaign film blended stop-motion animation with CGI.",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           },
// //           "fhd": {
// //             "url": "https://i.ytimg.com/vi/c43tABiPIyQ/fhddefault.jpg",
// //             "width": 1920,
// //             "height": 1080
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-09-23T15:50:53Z"
// //       }
// //     },
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "CEcNqJIZ2BxN7GC2clwpQr2nNJk",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "1WLqGs7c_yA"
// //       },
// //       "snippet": {
// //         "publishedAt": "2026-09-18T16:01:00Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Shot on iPhone 18 Pro: &quot;new trick” by ROSÉ",
// //         "description": "A look at ROSÉ'S new music video for \"new trick\" shot entirely on iPhone 18 Pro. The new variable aperture lens on the 48MP ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           },
// //           "standard": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/sddefault.jpg",
// //             "width": 640,
// //             "height": 480
// //           },
// //           "maxres": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/maxresdefault.jpg",
// //             "width": 1280,
// //             "height": 720
// //           },
// //           "qhd": {
// //             "url": "https://i.ytimg.com/vi/1WLqGs7c_yA/qhddefault.jpg",
// //             "width": 2560,
// //             "height": 1440
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2026-09-18T16:01:00Z"
// //       }
// //     }
// //   ]
// // }



// `1.5 Using YouTube API data ina react Component`
//     `About fetch`
//         // fetch() is a JavaScript function for network
      



//     // Step by step integration flow 
//         // 1, Create a component.
//         // 2, Import useState and useEffect
//         // 3, Create state with an empty array
//         // 4, Request data inside useEffect
//         // 5, Convert response to JSON using .json()
//         // 6, Store data.items in state.
//         // 7, Render data with .map() in JSX


        
//     // install axios 



// //   "https://youtube.googleapis.com/youtube/v3/search?  part=snippet &  channelId=UCxA7AzkI2Sndf8S1G5rSkwQ & maxResults=9 & order=date &    key=[YOUR_API_KEY]"; 











// Architecture Project & System Access Agreement

