/**
 * Created by ABennett on 3/20/17.
 */


var coursesService = {
    getCourses: getCourses
}
function getCourses(){
    var courses= [
        {
            "id": 11819,
            "status": "active",
            "membership_type": "public",
            "practice_area_id": 1379,
            "measurement_type": "yards",
            "media_id": 73172,
            "hole_count": 18,
            "local_rank": 14,
            "local_max_rank": 45,
            "global_rank": 7663,
            "global_max_rank": 31760,
            "name": "Thanksgiving Point",
            "addr_1": "599 N Frontage Rd",
            "city": "Lehi",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84043-3506",
            "phone": "(801)768-4955",
            "website": "http://www.thanksgivingpoint.org/visit/golf",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/1496302/uploaded-photo55790476-480x270.png",
            "inserted": "2009-07-27T23:55:06+00:00",
            "updated": "2017-01-14T19:57:10+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.4295033232823,
                "lng": -111.902993917466
            },
            "extras": [],
            "links": {
                "distance_info": [
                    11819
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/11819?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 12993,
            "status": "active",
            "membership_type": "public",
            "practice_area_id": 2980,
            "measurement_type": "yards",
            "media_id": 76480,
            "hole_count": 18,
            "local_rank": 26,
            "local_max_rank": 50,
            "global_rank": 12992,
            "global_max_rank": 31760,
            "name": "South Mountain Golf Club",
            "addr_1": "1247 Rambling Rd",
            "city": "Draper",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "27420",
            "phone": "(801)495-0500",
            "fees": "$40.00-$45.00",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/10513942/uploaded-photo72718798-480x270.png",
            "inserted": "2009-07-28T00:58:24+00:00",
            "updated": "2017-01-14T20:00:00+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.4901735023757,
                "lng": -111.857653856277
            },
            "extras": [],
            "links": {
                "distance_info": [
                    12993
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/12993?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 49557,
            "status": "active",
            "membership_type": "private",
            "measurement_type": "yards",
            "media_id": 17845,
            "hole_count": 18,
            "local_rank": 11,
            "local_max_rank": 27,
            "global_rank": 7690,
            "global_max_rank": 31760,
            "name": "The Ranches Golf Club",
            "addr_1": "4128 E Clubhouse Ln",
            "city": "Eagle Mountain",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84005",
            "phone": "(801) 789-8100",
            "website": "http://www.theranchesgolfclub.com/",
            "description": "The Ranches Golf Club is a spectacular 18-hole championship facility nestled in the hillside valley between Lehi and Eagle Mountain. Featuring a Western theme, The Ranches Golf Club offers golfers a relaxing retreat with acres of elbowroom to enjoy.\r\n\r\nCarved from the native prairie, the course's 220 acres present golfers a true links-style experience. Designed by noted architect Ron Garl, the golf course was created to play a challenging 7,050 yards from the back tees, yet offering multiple tee boxes to cater to players of all skill levels.\r\n\r\nWhile the shot quality and attractive layout will keep golfers focused and entertained, it will be difficult for even the most serious golfers to avoid being caught up in the surrounding vistas. To the South is Lake Mountain. To the East towers the Wasatch Front. To the West are the peaks of the Oquirrh Mountains, and Utah Lake is visible to the South.",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/3666262/uploaded-photo1368871643-480x270.png",
            "inserted": "2011-06-02T13:39:25+00:00",
            "updated": "2017-01-14T21:43:26+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.3771493208487,
                "lng": -111.965927079323
            },
            "extras": [],
            "links": {
                "distance_info": [
                    49557
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/49557?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 18300,
            "status": "active",
            "membership_type": "public",
            "measurement_type": "yards",
            "media_id": 27026,
            "hole_count": 18,
            "local_rank": 7,
            "local_max_rank": 42,
            "global_rank": 6978,
            "global_max_rank": 31760,
            "name": "Fox Hollow Golf Club",
            "addr_1": "1400 N 200 E",
            "city": "American Fork",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84003",
            "phone": "(801) 756-3594",
            "website": "http://www.foxhollowutah.com/",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/6279376/uploaded-photo54366206-480x271.png",
            "inserted": "2009-07-28T05:25:39+00:00",
            "updated": "2017-01-14T20:12:18+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.4031413225741,
                "lng": -111.787138581276
            },
            "extras": [],
            "links": {
                "distance_info": [
                    18300
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/18300?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 49290,
            "status": "active",
            "membership_type": "private",
            "practice_area_id": 2651,
            "measurement_type": "yards",
            "media_id": 99708,
            "hole_count": 18,
            "local_rank": 27,
            "local_max_rank": 52,
            "global_rank": 15330,
            "global_max_rank": 31760,
            "name": "Alpine Country Club",
            "addr_1": "4994 Country Club Drive",
            "city": "Highland",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84003-3971",
            "phone": " (801) 756-2479",
            "website": "www.alpinecountryclub.org/",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/11716093/uploaded-photo34742615-360x480.png",
            "inserted": "2011-05-27T15:44:04+00:00",
            "updated": "2017-03-07T06:26:57+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.4275795970612,
                "lng": -111.779580116272
            },
            "extras": [],
            "links": {
                "distance_info": [
                    49290
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/49290?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 32660,
            "status": "active",
            "membership_type": "public",
            "measurement_type": "yards",
            "media_id": 122906,
            "hole_count": 18,
            "local_rank": 7,
            "local_max_rank": 48,
            "global_rank": 6318,
            "global_max_rank": 31760,
            "name": "Riverbend Golf Course",
            "addr_1": "12800 S. 1040 W.",
            "city": "Riverton",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84065",
            "phone": "385-468-1460",
            "website": "http://www.slcountygolf.slco.org/cRiverbend/",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/2754340/uploaded-photo76128981-480x270.png",
            "inserted": "2010-02-09T10:31:44+00:00",
            "updated": "2017-01-14T20:47:22+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.5179670443034,
                "lng": -111.921865940094
            },
            "extras": [],
            "links": {
                "distance_info": [
                    32660
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/32660?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
        {
            "id": 37542,
            "status": "active",
            "membership_type": "public",
            "practice_area_id": 2708,
            "measurement_type": "yards",
            "media_id": 79185,
            "hole_count": 18,
            "local_rank": 22,
            "local_max_rank": 52,
            "global_rank": 12498,
            "global_max_rank": 31760,
            "name": "Cedar Hills Golf Club",
            "addr_1": "10640 North Clubhouse Drive",
            "city": "Cedar Hills",
            "state_or_province": "UT",
            "country": "United States",
            "zip_code": "84062",
            "phone": "801-796-1705",
            "website": "http://www.cedarhillsgolfutah.com/",
            "fax": "801-763-8546",
            "fees": "$40",
            "thumbnail": "https://swingbyswing-b9.s3.amazonaws.com/photo/in-round/10895860/uploaded-photo58008157-480x270.png",
            "inserted": "2010-05-27T17:22:04+00:00",
            "updated": "2017-01-14T21:05:09+00:00",
            "holes": [],
            "tee_types": [],
            "location": {
                "lat": 40.4257399390302,
                "lng": -111.761882901192
            },
            "extras": [],
            "links": {
                "distance_info": [
                    37542
                ]
            },
            "href": "https://api.swingbyswing.com/v2/courses/37542?access_token=a4566c8e-7c42-402c-a948-68cc705d9022",
            "type": "course"
        },
    ]

    return new Promise(function (resolve, reject){
        setTimeout(function () {
            resolve({courses: courses});
            reject({});
        }, Math.random() * 2000 + 1000)
    });
}
