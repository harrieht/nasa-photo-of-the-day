import React from 'react';

const dummyData = {
    date:"2023-04-13",
    explanation: "Stars of the globular cluster NGC 2419 are packed into this Hubble Space Telescope field of view toward the mostly stealthy constellation Lynx. The two brighter spiky stars near the edge of the frame are within our own galaxy. NGC 2419 itself is remote though, some 300,000 light-years away. In comparison, the Milky Way's satellite galaxy, the Large Magellanic Cloud, is only about 160,000 light-years distant. Roughly similar to other large globular star clusters like Omega Centauri, NGC 2419 is intrinsically bright, but appears faint because it is so far away. Its extreme distance makes it difficult to study and compare its properties with other globular clusters that roam the halo of our Milky Way galaxy. Sometimes called \"the Intergalactic Wanderer\", NGC 2419 really does seem to have come from beyond the Milky Way. Measurements of the cluster's motion through space suggest it once belonged to the Sagittarius dwarf spheroidal galaxy, another small satellite galaxy being disrupted by repeated encounters with the much larger Milky Way.",
    hdurl: "https://apod.nasa.gov/apod/image/2304/hubble_ngc2419_potw1908a.jpg",
    title: "NGC 2419: Intergalactic Wanderer"
  }
  
const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;