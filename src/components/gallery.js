import React, { Component } from 'react'

import DztImageGalleryComponent from 'reactjs-image-gallery'

class Gallery extends Component {

    render() {

        var data = [{
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/156.png',
            title: 'Class 156',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/156.png',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/377444.jpg',
            title: 'Class 377',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/377444.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/apt.jpg',
            title: 'APT ',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616844/graphics/apt.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616843/graphics/class_90014.jpg',
            title: 'Class 90014 "Norwich And Nolfolk Festival',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616843/graphics/class_90014.jpg',
        },

        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616842/graphics/class_911015.jpg',
            title: 'Class 911015',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616842/graphics/class_911015.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/class_321.jpg',
            title: 'Class 321 "Dusty Bin"',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/class_321.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/142035.jpg',
            title: 'Class 142 "Pacer" Northern',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/142035.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/class-66.jpg',
            title: 'Class 66 EWS',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616841/graphics/class-66.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616840/graphics/800_GWR.jpg',
            title: 'Class 800 GWR',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616840/graphics/800_GWR.jpg',
        },
        {
            url: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616840/graphics/class_37.jpg',
            title: 'Class 800 GWR',
            thumbUrl: 'https://res.cloudinary.com/b2b-webmasters/image/upload/v1593616840/graphics/class_37.jpg',
        },
        ];

        return (
            <div >


                <DztImageGalleryComponent className="bg-blue"
                    images={data} />

            </div>
        )
    }

}
export default Gallery;